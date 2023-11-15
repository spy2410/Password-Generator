// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  // const [count, setCount] = useState(0)
  let data = {
    username:"vatsal",
    age:18
  }
  return (
    <div>
      <h1>hello world</h1>
      <Card username="utsav"   btntext="click me"/>
      <Card username="bhavesh" />
    </div>
  )
}

export default App
