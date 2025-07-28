import { useState } from "react"
import { useAppDispatch } from "../store/hooks"
import { addTask } from "../store/todoSlice"

const ToDoForm = () => {
  const [text, setText] = useState("")
  const dispatch = useAppDispatch()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!text.trim()) return
    dispatch(addTask(text))
    setText("")
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-[10px]">
        <input
          className="flex-1 p-2 border-2 border-[#FF6F00] rounded-[5px] focus:outline-none focus:border-[#FF6F00]"
          type="text"
          placeholder="Add a new task"
          value={text}
          onChange={(e) => setText(e.target.value)}
          maxLength={100}
        />
        <button 
          type="submit" 
          className="bg-[#FF6F00] text-white border-none py-2 px-3 rounded-[5px] cursor-pointer"
        >
          Add
        </button>
      </form>
    </div>
  )
}

export default ToDoForm