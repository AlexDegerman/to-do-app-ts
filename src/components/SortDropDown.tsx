interface SortDropDownProps {
  sortOrder: "newest" | "oldest"
  sortChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  filterStatus: "all" | "completed" | "uncompleted"
  filterChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const SortDropDown = ({ sortOrder, sortChange, filterStatus, filterChange}: SortDropDownProps) => {

  return (
    <div>
        {/* Sorting Dropdown */}
      <div>
        <label htmlFor="sortOrder">Sort by:</label>
        <select id="sortOrder" value={sortOrder} onChange={sortChange}>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>
        {/* Filtering Dropdown */}
      <div>
        <label htmlFor="filterStatus">Show:</label>
        <select id="filterStatus" value={filterStatus} onChange={filterChange}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </div>
  )
}

export default SortDropDown