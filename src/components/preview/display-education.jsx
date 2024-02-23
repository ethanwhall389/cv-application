export default function DisplayEducation({ data }) {

    return (

        <div className="my-4 text-start">
            <h2
                className="text-lg font-bold border-b-2"
                style={data[0].id === '' || data.length === 0 ? {display:'none'} : {display:'block'}}
            >Education</h2>
            {data.map( (entry, index) => (
                <DisplayEntry key={entry.id} entryData={entry} length={data.length} index={index}/>
            ))}
        </div>
    )
}

function DisplayEntry({ entryData }) {
    
    return (
        <div className='flex flex-col items-start'>
            <h2 className="text-md font-bold">{entryData.schoolName}</h2>
            <div>
                <span>{entryData.degree}{entryData.field === '' ? '' : ', '}</span>
                <span>{entryData.field}</span>
            </div>
            <div className="flex gap-2">
                <span>{entryData.startDate}</span>
                <span>{entryData.endDate === '' ? '' : ' – '}</span>
                <span>{entryData.endDate}</span>
            </div>
        </div>
    )
}