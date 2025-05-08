import type { Task } from "../App"

interface ToDoItemProps {
  task: Task
}

const ToDoItem = ({ task }: ToDoItemProps) => {

  return (
    <div>
      <span>{task.text}</span>
    </div>
  )
}

export default ToDoItem