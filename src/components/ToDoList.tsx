import type { Task } from "../App"
import ToDoItem from "./ToDoItem"

interface ToDoListProps {
  tasks: Task[]
  toggleComplete: (id: number) => void
}

const ToDoList = ({ tasks, toggleComplete }: ToDoListProps) => {

  return (
    <div>
      {tasks.map(task => 
        <ToDoItem
        key={task.id}
        task={task}
        toggleComplete={toggleComplete}
        />
      )}
    </div>
  )

}

export default ToDoList