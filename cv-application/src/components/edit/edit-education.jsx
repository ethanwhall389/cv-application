export default function EditEducation({ educationData, onChangeEducationData }) {
    
    
    
    return (
        
        <form action="" className="">
            
            {educationData.map(entry => (
                <EducationEntry key={entry.id} data={entry}/>
            ))}
        </form>
    )
}

function EducationEntry({ data, key }) {

    function handleChangeEducation(event, objectKey, key) {

        function getIndex() {
            for (let i = 0; i < educationData.length; i++) {
                if (educationData[i].id === key) {
                    return i;
                }
            }
        }

        const entryChange = educationData[getIndex()];
        
        const newData = {...educationData, [entryChange.objectKey]: event.target.value }

        onChangeEducationData(newData);
    }

    return (
        <div className="text-charcoal flex flex-col px-3 pb-3">
            <label htmlFor="school" className="text-start">School</label>
            <input
            type="text"
            value={data.schoolName}
            id="school"
            onChange={(e) => handleChangeEducation(e, 'schoolName', key)}
            className="rounded-lg p-1 mb-2"
            />
            
            <label htmlFor="degree" className="text-start">Degree</label>
            <input
            type="text"
            value={data.degree}
            id="degree"
            onChange={(e) => handleChangeEducation(e, 'degree', key)}
            className="rounded-lg p-1 mb-2"
            />
            
            <label htmlFor="start" className="text-start">Start Date</label>
            <input
            type="date"
            value={data.startDate}
            id="start"
            onChange={(e) => handleChangeEducation(e, 'startDate', key)}
            className="rounded-lg p-1 mb-2"
            />

            <label htmlFor="end" className="text-start">End Date</label>
            <input
            type="date"
            value={data.endDate}
            id="end"
            onChange={(e) => handleChangeEducation(e, 'endDate', key)}
            className="rounded-lg p-1 mb-2"
            />
        </div>
    )
}