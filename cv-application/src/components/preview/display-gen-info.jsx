export default function DisplayGenInfo({personalData}) {
    
    return (
        <div>
            <h2>{personalData.name}</h2>
            <p>{personalData.address}</p>
            <p>{personalData.phone}</p>
            <p>{personalData.email}</p>
        </div>
    )
}