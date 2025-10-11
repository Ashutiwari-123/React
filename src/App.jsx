import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parent from './03_props/Parent'
import Parent1 from './06_childreanProps/Parent1'
 import ParentA1 from './07_context2/ParentA1';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    {/* <Parent/> */}
    {/* <Parent1/> */}
    {/* <ParentA1/> */}
   <ParentA1/>


    </>
  )
}

export default App
