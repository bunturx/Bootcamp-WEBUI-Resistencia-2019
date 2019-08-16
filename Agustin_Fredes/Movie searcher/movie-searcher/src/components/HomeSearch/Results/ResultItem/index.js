import React from "react";
import "./index.css";

const ResultItem = (props) => {
  return (
    <li className="resultItem">
      <a className="resultItemLink" href="www.google.com">
        <img src={props.Image} className="resultItemImage" alt=""/>
        <p className="resultItemTitle">{props.children}</p>
      </a>
    </li>
  );
};

export default ResultItem;
