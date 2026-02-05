import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
let path1 = document.getElementById('root');
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App path1={path1}/>
  </StrictMode>,
)
