import { createSlice, nanoid } from "@reduxjs/toolkit";

const intialState = {
    todos:[{id:1, text:"todo"}],

}

export const TodoSlice = createSlice(
    {
        name:"todo",
        initialState:intialState,
        reducers:{
            addTodo:(state, action)=>{
                const todo = {
                    id:nanoid(),
                    text:action.payload,

                }
                state.todos.push(todo)

            },
            removeTodo:(state, action)=>{
                console.log("djfjsdkj")
                state.todos = state.todos.filter((r)=>r.id!==action.payload)
                
                 
            }

        }
    }
)

export const {addTodo, removeTodo} = TodoSlice.actions
export default TodoSlice.reducer
