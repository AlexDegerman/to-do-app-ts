import { useAppSelector } from "../store/hooks"
import { selectSortedFilteredTasks } from "../store/todoSlice"
import ToDoItem from "./ToDoItem"
import '../styles/ToDoList.css'

const ToDoList = () => {
  const tasks = useAppSelector(selectSortedFilteredTasks)

  return (
    <div className="task-list">
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