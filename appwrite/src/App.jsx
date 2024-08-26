import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {useDispatch} from 'react-redux'
import './App.css'
import config from './conf/conf'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Footer, Header } from './componenets/index'
// import Header from 
import { Outlet } from 'react-router-dom'
function App() {

  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch()
  useEffect(()=>{
    authService.getCurrentUser().
    then((userData)=>{
      console.log("fjdsjfsdjflsdmk.,nklj")
      if(userData){
      dispatch(login({userData}))
      }
      else{
        console.log("op")

        dispatch(logout({userData}))
      }
    }).
    finally(()=>setLoading(false))

  },[])

  return (
    !loading ?
    (
      <div className='min-h-sc'>
        <div className='block w-full'>
          <Header/>
          <main>
          TODO:  <Outlet />
          </main>
          <Footer/>
        </div>
      </div>
    ):
    null
  )
}

export default App
