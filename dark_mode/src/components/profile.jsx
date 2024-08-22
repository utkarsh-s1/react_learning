import React, {useContext}from 'react'
import UserContext from '../context/usercontext'



function Profile() {
    console.log(useContext(UserContext))

    const {data} = useContext(UserContext)
    if(!data){
        return <div><h1>Please Login</h1></div>
    }
    return (
        <div>

            <h1>username : {data.username} </h1>
            <h1>password : {data.password}</h1>

        </div>
        
    )
}

export default Profile
