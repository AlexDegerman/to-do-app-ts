import './App.css'
import ToDoList from './components/ToDoList'
import ToDoForm from './components/ToDoForm'
import SortDropDown from './components/SortDropDown'

const App = () => {
  
  return (
    <div className="app-container">
      <h1>To-do App</h1>
      <ToDoForm />
      <SortDropDown />
      <ToDoList />
    </div>
  )
}

export default App