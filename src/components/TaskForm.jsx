import React, { useState } from "react";
import "./task.css";

const TaskForm = ({ onSave, onClose, task }) => {
  const [title, setTitle] = useState(() => task?.title || "");
  const [date, setDate] = useState(() => task?.date || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !date) return;

    onSave({
      ...task,
      title,
      date
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl w-96 space-y-4"
      >
        <h2 className="text-xl font-bold">
          {task ? "Edit Task" : "Add Task"}
        </h2>

        <input
          className="w-full border p-2 rounded"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="date"
          className="w-full border p-2 rounded"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <div className="flex justify-end gap-2">
          <button type="button" onClick={onClose}>
            Cancel
          </button>
          <button className="bg-teal-500 text-white px-4 py-2 rounded">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
