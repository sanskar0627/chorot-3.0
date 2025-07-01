import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    < >
      <div className="flex justify-between items-center bg-blue-200 p-4">
        <div className="bg-blue-500 text-white p-4 rounded">Box 1</div>
        <div className="bg-blue-600 text-white p-4 rounded">Box 2</div>
        <div className="bg-blue-700 text-white p-4 rounded">Box 3</div>
      </div>
      <div className="grid grid-cols-12 gap-4 p-4 bg-gray-100">
        <div className="col-span-5 bg-purple-500 text-white p-4 rounded">5 Columns</div>
        <div className="col-span-3 bg-purple-600 text-white p-4 rounded">3 Columns</div>
        <div className="col-span-4 bg-purple-700 text-white p-4 rounded">4 Columns</div>
      </div>
      <div className="bg-pink-400 text-2xl sm:bg-amber-950 sm:text-4xl md:bg-yellow-500 md:text-6xl lg:bg-red-700  lg:text-8xl xl:bg-blue-700 xl:text-9xl">
        Responsive Text Size
      </div>
      <div className='grid grid-cols-12'>
        <div className='col-span-12 sm:col-span-5 bg-red-300'>
          hi col 1
        </div>
        <div className='col-span-12 sm:col-span-5 bg-green-300'>
          hi col 2
        </div>
        <div className='col-span-12 sm:col-span-2 bg-blue-300'>
          hi col3
        </div>
      </div>
    </>
  )
}

export default App
