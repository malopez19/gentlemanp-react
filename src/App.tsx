import { useState } from 'react'
import './App.css'
import Button from './components/Button/Button'
import Customform  from './components/CustomForm/Customform'

function App() {
  const [count, setCount] = useState(0)

  const handleclick = () => {
    console.log('Button clicked')
    setCount(count + 1)
  }

  return (
    <>
      <Button countMethod={handleclick} label={`count is ${count}`}/>

      <br></br>
      <br></br>
      <Customform />
    </>
  )
}

export default App
