import { useState } from 'react';
import './App.css'

function App() {
  return <>
    <div>
      <LightBulb />
    </div>
  </>
}

function LightBulb() {
  const [bulbon, setBulbOn] = useState(true);
  return <>
    <div>
      <BubleState bulbon={bulbon} />
      <ToggleBubleState setBulbOn={setBulbOn} bulbon={bulbon} />
    </div>
  </>
}

function BubleState({ bulbon }) {
  //const [bulbon, setBulbOn] = useState(true);
  return <div>
    {
      bulbon ? "bulb On" : "Bulb OFF"
    }
  </div>
}

function ToggleBubleState({setBulbOn}) {
  function  toggle(){
    setBulbOn(currentState=>!currentState)
  }
  return <div>
    <button onClick={toggle}>Toggle the Bulb </button>
  </div>
}
export default App
