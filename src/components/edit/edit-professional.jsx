import { useState } from "react";
import TextInput from "./text-input";
import DeleteBttn from "../delete-bttn";
import Button from "../button";


export default function EditProfessional({ professionalData, onChangeProfessional }) {
    
    
    function handleNewEntry() {
        const newData = [...professionalData];
        const prevId = professionalData.length > 0 ? professionalData[professionalData.length-1].id : -1;
        newData.push({
            id: prevId+1,
            jobTitle: '',
            responsibilities: '',
            startDate: '',
            endDate: '',
            current: false,
        })
        onChangeProfessional(newData);
    }
    
    function handleDeleteEntry(event, entryId) {
        event.preventDefault();
        // console.log(event.target);        
        const newData = professionalData.filter(job => {
            return job.id !== entryId
        })
        onChangeProfessional(newData);

    }
    
    return (
        
        <div >
            {professionalData.map(job => (
                <Job
                key={job.id}
                jobData={job}
                jobId={job.id}
                professionalData={professionalData}
                setProfessional={onChangeProfessional}
                >
                    <DeleteBttn handleClick={handleDeleteEntry} entryId={job.id}/>
                </Job>
            ))}

            <Button
            text={'Add Job'}
            handleClick={handleNewEntry}
            />

        </div>
    )
}

function Job({ jobData, jobId, professionalData, setProfessional, children }) {

    const [isChecked, setIsChecked] = useState(jobData.current);

    function handleCheck(e) {
        setIsChecked(isChecked === true ? false : true);
    }
    
    function handleChangeProfessional(event, objectKey, jobId) {

        function getIndex() {
            for (let i = 0; i < professionalData.length; i++) {
                if (professionalData[i].id === jobId) {
                    return i;
                }
            }
        }

        const index = getIndex();
        
        const newData = [...professionalData]


        if (event.target.type==='checkbox') {
            newData[index][objectKey]=event.target.checked;
            newData[index]['endDate']='';
        } else {
            newData[index][objectKey]=event.target.value;
        }


        setProfessional(newData);

    }

    return (
        <form className="text-charcoal flex flex-col px-3 py-3 border-2 rounded-lg m-3">
            <label htmlFor="jobTitle" className="text-start">Job Title</label>
            <TextInput
            type='text'
            placeholder={'Your official title'}
            value={jobData.jobTitle}
            id='jobTitle'
            entryId={jobId}
            handleClick={handleChangeProfessional}
            />

            <label htmlFor="responsibilities" className="text-start">Responsibilities</label>
            <textarea
            rows={2}
            columns={50}
            value={jobData.responsibilities}
            placeholder="Describe what you did in this position and how it brought value to your workplace."
            id="responsibilities"
            onChange={(e) => handleChangeProfessional(e, 'responsibilities', jobId)}
            className="rounded-lg p-1 mb-2"
            />

            <label htmlFor="startDate" className="text-start">Start Date</label>
            <TextInput
            type='date'
            value={jobData.startDate}
            id='startDate'
            entryId={jobId}
            handleClick={handleChangeProfessional}
            />

            <div className="flex justify-start items-center gap-2">
                <label htmlFor="current" className="flex items-center">Currently working here</label>
                <input
                type="checkbox"
                className="w-10"
                checked={isChecked}
                onChange={(e) => {
                    handleCheck(e);
                    handleChangeProfessional(e, 'current', jobId)
                }}
                />
            </div>

            <label htmlFor="endDate" className="text-start">End Date</label>
            <TextInput
            type='date'
            value={jobData.endDate}
            id='endDate'
            entryId={jobId}
            isDisabled={isChecked}
            handleClick={handleChangeProfessional}
            />

            {children}

        </form>
    )

}