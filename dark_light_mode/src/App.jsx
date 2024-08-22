import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThemeBtn from './components/themebutton'
import Card from './components/card'
import { ThemeContextProvider } from './context/theme'

function App() {
  const [themeMode, setThemeMode] = useState("dark")
  function darkTheme(){
    setThemeMode("dark")
  }
  function lightTheme(){
    setThemeMode("light")

  }
  useEffect(()=>{
    document.querySelector("html").classList.remove("dark")
    document.querySelector("html").classList.remove("light")

    document.querySelector("html").classList.add(themeMode)


  },[themeMode])

  return (
    <ThemeContextProvider value={{themeMode, darkTheme, lightTheme}}>
            <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>
    </ThemeContextProvider>

  )
}

export default App
