export default function EditEducation({ educationData, onChangeEducationData }) { 
    return (
        
        <form action="" className="">
            {educationData.map(entry => (
                <EducationEntry
                key={entry.id}
                dataEntry={entry}
                entryId={entry.id}
                educationData={educationData}
                setEducationData={onChangeEducationData}/>
            ))}
        </form>
    )
}

function EducationEntry({ dataEntry, entryId, educationData, setEducationData }) {

    
    function handleChangeEducation(event, objectKey, entryId) {

        function getIndex() {
            for (let i = 0; i < educationData.length; i++) {
                if (educationData[i].id === entryId) {
                    return i;
                }
            }
        }

        const index = getIndex();
        
        const newData = [...educationData]
        newData[index][objectKey]=event.target.value;

        setEducationData(newData);
    }

    return (
        <div className="text-charcoal flex flex-col px-3 pb-3">
            <label htmlFor="school" className="text-start">School</label>
            <input
            type="text"
            value={dataEntry.schoolName}
            id="school"
            onChange={(e) => handleChangeEducation(e, 'schoolName', entryId)}
            className="rounded-lg p-1 mb-2"
            />
            
            <label htmlFor="degree" className="text-start">Degree</label>
            <input
            type="text"
            value={dataEntry.degree}
            id="degree"
            onChange={(e) => handleChangeEducation(e, 'degree', entryId)}
            className="rounded-lg p-1 mb-2"
            />

            <label htmlFor="field" className="text-start">Field of study</label>
            <input
            type="text"
            value={dataEntry.field}
            id="field"
            onChange={(e) => handleChangeEducation(e, 'field', entryId)}
            className="rounded-lg p-1 mb-2"
            />
            
            <label htmlFor="start" className="text-start">Start Date</label>
            <input
            type="date"
            value={dataEntry.startDate}
            id="start"
            onChange={(e) => handleChangeEducation(e, 'startDate', entryId)}
            className="rounded-lg p-1 mb-2"
            />

            <label htmlFor="end" className="text-start">End Date</label>
            <input
            type="date"
            value={dataEntry.endDate}
            id="end"
            onChange={(e) => handleChangeEducation(e, 'endDate', entryId)}
            className="rounded-lg p-1 mb-2"
            />
        </div>
    )
}