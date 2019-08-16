import React from "react";
import "./index.css";
import SearchBar from "./SearchBar";
import SearchTags from "./SearchTags";
import Results from "./Results";

class HomeSearch extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { checked: 0, pages: 0, searchList: [] };
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
    console.log(arg);
    this.setState({ searchList: this.state.searchList.concat(arg) });
  }

  search(text) {
    this.fetchToJson(
      `http://www.omdbapi.com/?type=movie&s=${text}t&i=tt3896198&apikey=5242b7c7`
    ).then(data => {
      if (data.Error === undefined) {
        this.pages = Math.round(data.totalResults / 10);
        for (let i = this.pages; i > 0; i--) {
          this.fetchToJson(
            `http://www.omdbapi.com/?page=${i}&type=movie&s=${text}t&i=tt3896198&apikey=5242b7c7`
          )
            .then(item => item.Search)
            .then(data => {
              this.concatPages(data);
            });
        }
      } else {
        console.log(data.Error);
      }
    });
  }

  render() {
    return (
      <main className="main">
        <SearchBar buttonAction={this.search} />
        <SearchTags tagSelector={this.selectTag} />
        <hr />
        <Results List={this.state.searchList}/>
      </main>
    );
  }
}

export default HomeSearch;
