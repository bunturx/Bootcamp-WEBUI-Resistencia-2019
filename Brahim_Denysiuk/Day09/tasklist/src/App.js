import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Navigation from './components/Navigation';
import Tasks from './components/Tasks';
import TodoForm from './components/TodoForm';

import { tasklist } from './tasklist.json';

class App extends Component{
  constructor() {
    super();
    this.state = {
      tasklist
    }
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleRemoveTask = this.handleRemoveTask.bind(this);
  };

  handleAddTask(task){
    this.setState({
      tasklist: [...this.state.tasklist, task]
    })
  }
  handleRemoveTask(index){
    let tasklist_temp = this.state.tasklist;
    delete tasklist_temp[index];
    tasklist_temp = tasklist_temp.filter(Boolean)
    if(window.confirm("sure?")){
      this.setState({
        tasklist: tasklist_temp
      });
    }

  }
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation title="TaskApp"/>
          <Tasks todo = {this.state.tasklist} onRemoveTask={this.handleRemoveTask}/>
          <TodoForm onAddTask={this.handleAddTask}></TodoForm>
          <div className="clear-fix"></div>
          <div className="extra">
            <Route path="/help" component={Help} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );

  }



}

function Help() {
  return (
    <div className="help">
      <h2>Help</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
    );
}

function About() {
  return (
    <div className="about">
      <h2>About</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
    );
}

export default App;
