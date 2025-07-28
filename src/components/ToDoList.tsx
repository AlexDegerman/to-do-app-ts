import { useAppSelector } from "../store/hooks"
import { selectSortedFilteredTasks } from "../store/todoSlice"
import ToDoItem from "./ToDoItem"

const ToDoList = () => {
  const tasks = useAppSelector(selectSortedFilteredTasks)

  return (
    <div className="mt-5 overflow-y-auto scrollbar-thin scrollbar-thumb-[#FF6F00] scrollbar-track-[#FFF3E0]">
      {tasks.map(task =>
        <ToDoItem
          key={task.id}
          task={task}
        />
      )}
    </div>
  )
}

export default ToDoList