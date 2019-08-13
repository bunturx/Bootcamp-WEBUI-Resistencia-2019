import React, { PureComponent } from 'react'
import Task from '../Task';

class Main extends PureComponent{
    constructor(props){
      super(props);
      this.state = { text : [] };
    }
  
    addTask(arg){
      this.setState({ text : this.state.text.concat(arg) })
    }
  
    removeTask(arg){
      confirm("Estas seguro de que deseas eliminar?") ? this.setState({ text : this.state.text.filter((item,index) => index != arg) }) : "";
    }
  
    render(){
      return(
        <main className="main">
          {this.state.text.map((item,index) => <Task TaskText={item} taskId={index} remove={this.removeTask.bind(this)}/>)}
        </main>
      )
    }
  }

  export default Main