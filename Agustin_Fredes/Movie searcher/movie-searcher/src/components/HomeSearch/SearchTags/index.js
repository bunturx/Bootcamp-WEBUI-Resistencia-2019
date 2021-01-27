import React from "react";
import "./index.css";
import TagOption from "./TagOption";

class SearchTags extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      options: [{ name: "Movie" }, { name: "Series" }, { name: "Episodes" }]
    };
    this.checkUnCheck = this.checkUnCheck.bind(this);
  }
  checkUnCheck(index) {
    this.props.tagSelector(index);
  }
  render() {
    this.options = this.state.options.map((item, index) => (
      <TagOption check={this.checkUnCheck} selector={index} key={index}>
        {item.name}
      </TagOption>
    ));
    return <div className="searchTagsContainer">{this.options}</div>;
  }
}

export default SearchTags;
