import { useState } from 'react'
import './App.css'

function App() {
  return(
    <div>
      <Counter/>
      <Counter/>
      <Counter/>
    </div>
  )
}

//Coustom HOOK
function useCounter() {
  const [count, setCount] = useState(0);
  function incresecount() {
    setCount(count + 1);
  }
  return {
    count: count,
    incresecount: incresecount
  }
}
function Counter(){
   const { count, incresecount } = useCounter();
  return (<div>
    <button on onClick={incresecount}>Increase {count}</button>
  </div>
  )
}

export default App
