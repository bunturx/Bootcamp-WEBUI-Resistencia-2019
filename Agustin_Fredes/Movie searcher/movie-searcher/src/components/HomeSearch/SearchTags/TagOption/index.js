import React from "react";
import "./index.css";

class TagOption extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.check(this.props.selector);
  }

  render() {
    return (
      <div className="tagOption">
        <label className="tagOptionText">
          <input
            onChange={this.handleChange}
            className="tagOptionRadio"
            type="radio"
            name="Tag"
          />
          <span>{this.props.children}</span>
        </label>
      </div>
    );
  }
}

export default TagOption;
