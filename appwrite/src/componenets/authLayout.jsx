import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import React from 'react'

export default function Protected(x)

{
    const authenticated = x.authenticated
    const children = x.children
    console.log(11111)
    console.log
    
    const navigate = useNavigate()
    const[loader, setLoader] = useState(true)
    const authStatus = useSelector((state)=>(state.auth.status))
    useEffect(()=>{
        if(authenticated&&authenticated!==authStatus){
            navigate('/login')
        }
        else if(!authenticated&&authenticated!==authStatus){
           
            navigate('/')
        }
        setLoader(false)
    },[authStatus, navigate, authenticated])
    return (
        loader?<h1>Loading...</h1>:<>{children}</>
    )
}

