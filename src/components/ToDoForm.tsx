import { useState } from "react"
import '../styles/ToDoForm.css'

interface ToDoFormProps {
  addTask: (text: string) => void
}

const ToDoForm = ({ addTask }: ToDoFormProps) => {
  const [text, setText] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!text.trim()) return
    addTask(text)
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