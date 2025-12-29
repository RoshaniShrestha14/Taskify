import React, { useEffect, useState } from "react";
import "./task.css";
import TaskList from "./TaskList";
import TaskModal from "./TaskModal";
import FilterBar from "./FilterBar";
import SearchBar from "./SearchBar";
import useDebounce from "./useDebounce";


const TaskTracker = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("date_desc");
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editTask, setEditTask] = useState(null);

  const debouncedSearch = useDebounce(search);


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const isOverdue = (task) => {
    if (task.status === "done" || !task.date) return false;
    const today = new Date();
    const due = new Date(task.date);
   
    const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const startOfDue = new Date(due.getFullYear(), due.getMonth(), due.getDate());
    return startOfDue < startOfToday;
  };

  const dateValue = (t) => {
    if (!t.date) return null;
    const d = new Date(t.date);
    if (isNaN(d)) return null;
    return new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
  };

  const filteredTasks = tasks
    .filter(task =>
      filter === "all"
        ? true
        : filter === "overdue"
          ? isOverdue(task)
          : task.status === filter
    )
    .filter(task =>
      task.title.toLowerCase().includes(debouncedSearch.toLowerCase())
    )
    .sort((a, b) => {
      switch (sort) {
        case "name_asc":
          return a.title.localeCompare(b.title);
        case "name_desc":
          return b.title.localeCompare(a.title);
        case "date_asc": {
          const av = dateValue(a);
          const bv = dateValue(b);
          return (av ?? Infinity) - (bv ?? Infinity);
        }
        case "date_desc":
        default: {
          const av = dateValue(a);
          const bv = dateValue(b);
          return (bv ?? -Infinity) - (av ?? -Infinity);
        }
      }
    });

  return (
    <div className="task-app">
      <header>
        <h1>Task Tracker</h1>
        <p className="tagline">Stay organized, get things done</p>
        <button onClick={() => setModalOpen(true)}>+ Add Task</button>
      </header>

      <SearchBar value={search} onChange={setSearch} />

      <FilterBar
        filter={filter}
        setFilter={setFilter}
        sort={sort}
        setSort={setSort}
        counts={{
          all: tasks.length,
          pending: tasks.filter(t => t.status === "pending").length,
          done: tasks.filter(t => t.status === "done").length,
          overdue: tasks.filter(t => isOverdue(t)).length
        }}
      />

      <TaskList
        tasks={filteredTasks}
        setTasks={setTasks}
        onEdit={task => {
          setEditTask(task);
          setModalOpen(true);
        }}
      />

      {modalOpen && (
        <TaskModal
          close={() => {
            setModalOpen(false);
            setEditTask(null);
          }}
          setTasks={setTasks}
          editTask={editTask}
        />
      )}
    </div>
  );
};

export default TaskTracker;
