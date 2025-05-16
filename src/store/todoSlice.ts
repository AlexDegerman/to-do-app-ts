import { createSlice, createSelector } from '@reduxjs/toolkit'
import type { Task, ToDoState, RootState } from './types'

// Load initial state from localStorage
const loadTasks = (): Task[] => {
  const savedTasks = localStorage.getItem("tasks")
  if (!savedTasks) return []
  
  try {
    return JSON.parse(savedTasks)
  } catch (error) {
    console.error("Failed to parse tasks from localStorage:", error)
    return []
  }
}

const initialState: ToDoState = {
  tasks: loadTasks(),
  sortOrder: "newest",
  filterStatus: "all",
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    // Add a new task
    addTask: (state, action) => {
      const newTask: Task = {
        id: Date.now(),
        text: action.payload,
        completed: false
      }
      state.tasks.push(newTask)
    },
    
    // Toggle completion status of a task
    toggleComplete: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload)
      if (task) {
        task.completed = !task.completed
      }
    },
    
    // Delete a task
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload)
    },
    
    // Set sort order
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload
    },
    
    // Set filter status
    setFilterStatus: (state, action) => { 
      state.filterStatus = action.payload
    }
  }
})

// Selectors
const selectTasks = (state: RootState) => state.todo.tasks
const selectSortOrder = (state: RootState) => state.todo.sortOrder
const selectFilterStatus = (state: RootState) => state.todo.filterStatus

// Memoized selector for sorted and filtered tasks
export const selectSortedFilteredTasks = createSelector(
  [selectTasks, selectSortOrder, selectFilterStatus],
  (tasks, sortOrder, filterStatus) => {
    // First apply sorting
    const sortedTasks = [...tasks].sort((a, b) => 
      sortOrder === "newest" ? b.id - a.id : a.id - b.id
    )
    
    // Then apply filtering
    return sortedTasks.filter(task => {
      if (filterStatus === "completed") return task.completed
      if (filterStatus === "uncompleted") return !task.completed
      return true
    })
  }
)

export const { addTask, toggleComplete, deleteTask, setSortOrder, setFilterStatus } = todoSlice.actions
export default todoSlice.reducer