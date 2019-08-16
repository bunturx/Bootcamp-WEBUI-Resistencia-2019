import React from "react";
import "./index.css";
import ResultItem from "./ResultItem";

const Results = props => {
    const List = props.List.map((item,index) => <ResultItem>{item.title}</ResultItem>)
  return <ul className="resultList">
      {List}
  </ul>;
};
Results.defaultProps = { results : [] }

export default Results;
