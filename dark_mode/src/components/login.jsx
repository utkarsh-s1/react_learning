import React , {useState, useContext}from 'react'
import UserContext from '../context/usercontext'

function Login() {
    const [username, setUserName]=useState('')
    const [password, setPassword]=useState('')
    console.log(useContext(UserContext))
    console.log(UserContext)
    const {setData} = useContext(UserContext)
    function handleSubmit(e){
        e.preventDefault();
        setData({username, password})
    }


    return  (
            <div>
                <h2>login</h2>
                <input type='text' placeholder='user' value ={username} onChange={(e)=>{setUserName(e.target.value)}}></input>
                <input type='text' placeholder='password' value ={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
                <button onClick={handleSubmit}>Submit</button>
    
            </div>
            
        )
    
}

export default Login
