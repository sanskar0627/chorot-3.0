import { useState } from 'react'
import './App.css'

function App() {
  return <div>
    <h1>
      Sanskar Click Function
    </h1>
    <Counter></Counter>
  </div>
}
function Counter() {
  const [count, setCount] = useState(0);

  function increasecount() {
    setCount(count + 1);
  }
  function decreasecount() {
    setCount(count - 1);
  }
  function resetcount() {
    setCount(0);
  }

  return <div>
    <h2 id="text"> {count} </h2>
    <button onClick={increasecount}>
      Increase Counter
    </button>
    <button onClick={decreasecount}>
      Decrease Counter
    </button>
    <button onClick={resetcount}>
      Reset Counter
    </button>
  </div>
}

export default App
