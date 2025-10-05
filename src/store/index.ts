import { configureStore, createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit'
import todoReducer, { addTask, toggleComplete, deleteTask } from './todoSlice'

// Create a listener middleware for localStorage sync
const listenerMiddleware = createListenerMiddleware()

// Listen for task-modifying actions
listenerMiddleware.startListening({
  matcher: isAnyOf(addTask, toggleComplete, deleteTask),
  effect: (action, listenerApi) => {
    try {
      const state = listenerApi.getState() as { todo: { tasks: unknown } }
      const { tasks } = state.todo
      localStorage.setItem('tasks', JSON.stringify(tasks))
    } catch (error) {
      console.error("Failed to save tasks to localStorage:", error)
    }
  }
})

export const store = configureStore({
  reducer: {
    todo: todoReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch