import React, { useState } from "react";

//create your first component
const Home = () => {
	const [ inputValue, setInputValue ] = useState("");
	const [ todos, setToDos ] = useState([]);

	 


	return (
		<div className="container">
			<h1>todos</h1>
			<ul>
				<li>
					<input type="text" 
						onChange={(e) => setInputValue(e.target.value)}
						value={inputValue} 
						onKeyPress={(e) => {
							if (e.key === "Enter") {
								setToDos(todos.concat(inputValue));
								setInputValue("");
							}
						}}
						placeholder="What needs to be done?"></input>
				</li>
				{todos.map((item, index) => (
					<li>{item}{" "}<i className="fas fa-times" onClick={() => setToDos(todos.filter((t, currentIndex) => index != currentIndex))}></i></li>
				))}
			</ul>
			<div>{todos.length} Items Left</div>
		</div>
	);
};

export default Home;
