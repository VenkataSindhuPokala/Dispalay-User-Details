import React from "react";
import  { useState } from 'react';
import "./App.css";
export default function Add(){
    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState([]);
  
  const handleAddTask = () => {
    setTasks([...tasks, newTask]);
    setNewTask('');
  };
  return(
    <div>
      <h1>Task List</h1>
      <div>
        <input type="text" value={newTask} onChange={(event) => setNewTask(event.target.value)} />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ol>
    </div>
  );
}
  
  