import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Home from '../../containers/Home';
import Contact from '../Contact';

function Template() {
    return(
        <Router>
            <Header />
            <Nav/>
            <Route path="/" exact component={Home}/>
            <Route path="/contact/" component={Contact}/>
            <Footer />
        </Router>
    )
}

export default Template;