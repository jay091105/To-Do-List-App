function TaskItem({text , onRemove}){
    return (
        <div className="task-item">
            <span>{text}</span>
            <button onClick={onRemove}>Remove</button>
        </div>
    );
}
export default TaskItem;