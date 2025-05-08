import { useState } from 'react'
import './App.css'
import ToDoList from './components/ToDoList'

export interface Task {
  id: number
  text: string
  completed: boolean
}

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "learn TypeScript", completed: false },
    { id: 2, text: "practice TypeScript", completed: false}
  ])

  return (
    <div>
      <h1>To-do App</h1>
      <p> add new task </p>
      <ToDoList tasks={tasks}/>
    </div>
  )
}

export default App
