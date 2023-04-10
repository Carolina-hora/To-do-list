import React, { useState } from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [newTask, setNewTask] = useState("");
	const [taskList, setTaskList] = useState([]);

	const handleSubmit = (event) => {
		event.preventDefault(); //prevents the default form submission
		if (newTask.trim() !== "" ) {  //checks if the newTask is empty
			const formattedTask = (newTask.charAt(0).toUpperCase()) + (newTask.toLowerCase().slice(1)) //formats the input value
			if (!taskList.includes(formattedTask)) { //checks if the new task is already in the list
				setTaskList([...taskList, formattedTask])
				setNewTask("") // resets the newTask state to an empty string
			} else {
				alert("Please insert a new task!")
			}
			
		}
	}
	//the handleDelete function uses the filter method to create a new list without the deleted task and updated the taskList state
	const handleDelete = (newTask) => {
		const filteredTasks = taskList.filter((t) => t !== newTask)
		setTaskList(filteredTasks)
	}
	

	return (
		<div className="container">
			<h1 className="text-center display-1 text-red">todos</h1>
			<div className="mx-auto row bg-light">
				<input className="border border-rounded border-secondary-subtle pt-2 pb-2" type="text" onChange={e => setNewTask(e.target.value)} placeholder= "Insert your next task" value={newTask} 
				onKeyUp={e => e.key === "Enter" && handleSubmit(e)} />
				
				<div className="col-sm-12 col-md-12 col-lg-12 fs-4 ps-4 border border-secondary-subtle">
					{
						taskList.map((newTask, index) => (
							<div key={index} className="task-item text-break pt-2 pb-2">{index+1}. {newTask} <i className="fas fa-trash-alt ms-auto text-red" onClick={() => handleDelete(newTask)}></i></div>
						))}
				</div>
				<div className="col-sm-12 col-md-12 col-lg-12 fs-5 ps-4 pt-2 pb-2 text-red border border-secondary-subtle">{taskList.length === 0 ? "No tasks, please add a new task!" : taskList.length === 1 ?`${taskList.length} item left` : `${taskList.length} items left`}</div>
			</div>
		
		</div>
	);
};

export default Home;
