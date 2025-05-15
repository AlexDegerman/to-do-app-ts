import { Trash2Icon } from "lucide-react"
import { useAppDispatch } from "../store/hooks"
import { deleteTask, toggleComplete } from "../store/todoSlice"
import '../styles/ToDoItem.css'
import type { Task } from "../store/types"

interface ToDoItemProps {
  task: Task
}

const ToDoItem = ({ task }: ToDoItemProps) => {
  const dispatch = useAppDispatch()

  const formatDate = (timestamp: number) =>
    new Date(timestamp).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })

  return (
    <div className={`task-item ${task.completed ? "task-completed" : ""}`}>
      <input 
        type="checkbox"
        checked={task.completed}
        onChange={() => dispatch(toggleComplete(task.id))}
      />
      <div className="task-text">
        <span>{task.text}</span>
        <span className="task-date">{formatDate(task.id)}</span>
      </div>
      <button className="task-delete" onClick={() => dispatch(deleteTask(task.id))}>
        <Trash2Icon />
      </button>
    </div>
  )
}


export default ToDoItem