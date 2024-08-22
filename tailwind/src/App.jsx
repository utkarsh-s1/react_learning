import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './assets/components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl'> OP</h1>
      <br></br>

      <Card username="utkarsh" obj={{pp:10}}/>
      <Card username='usib'/>

    </>
  )
}

export default App


