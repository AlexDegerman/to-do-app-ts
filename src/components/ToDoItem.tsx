import { Trash2Icon } from "lucide-react"
import type { Task } from "../App"

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
    <div>
      <input type="checkbox"
      checked={task.completed}
      onChange={() => toggleComplete(task.id)}
      />
      <span>{task.text}</span>
      <span>{formatDate(task.id)}</span>
      <button onClick={() => deleteTask(task.id)}><Trash2Icon/></button>
    </div>
  )
}

export default ToDoItem