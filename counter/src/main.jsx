import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <App /> // same as App(), first letter always capital and always a jsx in case of vite
)
