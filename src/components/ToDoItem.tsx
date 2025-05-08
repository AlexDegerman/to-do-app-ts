import { Trash2Icon } from "lucide-react"
import type { Task } from "../App"

interface ToDoItemProps {
  task: Task
  toggleComplete: (id: number) => void
  deleteTask: (id: number) => void
}

const ToDoItem = ({ task, toggleComplete, deleteTask }: ToDoItemProps) => {

  return (
    <div>
      <input type="checkbox"
      checked={task.completed}
      onChange={() => toggleComplete(task.id)}
      />
      <span>{task.text}</span>
      <button onClick={() => deleteTask(task.id)}><Trash2Icon/></button>
    </div>
  )
}

export default ToDoItem