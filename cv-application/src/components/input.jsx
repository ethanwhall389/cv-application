import { useState } from "react";
// import data from "./user-data";

export default function Input({title, placeholder, type='text'}) {

    const [data, setData] = useState({
        name: '',
        phone: '',
        email: '',
    })

    

    return (
        <div className="flex flex-col items-start mt-4">
            <label htmlFor='input'>{title}</label>
            <input type={type} onChange={setData} id="input" placeholder={placeholder} className="w-[100%] rounded-lg p-2 text-charcoal"/>
        </div>
    )
}