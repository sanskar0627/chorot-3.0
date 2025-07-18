
import './App.css'
import { Button } from './components/button'
import { PlusIcon } from './icons/plusicon'

function App() {

  return (
    <>
       <Button variants='primary' text='Share' size='sm' startIcon={<PlusIcon size="lg" />}/>
       <Button variants='primary' text='Share' size='md'/>
       <Button variants='secondary' text='Add Content' size='lg'/>
    </>
  )
}

export default App
