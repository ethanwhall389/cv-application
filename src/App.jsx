import { useState } from 'react'
import './App.css'
import DefaultData from './data/personal-data'
import EducationData from './data/education-data'
import ProfessionalData from './data/professional-data'
import Panel from './components/panel'
import EditGeneralInfo from './components/edit/edit-gen-info'
import EditEducation from './components/edit/edit-education'
import EditProfessional from './components/edit/edit-professional'
import Accordion from './components/edit/accordion'
import DisplayGenInfo from './components/preview/display-gen-info'
import DisplayEducation from './components/preview/display-education'
import DisplayProfessional from './components/preview/display-professional'


function App() {
  const [personalData, setPersonalData] = useState(DefaultData.personal);
  const [educationData, setEducationData] = useState(EducationData);
  const [professionalData, setProfessionalData] = useState(ProfessionalData);
  const [activeAccordionIndex, setActiveAccordion] = useState(null);

  return (
  <div className='w-screen h-screen bg-slate-500 p-6'>
    <div className='max-w-2xl mx-auto lg:max-w-7xl'>
      <h1 className='text-3xl font-bold mb-6'>CV Generator</h1>
      <div className='flex flex-col gap-5 lg:flex-row'>
        <Panel title={'Edit'}>
      
          <Accordion title='General Info' index={0} setIndex={setActiveAccordion} isOpen={activeAccordionIndex === 0}>
            <EditGeneralInfo personalData={personalData} onChangePersonalData={setPersonalData}/>
          </Accordion>
      
          <Accordion title='Education' index={1} setIndex={setActiveAccordion} isOpen={activeAccordionIndex === 1}>
            <EditEducation
            educationData={educationData}
            onChangeEducationData={setEducationData}
            />
          </Accordion>
          <Accordion title='Professional' index={2} setIndex={setActiveAccordion} isOpen={activeAccordionIndex === 2}>
            <EditProfessional
            professionalData={professionalData}
            onChangeProfessional={setProfessionalData}
            />
          </Accordion>
        </Panel>
        <Panel title={'Preview'}>
          <div className='border-2 rounded-md p-3'>
            <DisplayGenInfo personalData={personalData}/>
            <DisplayEducation data={educationData}/>
            <DisplayProfessional data={professionalData}/>
          </div>
        </Panel>
      </div>
    </div>
  </div>
  )
}

export default App
