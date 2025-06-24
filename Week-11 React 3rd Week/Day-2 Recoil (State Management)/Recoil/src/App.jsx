
import { useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter/>
    </>
  )
}

function Increase({setCount}){
  function increase(){
    setCount(c=>c+1);
  }
  return<div>
    <button onClick={increase}>
      Increase
    </button>
  </div>
}

function Decrease({setCount}){
  function decrease(){
    setCount(c=>c-1);
  }
  return<div>
    <button onClick={decrease}>
      decrease
    </button>
  </div>
}
function CurrentCount({count}){
  return <div>
    {count}
  </div>
}

function Counter(){
  const [count,setCount]=useState(0);
  return<div>
    <CurrentCount count={count} />
    <Increase setCount={setCount}/>
    <Decrease setCount={setCount}/>
  </div>
}

export default App
