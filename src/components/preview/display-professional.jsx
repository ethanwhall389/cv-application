export default function DisplayProfessional({ data }) {

    return (

        <div className="my-4 text-start">
            <h2 className="text-lg font-bold border-b-2">Work Experience</h2>
            {data.map( (job, index) => (
                <DisplayJob key={job.id} jobData={job} length={data.length} index={index}/>
            ))}
            {/* {data.map( (entry, index) => (
                <DisplayEntry key={entry.id} entryData={entry} length={data.length} index={index}/>
            ))} */}
        </div>
    )
}


function DisplayJob({ jobData }) {

    return (
        <div className='flex flex-col items-start'>
            <h2 className="text-md font-bold">{jobData.jobTitle}</h2>
            <div className="flex gap-2">
                <p>{jobData.startDate}</p>
                <span>{jobData.startDate === '' ? '' : ' – '}</span>
                <p>{jobData.current === true ? 'Present' : jobData.endDate}</p>
            </div>
            <p>{jobData.responsibilities}</p>
        </div>
    )

}