import { useState } from "react";
import TextInput from "./text-input";

export default function EditProfessional({ professionalData, onChangeProfessional }) {
    return (
        
        <div >
            {professionalData.map(job => (
                <Job
                key={job.id}
                jobData={job}
                jobId={job.id}
                professionalData={professionalData}
                setProfessional={onChangeProfessional}/>
            ))}
            
        </div>
    )
}

function Job({ jobData, jobId, professionalData, setProfessional }) {

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
            console.log(newData);
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

        </form>
    )

}