import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(1);

  const IncV = () => {
    if(counter < 20) setCounter(counter+1);
    else setCounter(counter);
  }

  const decV = () => {
    if(counter > 0) setCounter(counter-1);
    else setCounter(counter);
  }
  return (
    <>
      <h1>Counter app</h1>
      <h1>Counter Value : {counter}</h1>

<div className='two'>
      <button onClick={IncV}>Increase Value</button>
      <br/>
      <button onClick={decV}>Decrease Value</button>
      </div>    
    </>
  )
}

export default App
