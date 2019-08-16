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
      <div style={{height: "86%", width: "100%"}}>
        <Route exact path="/" component={HomeSearch}></Route>
      </div>
        <Footer></Footer>
    </Router>
  );
}

export default App;
