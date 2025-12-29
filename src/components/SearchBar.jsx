import React from "react";
import "./task.css";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="search-box">
      <span style={{ fontSize: "16px", color: "#9ca3af" }}>🔍</span>
      <input
        type="text"
        placeholder="Search tasks..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
