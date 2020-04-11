import React, {Component} from 'react'
import './Navigation.css';

class Navigation extends Component{

	render(){
		return(
			<div className="Navigation">
				<h2>
					{ this.props.title }
				</h2>
				<nav>
			    <ul>
			      <li>
			        <a href="/help">
			          Help
			        </a>
			      </li>
			      <li>
			        <a href="/about">
			          About
			        </a>            
			      </li>
			    </ul>
			  </nav>
			  <div className="clear-fix"></div>
			</div>
		);
	}
}


export default Navigation;