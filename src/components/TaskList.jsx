import TaskItem from "./TaskItem";

function TaskList({ tasks, onRemoveTask }) {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks available...</p>
      ) : (
        tasks.map((task, index) => (
          <TaskItem key={index} text={task} onRemove={() => onRemoveTask(index)} />
        ))
      )}
    </div>
  );
}

export default TaskList;
