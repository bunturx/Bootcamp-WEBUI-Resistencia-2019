import React from "react";
import "./index.css"

class SearchBar extends React.PureComponent {
    constructor(props){
        super(props)
        this.state = {
            input : ""
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        this.setState({ input : e.target.value })
    }
    handleClick(){
        this.props.buttonAction(this.state.input)
    }
    render(){
        return(
            <div className="searchContainer">
                <input onChange={this.handleChange} value={this.state.input} className="searchInput" type="text"/>
                <button onClick={this.handleClick} className="searchButton" >
                    <img className="searchButtonIcon" src="https://images.vexels.com/media/users/3/132068/isolated/preview/f9bb81e576c1a361c61a8c08945b2c48-icono-de-b-squeda-by-vexels.png" alt="Buscar"/>
                </button>
            </div>
        )
    }
}

export default SearchBar;