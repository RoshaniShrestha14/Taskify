import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Homepage from "./Pages/Homepage.jsx";
import TaskTrackerPage from "./Pages/TaskTrackerPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Homepage />} />
          <Route path="/tasks" element={<TaskTrackerPage/>} />   
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
