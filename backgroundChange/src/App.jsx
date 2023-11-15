import { useState } from 'react'

function App() {
  const [color,setColor] = useState("orange")

  return (
      <div className='h-screen w-screen duration-500' style = {{backgroundColor: color}}>
        <div className='flex flex-wrap fixed justify-center bottom-12 inset-x-2 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-xl bg-white'>
              <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-500' onClick={() => setColor("red")}>
                red
              </button>
              <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-yellow-400' onClick={() => setColor("yellow")}>
                yellow
              </button>
              <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-black' onClick={() => setColor("black")}>
                black
              </button>
              <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-blue-600' onClick={() => setColor("blue")}>
                blue
              </button>
              <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-green-600' onClick={() => setColor("green")}>
                green
              </button>
          </div>
        </div>

      </div>
  )
}

export default App
