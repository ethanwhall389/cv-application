import { useState } from 'react'
import './App.css'
import DefaultData from './data/personal-data'
import Panel from './components/panel'
import EditGeneralInfo from './components/edit/edit-gen-info'
import DisplayGenInfo from './components/preview/display-gen-info'


function App() {
  const [personalData, setPersonalData] = useState(DefaultData.personal);

  return (
  <div className='w-screen h-screen bg-slate-500 p-6'>
    <h1 className='text-3xl font-bold mb-6'>CV Generator</h1>
    <div className='flex gap-5'>
      <Panel title={'Edit'}>
        <EditGeneralInfo 
        personalData={personalData}
        onChangePersonalData={setPersonalData}
        />
      </Panel>

      <Panel title={'Preview'}>
        <DisplayGenInfo personalData={personalData}/>
      </Panel>
    </div>
  </div>
  )
}

export default App
