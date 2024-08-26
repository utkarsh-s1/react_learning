import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function Logout() {
    const dispatch = useDispatch()
    function logouthandler(){
        authService.logout().
        then(()=>{
            dispatch(logout())
        }).
        finally()
    }
    return (
        <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-50 rounded-full'>LogOut</button>
        
    )
}

export default Logout
