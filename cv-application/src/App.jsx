import { useState } from 'react'
import './App.css'
import CV from './components/cv'
import EditPanel from './components/edit'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-gradient-to-b from-sunglow to-sunglow-dark w-screen h-screen p-8 max-w-screen-xl'>
      <h1 className='text-4xl text-charcoal mb-5'>CV Generator</h1>
      <div className='flex flex-1 justify-between gap-4'>
        <EditPanel/>
        <CV/>
      </div>
    </div>
  )
}

export default App
