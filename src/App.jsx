import { useState } from 'react'

import './App.css'
import ChieldComponent from './Components/ChildComponent/ChieldComponent'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
        <button className=' border-t-cyan-600  bg-orange-400 rounded-2xl text-3xl font-serif ' onClick={() => setCount((count) => count + 1)}>
          count is- {count}
        </button>
  
        <ChieldComponent></ChieldComponent>
      
      
    
    </>
  )
}

export default App
