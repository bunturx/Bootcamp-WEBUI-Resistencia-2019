import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MovieDescription from '../MovieDescription'
import Home from '../Home';

function Template() {
    return(
        <Router>
            <Header />
            <Route path="/" exact component={Home}/>
            <Route path="/moviedesc/" component={MovieDescription} />
            <Footer />
        </Router>
    )
}

export default Template;