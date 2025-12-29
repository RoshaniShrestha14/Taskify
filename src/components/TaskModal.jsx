import React, { useState } from "react";
import "./task.css"; 
const TaskModal = ({ close, setTasks, editTask }) => {
  const [title, setTitle] = useState(editTask?.title || "");
  const [date, setDate] = useState(editTask?.date || "");
  const [description, setDescription] = useState(editTask?.description || "");

  const handleSubmit = () => {
    setTasks(prev => {
      if (editTask) {
        return prev.map(t =>
          t.id === editTask.id ? { ...t, title, date, description } : t
        );
      }
      return [
        ...prev,
        { id: Date.now(), title, date, description, status: "pending" }
      ];
    });
    close();
  };

  return (
    <div className="modal">
      <h3>{editTask ? "Edit Task" : "Add Task"}</h3>

      <input
        placeholder="Task title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={e => setDate(e.target.value)}
      />

      <input
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />

      <button onClick={handleSubmit}>Save</button>
      <button onClick={close}>Cancel</button>
    </div>
  );
};

export default TaskModal;
