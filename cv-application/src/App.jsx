import { useState } from 'react'
import './App.css'
import DefaultData from './data/personal-data'
import EducationData from './data/education-data'
import Panel from './components/panel'
import EditGeneralInfo from './components/edit/edit-gen-info'
import EditEducation from './components/edit/edit-education'
import Accordion from './components/edit/accordion'
import DisplayGenInfo from './components/preview/display-gen-info'
import DisplayEducation from './components/preview/display-education'


function App() {
  const [personalData, setPersonalData] = useState(DefaultData.personal);
  const [educationData, setEducationData] = useState(EducationData);
  const [activeAccordionIndex, setActiveAccordion] = useState(null);

  return (
  <div className='w-screen h-screen bg-slate-500 p-6'>
    <h1 className='text-3xl font-bold mb-6'>CV Generator</h1>
    <div className='flex gap-5'>
      <Panel title={'Edit'}>
        <Accordion title='General Info' index={0} setIndex={setActiveAccordion} isOpen={activeAccordionIndex === 0}>
          <EditGeneralInfo personalData={personalData} onChangePersonalData={setPersonalData}/>
        </Accordion>
        <Accordion title='General Info' index={1} setIndex={setActiveAccordion} isOpen={activeAccordionIndex === 1}>
          <EditEducation 
          educationData={educationData}
          onChangeEducationData={setEducationData}
          />
        </Accordion>
        {/* <EditGeneralInfo 
        personalData={personalData}
        onChangePersonalData={setPersonalData}
        /> */}
      </Panel>

      <Panel title={'Preview'}>
        <DisplayGenInfo personalData={personalData}/>
        <DisplayEducation data={educationData}/>
      </Panel>
    </div>
  </div>
  )
}

export default App
