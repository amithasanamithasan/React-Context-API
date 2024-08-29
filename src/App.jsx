import { createContext, useState } from 'react'

import './App.css'
import ChieldComponent from './Components/ChildComponent/ChieldComponent'

 export const CountContext= createContext();

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
 <CountContext.Provider value={count}>
 <button className=' border-t-cyan-600  bg-orange-400 rounded-2xl text-3xl font-serif ' onClick={() => setCount((count) => count + 1)}>
          count is- {count}
        </button>
  
        <ChieldComponent></ChieldComponent>
      
 </CountContext.Provider>
      
    
    </>
  )
}

export default App
