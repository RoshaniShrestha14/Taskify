import "./task.css";

const TaskItem = ({ task, setTasks, onEdit }) => {
  const overdue = task.status !== "done" && task.date && (new Date(task.date) < new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()));
  return (
    <div className={`task ${task.status} ${overdue ? "overdue" : ""}`}>
      <input
        type="checkbox"
        checked={task.status === "done"}
        onChange={() =>
          setTasks(prev =>
            prev.map(t =>
              t.id === task.id
                ? { ...t, status: t.status === "done" ? "pending" : "done" }
                : t
            )
          )
        }
      />

      <div className="task-content">
        <span>{task.title}</span>
        {task.description && <small style={{ display: "block" }}>{task.description}</small>}
        <small style={{ display: "block" }}>{task.date}</small>
        {overdue && (
          <small className="overdue-label" style={{ display: "block" }}>Overdue</small>
        )}
      </div>

      <div className="task-actions">
        <button onClick={() => onEdit(task)}>Edit</button>
        <button onClick={() =>
          setTasks(prev => prev.filter(t => t.id !== task.id))
        }>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
