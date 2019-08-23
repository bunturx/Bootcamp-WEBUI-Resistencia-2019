import React from "react";
import "./index.css";
import SearchBar from "./SearchBar";
import SearchTags from "./SearchTags";
import Results from "./Results";

class HomeSearch extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      checked: 0,
      pages: 0,
      searchList: [],
      Tags: { 0: "movie", 1: "series", 2: "episode" },
      Error: ""
    };
    this.search = this.search.bind(this);
    this.selectTag = this.selectTag.bind(this);
  }

  selectTag(tag) {
    this.setState({ checked: tag });
  }

  fetchToJson(url) {
    return new Promise((resolve, reject) => {
      fetch(url).then(data => {
        resolve(data.json());
      });
    });
  }

  concatPages(arg) {
    this.setState({ searchList: this.state.searchList.concat(arg) });
  }

  search(text) {
    this.setState({ Error: "" });
    this.setState({ searchList: [] });
    this.fetchToJson(
      `http://www.omdbapi.com/?type=${
        this.state.Tags[this.state.checked]
      }&s=${text}t&plot=short&apikey=5242b7c7`
    ).then(data => {
      if (data.Error === undefined) {
        this.pages = Math.round(data.totalResults / 10);
        for (let i = this.pages; i > 0; i--) {
          this.fetchToJson(
            `http://www.omdbapi.com/?page=${i}&plot=full&type=${
              this.state.Tags[this.state.checked]
            }&s=${text}t&apikey=5242b7c7`
          )
            .then(item => item.Search)
            .then(data => {
              this.concatPages(data);
            })
            .catch(err => console.error(err));
        }
      } else {
        this.setState({ Error: data.Error });
      }
    });
  }

  render() {
    return (
      <main className="main">
        <SearchBar buttonAction={this.search} />
        <SearchTags tagSelector={this.selectTag} />
        <hr />
        {(this.state.Error && (
          <h1 style={{ margin: "40px", textAlign: "center" }}>
            {this.state.Error}
          </h1>
        )) || <Results List={this.state.searchList} />}
      </main>
    );
  }
}

export default HomeSearch;
