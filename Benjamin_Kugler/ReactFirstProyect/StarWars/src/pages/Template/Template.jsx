import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Header from '../../components/Header';
import Nav from '../../components/Nav'
import Home from '../Home'
import Contact from '../Contact'
function Template(){
    return(
        <Router>
            <Header />
            <Nav />
            <Route path="/" exact component={Home} />
            <Route path="/contact/" component={Contact} />
        </Router>
    )
}
export default Template