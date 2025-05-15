import { useState } from "react"
import '../styles/ToDoForm.css'
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
      <form onSubmit={handleSubmit}>
        <input 
          className="input-text"
          type="text"
          placeholder="Add a new task"
          value={text}
          onChange={(e) => setText(e.target.value)}
          maxLength={100}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default ToDoForm