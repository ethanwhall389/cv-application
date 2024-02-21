import { useState } from "react";

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

    const [isChecked, setIsChecked] = useState(professionalData.current);

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
            <label htmlFor="job" className="text-start">Job Title</label>
            <input
            type="text"
            value={jobData.jobTitle}
            id="job"
            onChange={(e) => handleChangeProfessional(e, 'jobTitle', jobId)}
            className="rounded-lg p-1 mb-2"
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

            <label htmlFor="start" className="text-start">Start Date</label>
            <input
            type="date"
            value={jobData.startDate}
            id="start"
            onChange={(e) => handleChangeProfessional(e, 'startDate', jobId)}
            className="rounded-lg p-1 mb-2"
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

            <label htmlFor="end" className="text-start">End Date</label>
            <input
            disabled={isChecked}
            checked={isChecked}
            type="date"
            value={jobData.endDate}
            id="end"
            onChange={(e) => handleChangeProfessional(e, 'endDate', jobId)}
            className="rounded-lg p-1 mb-2"
            />

        </form>
    )

}