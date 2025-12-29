import TaskItem from "./TaskItem";
import "./task.css";
const TaskList = ({ tasks, setTasks, onEdit }) => (
  <div className="task-list">
    {tasks.map(task => (
      <TaskItem
        key={task.id}
        task={task}
        setTasks={setTasks}
        onEdit={onEdit}
      />
    ))}
  </div>
);

export default TaskList;
