import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Usib from './usib.jsx'


let a  = React.createElement('h1',{}, "Usib is th ebstt")
console.log
createRoot(document.getElementById('root')).render(
    a
)
