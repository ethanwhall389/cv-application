import TextInput from "./text-input";

export default function EditGeneralInfo({personalData, onChangePersonalData}) {

    function handleChangePersonal(event, keyName) {
        const newData = {...personalData, [keyName]: event.target.value};
        onChangePersonalData(newData);
    }

    return (
        <form action="" className="flex flex-col text-charcoal px-3 pb-3">
            <label htmlFor="name" className="text-start">Name</label>
            <TextInput
                type='text'
                placeholder={'Full name'}
                value={personalData.name}
                id='name'
                handleClick={handleChangePersonal}
            />

            <label htmlFor="address" className="text-start">Address</label>
            <TextInput
            type="text"
            placeholder={'Street, State, City'}
            value={personalData.address}
            id="address"
            handleClick={handleChangePersonal}
            />

            <label htmlFor="email" className="text-start">Email</label>
            <TextInput
            type="email"
            placeholder={'johndoe@gmail.com'}
            value={personalData.email}
            id="email" 
            handleClick={handleChangePersonal}
            />

            <label htmlFor="phone" className="text-start">Phone</label>
            <TextInput
            type="tel"
            placeholder={'(123) 456-7890'}
            value={personalData.phone}
            id="phone" 
            handleClick={handleChangePersonal}
            />

            <label htmlFor="statement" className="text-start">Professional Statement</label>
            <textarea
            rows={3}
            columns={50}
            placeholder="Write a statement summarizing who you are."
            value={personalData.statement}
            id="responsibilities"
            onChange={(e) => handleChangePersonal(e, 'statement')}
            className="rounded-lg p-1 px-2 mb-2"
            />

        </form>
    )
}