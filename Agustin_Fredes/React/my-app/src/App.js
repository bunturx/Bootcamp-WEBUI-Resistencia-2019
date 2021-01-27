import React, { Component } from 'react';
import Main from './components/Main';
import Header from './components/Header';
import './App.css';




class App extends Component {
  constructor(props){
    super(props);
  }

  controllerAddTask(){
    console.log(this.refs.input.value.length)
    if (this.refs.input.value.length > 0){
      this.refs.main.addTask(this.refs.input.value); 
      this.refs.input.value = "";
      this.refs.input.focus();
    }
    else {
      alert("No puedes añadir tareas sin texto")
    }
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <aside className="aside">
          <input type="text" ref="input" placeholder="Añada su tarea aqui"/>
          <button onClick={this.controllerAddTask.bind(this)}>Añadir</button>
        </aside>
        <Main ref="main"/>
      </div>
    );
  }
}

export default App;
