import { Trash2Icon } from "lucide-react"
import { useAppDispatch } from "../store/hooks"
import { deleteTask, toggleComplete } from "../store/todoSlice"
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
    <div className={`flex bg-[#FFF3E0] p-[10px] mb-[10px] rounded-[8px] relative ${task.completed ? "task-completed" : ""}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => dispatch(toggleComplete(task.id))}
        className="mr-[10px] cursor-pointer self-center flex-shrink-0"
      />
      <div className="flex flex-col text-left leading-[1.4em] mr-[10px] break-words flex-1 min-w-0">
        <span className={`mb-[5px] break-words overflow-wrap-anywhere ${task.completed ? "line-through text-[#2E7D32]" : ""}`}>
          {task.text}
        </span>
        <span className="text-sm text-[#666]">{formatDate(task.id)}</span>
      </div>
      <button 
        className="absolute bottom-[5px] right-[10px] bg-none border-none text-[#666] cursor-pointer flex-shrink-0"
        onClick={() => dispatch(deleteTask(task.id))}
      >
        <Trash2Icon />
      </button>
    </div>
  )
}


export default ToDoItem