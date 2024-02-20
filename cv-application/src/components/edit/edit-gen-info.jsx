

export default function EditGeneralInfo({personalData, onChangePersonalData}) {

    function handleChangePersonal(event, keyName) {
        const newData = {...personalData, [keyName]: event.target.value};
        onChangePersonalData(newData);
    }

    return (
        <form action="" className="flex flex-col text-charcoal px-3 pb-3">
            <label htmlFor="name" className="text-start">Name</label>
            <input 
            type="text"
            value={personalData.name}
            id="name"
            onChange={(event) => handleChangePersonal(event, 'name')}
            className="rounded-lg p-1 mb-2"
            />

            <label htmlFor="address" className="text-start">Address</label>
            <input
            type="tel"
            value={personalData.address}
            id="address"
            onChange={(event) => {handleChangePersonal(event, 'address')}}
            className="rounded-lg p-1 mb-2"
            />

            <label htmlFor="email" className="text-start">Email</label>
            <input 
            type="text" 
            value={personalData.email}
            id="email" 
            onChange={(event) => handleChangePersonal(event, 'email')}
            className="rounded-lg p-1 mb-2"
            />

            <label htmlFor="phone" className="text-start">Phone</label>
            <input type="tel"
            value={personalData.phone}
            id="phone" 
            onChange={(event) => handleChangePersonal(event, 'phone')}
            className="rounded-lg p-1 mb-2"
            />

        </form>
    )
}