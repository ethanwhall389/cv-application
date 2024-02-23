import { useState } from 'react'
import './App.css'
import Button from './components/button'
import { personalDataDemo, personalDataEmpty} from './data/personal-data'
import { educationDataDemo, educationDataEmpty } from './data/education-data'
import { professionalDataDemo, professionalDataEmpty } from './data/professional-data'
import Panel from './components/panel'
import EditGeneralInfo from './components/edit/edit-gen-info'
import EditEducation from './components/edit/edit-education'
import EditProfessional from './components/edit/edit-professional'
import Accordion from './components/edit/accordion'
import DisplayGenInfo from './components/preview/display-gen-info'
import DisplayEducation from './components/preview/display-education'
import DisplayProfessional from './components/preview/display-professional'
import { NoAdultContentSharp } from '@mui/icons-material'


function App() {
  const [personalData, setPersonalData] = useState(personalDataDemo);
  const [educationData, setEducationData] = useState(educationDataDemo);
  const [professionalData, setProfessionalData] = useState(professionalDataDemo);
  const [activeAccordionIndex, setActiveAccordion] = useState(null);
  const [showMain, setShowMain] = useState(false);

  function createNew() {
    setPersonalData(personalDataEmpty);
    setEducationData(educationDataEmpty);
    setProfessionalData(professionalDataEmpty);
    setShowMain(true);
  }

  function viewDemo() {
    setShowMain(true);
  }

  function noDisplay() {
    return personalData.name === '' && 
    educationData[0].id === '' && 
    professionalData[0].id === '' ? 
    true :
    false;
  }

  return (
  <div className='w-screen h-screen overflow-y-scroll bg-slate-500 p-6'>
    <div className='flex gap-2 justify-center'
      style={showMain ? {display:'none'} : {display:'flex'}}
    >
      <Button text={'Create New'} bttnColor='slate-400' handleClick={createNew}></Button>
      <Button text={'See Demo'} bttnColor='slate-400' handleClick={viewDemo}></Button>
    </div>
    <div className='max-w-2xl mx-auto lg:max-w-7xl'
      style={showMain ? {display:'block'} : {display:'none'}}
    >
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
          <h2 className='hidden text-2xl' style={noDisplay() ? {display: 'block'} : {display:'none'}}>Add something to the edit section to see a preview here!</h2>
          <div className='rounded-md p-3'
            style={noDisplay() ? {borderWidth: '0'} : {borderWidth: '2px'}}
          >
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
