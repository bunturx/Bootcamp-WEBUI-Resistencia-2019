import React from "react";
import "./index.css";

class ResultItem extends React.PureComponent{
  constructor(props){
    super(props)
    this.props.Image !== "N/A" ? this.state= { image : this.props.Image } : this.state = { image : "http://www.interlog.com/~tfs/images/posters/TFSMoviePosterUnavailable.jpg" }
  }
  render(){
    return (
      <li className="resultItem">
        <a className="resultItemLink" href={`/item/${this.props.ImageURL}`}>
          <img src={this.state.image} className="resultItemImage" alt=""/>
          <p className="resultItemTitle">{this.props.children}</p>
        </a>
      </li>
    );
  }
};

export default ResultItem;
