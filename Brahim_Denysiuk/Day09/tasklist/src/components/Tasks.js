import React, {Component} from 'react'
import './Tasks.css';


class Tasks extends Component{
	constructor(){
		super();
		this.handleDeleteButton = this.handleDeleteButton.bind(this);
	}
	handleDeleteButton(e){
		this.props.onRemoveTask(e.target.value);
		
	}
	render(){
		console.log(this.props.todo)
		const todos = this.props.todo.map(
			(task, index) => {
				return(
					<div className="Task">
						<h4>
							{task.title}						
						</h4>
						<p>
							{task.description}
						</p>
						<button value={index} onClick={this.handleDeleteButton}>
							delete
						</button>
					</div>
					);
			}
			)
		return(
			<div  className="Tasks">
				<h2>
					task quantity { this.props.todo.length }
				</h2>
				{ todos }
			</div>
		);
	}
}


export default Tasks;