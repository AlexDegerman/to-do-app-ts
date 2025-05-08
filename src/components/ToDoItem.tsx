import { Trash2Icon } from "lucide-react"
import type { Task } from "../App"
import '../styles/ToDoItem.css'

interface ToDoItemProps {
  task: Task
  toggleComplete: (id: number) => void
  deleteTask: (id: number) => void
}

const ToDoItem = ({ task, toggleComplete, deleteTask }: ToDoItemProps) => {
  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
  }

  return (
    <div className={`task-item ${task.completed ? "task-completed" : ""}`}>
      <input 
      type="checkbox"
      checked={task.completed}
      onChange={() => toggleComplete(task.id)}
      />
      <div className="task-text">
        <span>{task.text}</span>
        <span className="task-date">{formatDate(task.id)}</span>
      </div>
      <button className="task-delete" onClick={() => deleteTask(task.id)}><Trash2Icon/></button>
    </div>
  )
}

export default ToDoItem