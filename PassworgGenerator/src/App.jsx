import { useCallback, useEffect, useRef, useState } from 'react'
// import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [withNum, setWithNum] = useState(false)
  const [withChar, setWithChar] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null);

  const copytoClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password)
  }, [password])

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (withNum) str += "0123456789"
    if (withChar) str += "!@#$%^&*()_+-={}"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, withChar, withNum, setPassword])

  useEffect(() => {
    passwordGenerator();
  }, [length, withChar, withNum, passwordGenerator])

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center my-2'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly ref={passwordRef} />
        <button onClick={copytoClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>
      <div className='flex text-sm gap-x-2 flex-col sm:flex-row'>
        <div className='flex items-center gap-x-1 flex-col sm:flex-row'>
          <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e) => { setLength(e.target.value) }} />
          <label>length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1 justify-center align-middle'>
          <input type="checkbox" defaultChecked={withNum} id="numberInput" onChange={() => { setWithNum((prev) => !prev) }} />
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1 justify-center align-middle'>
          <input type="checkbox" defaultChecked={withChar} id="characterInput" onChange={() => { setWithChar((prev) => !prev) }} />
          <label htmlFor='characterInput'>Character</label>
        </div>
      </div>
    </div>
  )
}

export default App
