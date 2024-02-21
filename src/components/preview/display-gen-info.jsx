export default function DisplayGenInfo({personalData}) {
    
    return (
        <div>
            <h2 className="text-2xl">{personalData.name}</h2>
            <p>{personalData.address}</p>
            <div className="flex justify-center gap-2">
                <p>{personalData.email}</p>
                <span>{personalData.phone === '' ? '' : '|'}</span>
                <p>{personalData.phone}</p>
            </div>
            <h2 
                className="text-start text-lg font-bold border-b-2 mt-4"
                style={personalData.statement === '' ? {display: 'none'} : {display:'block'}}
            >
                Professional Statement
            </h2>
            <p className="text-start">{personalData.statement}</p>
        </div>
    )
}