import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ToDoProvider } from './context/todoContext'
import TodoForm from './componenets/todoform'
import TodoItem from './componenets/todoitem'

function App() {
  const [todos, setTodos] = useState([])

  function addTodo(todo){
    console.log(todos)
    console.log(todo)
    setTodos((prev)=>{
      return [{completed:false, id:Date.now(), todo: todo},...prev]
    })

  }
  function updateTodo(id, todo){
    setTodos((prev)=>(prev.map(prevTodo=>(prevTodo.id===id?todo:prevTodo))))

  }
  function deleteTodo(id){
    setTodos((prev)=>(prev.filter((a)=>(a.id!==id))))
  }
  function toggleComplete(id, todo){
    setTodos((prev)=>(prev.map(prevTodo=>(prevTodo.id===id?{...prevTodo, completed:!prevTodo.completed}:prevTodo))))

  }
  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos &&todos.length>0){
      setTodos(todos)
    }

  },[])
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))

  },[todos])


  return (
    <ToDoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((t)=>{
              return (
                <div key={t.id} className='w-full'>
                  <TodoItem todo={t}/>

                </div>
              )
            })}
          </div>
        </div>
      </div>
    </ToDoProvider>
  )
}

export default App
