import { createSlice, type PayloadAction, createSelector } from '@reduxjs/toolkit'
import { type RootState } from './types'

export interface Task {
  id: number
  text: string
  completed: boolean
}

interface ToDoState {
  tasks: Task[]
  sortOrder: "newest" | "oldest"
  filterStatus: "all" | "completed" | "uncompleted"
}

// Load initial state from localStorage
const loadTasks = (): Task[] => {
  const savedTasks = localStorage.getItem("tasks")
  return savedTasks ? JSON.parse(savedTasks) : []
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
    addTask: (state, action: PayloadAction<string>) => {
      const newTask: Task = {
        id: Date.now(),
        text: action.payload,
        completed: false
      }
      state.tasks.push(newTask)
    },
    
    // Toggle completion status of a task
    toggleComplete: (state, action: PayloadAction<number>) => {
      const task = state.tasks.find(task => task.id === action.payload)
      if (task) {
        task.completed = !task.completed
      }
    },
    
    // Delete a task
    deleteTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload)
    },
    
    // Set sort order
    setSortOrder: (state, action: PayloadAction<"newest" | "oldest">) => {
      state.sortOrder = action.payload
    },
    
    // Set filter status
    setFilterStatus: (state, action: PayloadAction<"all" | "completed" | "uncompleted">) => {
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