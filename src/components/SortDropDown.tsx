import { useAppDispatch, useAppSelector } from '../store/hooks'
import { setSortOrder, setFilterStatus } from '../store/todoSlice'

const SortDropDown = () => {
  const dispatch = useAppDispatch()
  const sortOrder = useAppSelector(state => state.todo.sortOrder)
  const filterStatus = useAppSelector(state => state.todo.filterStatus)

  return (
    <div className="flex mt-5 justify-between">
      {/* Sorting Dropdown */}
      <div>
        <label htmlFor="sortOrder">Sort by:</label>
        <select
          id="sortOrder"
          value={sortOrder}
          onChange={(e) => dispatch(setSortOrder(e.target.value as "newest" | "oldest"))}
          className="p-[5px] rounded-[5px] ml-2 border border-gray-300 bg-white"
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
          className="p-[5px] rounded-[5px] ml-2 border border-gray-300 bg-white"
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