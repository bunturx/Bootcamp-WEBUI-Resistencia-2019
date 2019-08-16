import React from "react";
import "./index.css"

const Header = (props) => {
    return(
        <header className="header">
                <img className="headerImage" src="https://cdn1.iconfinder.com/data/icons/the-movies/100/movie-06-512.png" alt="Movies Logo"/>
                <h1 className="headerTitle">{props.children}</h1>
        </header>
    )
}

export default Header;