import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status:false,
    userData:null
}
const authSlice = createSlice({
    initialState:initialState,
    name:"auth",
    reducers:{
        login: (state, action)=>{
            
            state.status = true
            state.userData = action.payload
        },
        logout:(state, action)=>{
            console.log("jvnfkdjls")
            state.status = false
            state.userData = null
        }

    }
})

export const {login, logout} = authSlice.actions

export default authSlice.reducer