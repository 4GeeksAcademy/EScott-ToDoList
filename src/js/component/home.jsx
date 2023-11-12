import React, { useState } from "react";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setToDos] = useState([]);

  return (
    <div className="container">
      <h1>todos</h1>
      <ul>
        <li>
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                setToDos(todos.concat(inputValue));
                setInputValue("");
              }
            }}
            placeholder="What needs to be done?"
          />
        </li>
        {todos.length === 0 ? (
          <li>No tasks, add a task</li>
        ) : (
          todos.map((item, index) => (
            <li key={index}>
              {item}{" "}
              <i
                className="fas fa-times"
                onClick={() => setToDos(todos.filter((t, currentIndex) => index !== currentIndex))}
              ></i>
            </li>
          ))
        )}
      </ul>
      <div>{todos.length} Items Left</div>
    </div>
  );
};

export default Home;
