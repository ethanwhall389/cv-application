import './App.css'
import Panel from './components/panel'

function App() {
  return (
  <div className='w-screen h-screen bg-slate-500 p-6'>
    <h1>CV Generator</h1>
    <div className='flex gap-5'>
      <Panel title={'Edit'}/>
      <Panel title={'Preview'}/>
    </div>
  </div>
  )
}

export default App
