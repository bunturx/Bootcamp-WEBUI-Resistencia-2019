import React, { Component } from 'react';
import './TodoForm.css';

class TodoForm extends Component{
	constructor(){
		super();
		this.state = {
			title : "",
			description: ""
		};
		this.handleInput = this.handleInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInput(e){
		const {value, name} = e.target;
		this.setState({
			[name]: value
		});
	}
	handleSubmit(e){
		e.preventDefault();
		this.props.onAddTask(this.state);
	}

	render() {
		return(
			<div className="TodoForm">
				<form onSubmit={this.handleSubmit}>
					<input type="text" name="title" placeholder="Title" onChange={this.handleInput}/>
					<input type="text" name="description" placeholder="Description" onChange={this.handleInput}/>
					<button type="submit">Add Task</button>
				</form>
			</div>
			)
	}
}


export default TodoForm;