import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Context2 from './07_context2/Context2.jsx'

createRoot(document.getElementById('root')).render(
  <Context2>
     <App />
  </Context2>
  

)
