import '../styles/SortDropDown.css'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { setSortOrder, setFilterStatus } from '../store/todoSlice'

const SortDropDown = () => {
  const dispatch = useAppDispatch()
  const sortOrder = useAppSelector(state => state.todo.sortOrder)
  const filterStatus = useAppSelector(state => state.todo.filterStatus)

  return (
    <div className="sort-filter-container">
      {/* Sorting Dropdown */}
      <div>
        <label htmlFor="sortOrder">Sort by:</label>
        <select
          id="sortOrder"
          value={sortOrder}
          onChange={(e) => dispatch(setSortOrder(e.target.value as "newest" | "oldest"))}
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>

      {/* Filtering Dropdown */}
      <div>
        <label htmlFor="filterStatus">Show:</label>
        <select
          id="filterStatus"
          value={filterStatus}
          onChange={(e) =>
            dispatch(setFilterStatus(e.target.value as "all" | "completed" | "uncompleted"))
          }
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </div>
  )
}


export default SortDropDown