import React from "react";
// eslint-disable-next-line
import { BrowserRouter as Route, Link} from "react-router-dom"

class NavBar extends React.PureComponent{
    render(){
      return(
        <nav className="navBar">
          <Link to="/"><p>Home</p></Link>
          <Link to="/contact-us"><p>Contact us</p></Link>
          <Link to="/about"><p>About</p></Link>
        </nav>
      )
    }
  }

export default NavBar;