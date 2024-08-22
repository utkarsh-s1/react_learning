import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProvider from './context/userContextProvider' 
import Login from './components/login'
import Profile from './components/profile'
function App() {

  return (
    <UserProvider>
      <Login />
      <Profile/>
    </UserProvider>
  )
}

export default App
