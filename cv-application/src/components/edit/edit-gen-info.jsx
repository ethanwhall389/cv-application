export default function EditGeneralInfo({personalData, onChangePersonalData}) {

    function handleChangePersonal(event, keyName) {
        const newData = {...personalData, [keyName]: event.target.value};
        onChangePersonalData(newData);
    }

    return (
        <div className="flex flex-col">
            <h1>General Info</h1>
            <form action="" className="flex flex-col text-charcoal">
                <label htmlFor="name">Name</label>
                <input 
                type="text"
                value={personalData.name}
                id="name"
                onChange={(event) => handleChangePersonal(event, 'name')}
                />
                <label htmlFor="email">Email</label>
                <input 
                type="text" 
                value={personalData.email}
                id="email" 
                onChange={(event) => handleChangePersonal(event, 'email')}
                />
                <label htmlFor="phone">Phone</label>
                <input type="tel"
                value={personalData.phone}
                id="phone" 
                onChange={(event) => handleChangePersonal(event, 'phone')}
                />
                <label htmlFor="address">Address</label>
                <input
                type="tel"
                value={personalData.address}
                id="address"
                onChange={(event) => {handleChangePersonal(event, 'address')}}
                />
            </form>
        </div>
    )
}