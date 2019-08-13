import React, { Component } from 'react';
import './App.css';
import NavBar from "./Containers/NavBar";
import Contact from "./Containers/Contact"
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router className="App">
        <NavBar></NavBar>
          <Route
            exact path="/" 
            component={Home}>
          </Route>
          <Route
            exact path="/about" 
            component={() => <Text text="pagina 2"/>}>
          </Route>
          <Route
            exact path="/contact-us" 
            component={Contact}>
          </Route>
          <Route
            exact path="/login" 
            component={Contact}>
          </Route>
      </Router>
    );
  }
}

const Text = (props) => {
  return(
    <p>{props.text}</p>
  )
}

class Home extends React.PureComponent{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <main className="home">
        <h1>Home</h1>
      </main>
    )
  }
}

export default App;
