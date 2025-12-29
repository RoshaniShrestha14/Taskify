import React, { useState } from "react";
import "./task.css"; 
const TaskModal = ({ close, setTasks, editTask }) => {
  const [title, setTitle] = useState(editTask?.title || "");
  const [date, setDate] = useState(editTask?.date || "");
  const [description, setDescription] = useState(editTask?.description || "");
  const [titleError, setTitleError] = useState("");
  const [dateError, setDateError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Reset errors
    setTitleError("");
    setDateError("");

    // Validate fields
    let hasError = false;
    if (!title.trim()) {
      setTitleError("Please enter a task title");
      hasError = true;
    }
    if (!date) {
      setDateError("Please select a date");
      hasError = true;
    }

    if (hasError) {
      return;
    }

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

      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="Task title"
            value={title}
            onChange={e => {
              setTitle(e.target.value);
              if (e.target.value.trim()) {
                setTitleError("");
              }
            }}
          />
          {titleError && <p style={{ color: "#dc2626", fontSize: "14px", marginTop: "4px", marginBottom: "8px" }}>{titleError}</p>}
        </div>

        <div>
          <input
            type="date"
            value={date}
            onChange={e => {
              setDate(e.target.value);
              if (e.target.value) {
                setDateError("");
              }
            }}
          />
          {dateError && <p style={{ color: "#dc2626", fontSize: "14px", marginTop: "4px", marginBottom: "8px" }}>{dateError}</p>}
        </div>

        <input
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />

        <button type="submit">Save</button>
        <button type="button" onClick={close}>Cancel</button>
      </form>
    </div>
  );
};

export default TaskModal;
