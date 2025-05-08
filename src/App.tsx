import { useEffect, useState } from 'react'
import './App.css'
import ToDoList from './components/ToDoList'
import ToDoForm from './components/ToDoForm'
import SortDropDown from './components/SortDropDown'

export interface Task {
  id: number
  text: string
  completed: boolean
}

const App = () => {
  const loadTasks = (): Task[] => {
    const savedTasks = localStorage.getItem("tasks")
    return savedTasks ? JSON.parse(savedTasks) : []
  }

  const [tasks, setTasks] = useState<Task[]>(loadTasks)
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest")

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  const addTask = (text: string) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false}])
  }

  const toggleComplete = (taskId: number) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ))
    console.log("completed status changed")
  }

  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  const sortedTasks = [...tasks].sort((a, b) => sortOrder === "newest" ? b.id - a.id : a.id - b.id)

  return (
    <div>
      <h1>To-do App</h1>
      <ToDoForm addTask={addTask}/>
      <SortDropDown sortOrder={sortOrder} sortChange={(e) => setSortOrder(e.target.value as "newest" |"oldest")}
      />
      <ToDoList tasks={sortedTasks} toggleComplete={toggleComplete} deleteTask={deleteTask}/>
    </div>
  )
}

export default App
