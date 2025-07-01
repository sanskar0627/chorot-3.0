import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/Buttons'
import { Otp } from './components/otp'

function App() {
 

  return (
    < >
     <div className=' h-screen bg-yellow-400'>
      <Otp/>
     </div>
    </>
  )
}

export default App
