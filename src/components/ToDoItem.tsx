import type { Task } from "../App"

interface ToDoItemProps {
  task: Task
  toggleComplete: (id: number) => void
}

const ToDoItem = ({ task, toggleComplete }: ToDoItemProps) => {

  return (
    <div>
      <input type="checkbox"
      checked={task.completed}
      onChange={() => toggleComplete(task.id)}
      />
      <span>{task.text}</span>
    </div>
  )
}

export default ToDoItem