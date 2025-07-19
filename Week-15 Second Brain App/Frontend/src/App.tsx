import { Button } from "./components/Button"
import { Card } from "./components/Card"
import { PlusIcon } from "./icons/Plusicon"
import { ShareIcon } from "./icons/ShareIcon"


function App() {

  return (
    <>
        <Button variant="primary" text="Add Content" startIcon={<PlusIcon />} />
        <Button variant="secondary" text="Share Brain" startIcon={<ShareIcon />} />
        <Card />
    </>
  )
}

export default App
