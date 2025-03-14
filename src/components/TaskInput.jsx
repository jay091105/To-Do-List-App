import { useState } from "react";

function TaskInput({ onAddTask})
{
    const [task,setTask]=useState('');

    const handleAdd = ()=>{
        onAddTask(task);
        setTask('');
    };

    return (
        <div className="task-input">
            <input type="text" 
            placeholder="Enter a Task..."
            value={task}
            onChange={(e)=>setTask(e.target.value)}
            />
        <button onClick={handleAdd}>Add Task</button>
        </div>
    );
}
export default TaskInput;