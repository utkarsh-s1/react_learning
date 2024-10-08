import {useContext, createContext} from 'react'

export const ToDoContext = createContext({
    todos:[
        {
            id:1,
            todo:"todo",
            completed:false,

        }

    ],
    addTodo:(todo)=>{},
    updateTodo:(id, todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
})

export const ToDoProvider = ToDoContext.Provider

export const toDo = ()=>{
    return useContext(ToDoContext) 
}

