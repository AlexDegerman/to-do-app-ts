import ToDoList from './components/ToDoList'
import ToDoForm from './components/ToDoForm'
import SortDropDown from './components/SortDropDown'

const App = () => {
  
  return (
    <div className="min-h-screen bg-[#FAF3E0] flex justify-center items-center font-sans m-0 p-5">
      <div className="max-w-[620px] h-[90vh] p-5 bg-white shadow-lg rounded-[10px] text-center flex flex-col min-w-[400px] md:min-w-[400px] lg:min-w-[500px]">
        <h1 className="text-[#FF6F00] text-3xl font-bold mb-4">To-do App</h1>
        <ToDoForm />
        <SortDropDown />
        <ToDoList />
      </div>
    </div>
  )
}

export default App