<!-- Taskify – Task Tracker Application -->

Taskify is a simple and modern task tracking application built with React. The goal of this project is to help users stay organized by managing tasks with due dates, filters, and smart search features through a clean and intuitive interface.

This project was developed as part of an internship selection task, with a focus on React fundamentals, thoughtful component design, and good user experience.


## Features
### Task Management
* Add tasks with a title, due date, and optional description
* Edit existing tasks anytime
* Delete tasks that are no longer needed
* Mark tasks as completed or pending
* Automatically detect and label overdue tasks
* Persist tasks using browser localStorage
### Search, Filter, and Sort
* Real-time task search with a 400ms debounce for better     performance
* Filter tasks by All, Pending, Done, or Overdue status
* Display task counts for each filter
* Sort tasks by due date (newest or oldest first)
* Sort tasks by name (A–Z or Z–A)
### User Experience
* Clean and minimal user interface built with plain CSS
* Modal-based add and edit task form with input validation
* Responsive layout for desktop and mobile screens
* Well-structured and reusable React components
* Error handling using an Error Boundary
## Tech Stack
* React with Hooks
* React Router DOM for routing
* Vite for development and build tooling
* Lucide React for icons
* Plain CSS for styling

## Getting Started
### 1. Clone the repository
```bash
git clone <repository-url>
cd Taskify
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

### 4. Open in browser

```
http://localhost:5173
```

## Usage

### Adding a Task

1. Click the Add Task button
2. Enter a task title and due date
3. Add an optional description
4. Click Save or press Enter

### Managing Tasks

* Use the checkbox to mark a task as done or pending
* Click the Edit button to update task details
* Click the Delete button to remove a task

### Searching and Organizing

* Use the search bar to find tasks by title
* Filter tasks by their current status
* Sort tasks using the available sort options

## Project Structure

```
Taskify/
├── public/
├── src/
│   ├── components/
│   │   ├── ErrorBoundary.jsx
│   │   ├── FilterBar.jsx
│   │   ├── Landing.jsx
│   │   ├── Landing_Card.jsx
│   │   ├── Landing_End.jsx
│   │   ├── Navbar.jsx
│   │   ├── SearchBar.jsx
│   │   ├── TaskItem.jsx
│   │   ├── TaskList.jsx
│   │   ├── TaskModal.jsx
│   │   ├── TaskTracker.jsx
│   │   └── useDebounce.jsx
│   ├── pages/
│   │   ├── Homepage.jsx
│   │   └── TaskTrackerPage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── vite.config.js
```

## Design Decisions

* React Hooks were used to keep the code simple and readable
* State is managed locally since the app does not require global state management
* Debounced search improves performance and user experience
* localStorage is used to simulate data persistence similar to a backend
* Authentication was intentionally excluded to keep the solution aligned with the task requirements

## Requirements Fulfilled

* Display tasks with title, due date, and status
* Add, edit, and delete tasks using a modal interface
* Persist tasks using localStorage
* Filter tasks by status
* Built using React Hooks without class components
* Styled using plain CSS
* Implemented debounced search
* Implemented sorting by name and date

## Future Enhancements

* User authentication and multi-user support
* Task categories or tags
* Task priority levels
* Recurring tasks
* Dark mode
* Drag-and-drop task reordering
* Backend API integration


