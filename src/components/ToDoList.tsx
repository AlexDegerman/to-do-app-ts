import type { Task } from "../App"
import ToDoItem from "./ToDoItem"

interface ToDoListProps {
  tasks: Task[]
}

const ToDoList = ({ tasks }: ToDoListProps) => {

  return (
    <div>
      {tasks.map(task => 
        <ToDoItem
        key={task.id}
        task={task}/>
      )}
    </div>
  )

}

export default ToDoList