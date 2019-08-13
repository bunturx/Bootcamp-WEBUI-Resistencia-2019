import React, { PureComponent } from 'react';

class Task extends PureComponent{
    constructor(props){
      super(props);
      this.state = { check : true }
    }
  
    remove(){
      this.props.remove(this.props.taskId);
    }
  
    check(){
      this.setState({ check : !this.state.check })
    }
  
    render(){
      return(
        <div className="task">
          <button style={ this.state.check ? {background : "#300", width : "40px"} : {background : "green" , width : "40px"} } onClick={this.check.bind(this)}>{this.state.check ? "x" : "v"}</button>
          <p style={{wordBreak: "break-all" }}>{this.props.TaskText}</p>
          <button style={{outline : "none", border : "none", background: "red", width: "20px"}} className="removeButton" onClick={this.remove.bind(this)} >x</button>
        </div>
      )
    }
  }

  export default Task;