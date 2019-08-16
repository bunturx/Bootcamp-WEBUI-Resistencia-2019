import React from "react";
import "./index.css"
import SearchBar from "./SearchBar"
import SearchTags from "./SearchTags"


class HomeSearch extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = { checked : "" }
        this.search = this.search.bind(this);
        this.selectTag = this.selectTag.bind(this)
    }

    selectTag(tag){
        this.setState({ checked : tag })
    }

    search(text){
        console.log(`${text}, ${this.state.checked}`)
    }

    render(){
        return(
                <main className="main">
                    <SearchBar buttonAction={this.search}></SearchBar>
                    <SearchTags tagSelector={this.selectTag} />
                </main>
        )
    }
}

export default HomeSearch;