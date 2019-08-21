import React from "react";
import "./index.css";
import ResultItem from "./ResultItem";

const Results = props => {
    var List = props.List.map((item, index) => (
      <ResultItem key={index} ImageURL={item.imdbID} Image={item.Poster}>
        {item.Title}
      </ResultItem>
    ))
  ;
  return <ul className="resultList">{List}</ul>;
};
Results.defaultProps = { results: [] };

export default Results;
