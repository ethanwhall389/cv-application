export default function DisplayGenInfo({personalData}) {
    
    return (
        <div>
            <h2>{personalData.name}</h2>
            <p>{personalData.address}</p>
            <div className="flex justify-center gap-2">
                <p>{personalData.email}</p>
                <span>|</span>
                <p>{personalData.phone}</p>
            </div>
        </div>
    )
}