import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigationType } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import ErrorBoundary from "./components/ErrorBoundary";
import TaskTrackerPage from "./Pages/TaskTrackerPage";

function ScrollToTopOnRouteChange() {
  const location = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    if (navType !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, navType]);

  return null;
}

const App = () => {
  return (
    <ErrorBoundary>
      <ScrollToTopOnRouteChange />

      <ToastContainer
        position="top-right"
        autoClose={2000}
        pauseOnHover
        draggable
        theme="light"
      />

      <Navbar />
      <Outlet />
    </ErrorBoundary>
  );
};

export default App;
