import Button from "../button";
import DeleteBttn from "../delete-bttn";

export default function EditEducation({ educationData, onChangeEducationData}) { 
    
    function handleNewEntry() {
        const newData = [...educationData];
        const prevId = educationData.length > 0 ? educationData[educationData.length-1].id : -1;
        newData.push({
            id: prevId+1,
            schoolName: '',
            degree: '',
            field: '',
            startDate: '',
            endDate: '',
        })
        onChangeEducationData(newData);
    }

    function handleDeleteEntry(event, entryId) {
        event.preventDefault();
        // console.log(event.target);        
        const newData = educationData.filter(entry => {
            return entry.id !== entryId
        })
        onChangeEducationData(newData);

    }
    
    return (
        
        <div className="">
            {educationData.map((entry) => (

                <EducationEntry
                key={entry.id}
                dataEntry={entry}
                entryId={entry.id}
                educationData={educationData}
                setEducationData={onChangeEducationData}
                >
                    <DeleteBttn handleClick={handleDeleteEntry} entryId={entry.id}/>
                </EducationEntry>
            ))}
            <Button
            text={'Add Entry'}
            handleClick={handleNewEntry}
            />
        </div>
    )
}

function EducationEntry({ dataEntry, entryId, educationData, setEducationData, children }) {

    
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
        <form className="text-charcoal flex flex-col px-3 py-3 border-2 rounded-lg m-3">
            <label htmlFor="school" className="text-start">School</label>
            <input
            type="text"
            value={dataEntry.schoolName}
            placeholder="Name of the institution you attented"
            id="school"
            onChange={(e) => handleChangeEducation(e, 'schoolName', entryId)}
            className="rounded-lg p-1 mb-2"
            />
            
            <label htmlFor="degree" className="text-start">Degree</label>
            <input
            type="text"
            placeholder="e.g. AS, BS"
            value={dataEntry.degree}
            id="degree"
            onChange={(e) => handleChangeEducation(e, 'degree', entryId)}
            className="rounded-lg p-1 mb-2"
            />

            <label htmlFor="field" className="text-start">Field of study</label>
            <input
            type="text"
            placeholder="What is your degree in?"
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

            {children}
        </form>
    )
}