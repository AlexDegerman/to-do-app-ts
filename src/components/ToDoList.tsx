import type { Task } from "../App"
import ToDoItem from "./ToDoItem"
import '../styles/ToDoList.css'

interface ToDoListProps {
  tasks: Task[]
  toggleComplete: (id: number) => void
  deleteTask: (id: number) => void
}

const ToDoList = ({ tasks, toggleComplete, deleteTask }: ToDoListProps) => {

  return (
    <div className="task-list">
      {tasks.map(task => 
        <ToDoItem
        key={task.id}
        task={task}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
        />
      )}
    </div>
  )

}

export default ToDoList