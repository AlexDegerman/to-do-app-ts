import { describe, test, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../store/todoSlice'
import ToDoForm from './ToDoForm'
import ToDoItem from './ToDoItem'
import SortDropDown from './SortDropDown'

// Test with npm test in terminal

const createTestStore = (preloadedState = {}) => {
  return configureStore({
    reducer: {
      todo: todoReducer,
    },
    preloadedState,
  })
}

const renderWithProvider = (component: React.ReactElement, store = createTestStore()) => {
  return render(<Provider store={store}>{component}</Provider>)
}

describe('ToDoForm Component Test', () => {
  test('adds a new task when form is submitted with valid text', () => {
    const store = createTestStore()
    renderWithProvider(<ToDoForm />, store)

    const input = screen.getByPlaceholderText('Add a new task')
    const button = screen.getByText('Add')

    fireEvent.change(input, { target: { value: 'New test task' } })
    fireEvent.click(button)

    const state = store.getState()
    expect(state.todo.tasks).toHaveLength(1)
    expect(state.todo.tasks[0].text).toBe('New test task')
    expect(state.todo.tasks[0].completed).toBe(false)
  })
})

describe('ToDoItem Component Test', () => {
  const mockTask = {
    id: Date.now(),
    text: 'Test task',
    completed: false,
  }

  test('toggles task completion when checkbox is clicked', () => {
    const store = createTestStore({
      todo: { tasks: [mockTask], sortOrder: 'newest', filterStatus: 'all' },
    })
    renderWithProvider(<ToDoItem task={mockTask} />, store)

    const checkbox = screen.getByRole('checkbox') as HTMLInputElement
    expect(checkbox.checked).toBe(false)

    fireEvent.click(checkbox)
    const state = store.getState()
    expect(state.todo.tasks[0].completed).toBe(true)
  })
})

describe('SortDropDown Component Tests', () => {
  const tasks = [
    { id: 1000, text: 'Oldest task', completed: false },
    { id: 3000, text: 'Newest task', completed: false },
    { id: 2000, text: 'Middle task', completed: false },
  ]

  test('sorts tasks by oldest first when "Oldest" is selected', () => {
    const store = createTestStore({
      todo: { tasks, sortOrder: 'newest', filterStatus: 'all' },
    })
    renderWithProvider(<SortDropDown />, store)

    const sortSelect = screen.getByLabelText('Sort by:') as HTMLSelectElement
    fireEvent.change(sortSelect, { target: { value: 'oldest' } })

    const state = store.getState()
    expect(state.todo.sortOrder).toBe('oldest')
  })

  const filterTasks = [
    { id: 1, text: 'Task 1', completed: true },
    { id: 2, text: 'Task 2', completed: false },
    { id: 3, text: 'Task 3', completed: true },
    { id: 4, text: 'Task 4', completed: false },
  ]

  test('filters to show only completed tasks', () => {
    const store = createTestStore({
      todo: { tasks: filterTasks, sortOrder: 'newest', filterStatus: 'all' },
    })
    renderWithProvider(<SortDropDown />, store)

    const filterSelect = screen.getByLabelText('Show:') as HTMLSelectElement
    fireEvent.change(filterSelect, { target: { value: 'completed' } })

    const state = store.getState()
    expect(state.todo.filterStatus).toBe('completed')
  })
})
