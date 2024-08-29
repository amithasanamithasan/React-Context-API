import { createContext, useState } from 'react'

import './App.css'
import ChieldComponent from './Components/ChildComponent/ChieldComponent'

export const CountContext= createContext();
export const MultiplyContext = createContext();
export const Devided =createContext();

function App() {
  const [count, setCount] = useState(0)
  const [multiply, setMultiply] = useState(1)
  const [dvide, setDevide] = useState(1000)
  return (
    <>
   <Devided.Provider value={[dvide, setDevide]}>
   <MultiplyContext.Provider value={multiply}>
<CountContext.Provider value={count}>
 <button className=' border-t-cyan-600  bg-orange-400 rounded-2xl text-3xl font-serif ' onClick={() => setCount((count) => count + 1)}>
          count is- {count}
        </button>
        <button className=' border-t-cyan-600  bg-orange-400 rounded-2xl text-3xl font-serif ' onClick={() => setMultiply((multiply) => multiply * 2)}>
          Multiply is- {multiply}
        </button>
        <ChieldComponent ></ChieldComponent>
      
 </CountContext.Provider>
</MultiplyContext.Provider>
   </Devided.Provider>

      
    
    </>
  )
}

export default App
