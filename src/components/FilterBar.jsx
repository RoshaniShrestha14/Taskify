import { ArrowUpDown } from "lucide-react";
import "./task.css";
const FilterBar = ({ filter, setFilter, sort, setSort, counts }) => (
  <div className="filters">
    <div className="filter-tabs">
      <button
        className={filter === "all" ? "active" : ""}
        type="button"
        onClick={() => setFilter("all")}
      >
        All <span>({counts.all})</span>
      </button>
      <button
        className={filter === "pending" ? "active" : ""}
        type="button"
        onClick={() => setFilter("pending")}
      >
        Pending <span>({counts.pending})</span>
      </button>
      <button
        className={filter === "overdue" ? "active" : ""}
        type="button"
        onClick={() => setFilter("overdue")}
      >
        Overdue <span>({counts.overdue})</span>
      </button>
      <button
        className={filter === "done" ? "active" : ""}
        type="button"
        onClick={() => setFilter("done")}
      >
        Done <span>({counts.done})</span>
      </button>
    </div>

    <div className="sort">
      <ArrowUpDown size={18} aria-hidden="true" />
      <select value={sort} onChange={e => setSort(e.target.value)} aria-label="Sort tasks">
        <option value="date_desc">Newest First</option>
        <option value="date_asc">Oldest First</option>
        <option value="name_asc">Name A–Z</option>
        <option value="name_desc">Name Z–A</option>
      </select>
    </div>
  </div>
);

export default FilterBar;
