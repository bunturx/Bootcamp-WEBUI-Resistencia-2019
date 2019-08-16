import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';

const Nav = () =>
    <nav>
        <ul>
            <li>
                <Link className="link" to="/">Home</Link> 
            </li>
            <li>
                <Link className="link" to="/contact">Contact</Link>
            </li>
            
        </ul>
    </nav>

export default Nav;