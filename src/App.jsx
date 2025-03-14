import { useState } from 'react'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import './App.css'

function App() {
  const [tasks, setTasks]=useState([]);

  const addTask = (taskText) => {
    if (taskText.trim() === "") return;
    setTasks([...tasks, taskText]);
  };

  const removeTask = (index)=>{
    setTasks(tasks.filter((task,i)=> i !== index));
  }

  return (
    <div className="app-container">
    <h1>To-Do List</h1>
    <TaskInput onAddTask={addTask} />
    <TaskList tasks={tasks} onRemoveTask={removeTask} />
  </div>
  );
}

export default App
