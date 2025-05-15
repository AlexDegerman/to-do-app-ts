import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todoSlice'

// Middleware to save tasks to localStorage
const localStorageMiddleware = (store: any) => (next: any) => (action: any) => {
  const result = next(action)
  
  // After any action that might modify tasks, save to localStorage
  if (
    action.type.startsWith('todo/') && 
    (action.type.includes('addTask') || 
      action.type.includes('toggleComplete') || 
      action.type.includes('deleteTask'))
  ) {
    const { tasks } = store.getState().todo
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }
  
  return result
}

export const store = configureStore({
  reducer: {
    todo: todoReducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(localStorageMiddleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
