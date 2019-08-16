import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomeSearch from "./components/HomeSearch"
import './App.css';

function App() {
  return (
    <Router>
      <Header>Movies Searcher</Header>
        <Route exact path="/" component={HomeSearch}></Route>
        <Footer></Footer>
    </Router>
  );
}

export default App;
