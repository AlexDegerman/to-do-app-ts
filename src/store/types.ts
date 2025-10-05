import { store } from './index'

export interface Task {
  id: number
  text: string
  completed: boolean
}

export interface ToDoState {
  tasks: Task[]
  sortOrder: "newest" | "oldest"
  filterStatus: "all" | "completed" | "uncompleted"
}

export interface RootState {
  todo: ToDoState
}

export type AppDispatch = typeof store.dispatch