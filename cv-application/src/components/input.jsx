import { useState } from "react"
import data from "./user-data";

export default function Input({title, placeholder, type='text'}) {
    
    const [inputVal, setInputVal] = useState('');

    function handleInput(event) {
        setInputVal(event.target.value);
    }
    
    return (
        <div className="flex flex-col items-start mt-4">
            <label htmlFor='input'>{title}</label>
            <input onChange={handleInput} type={type} id="input" value={inputVal} placeholder={placeholder} className="w-[100%] rounded-lg p-2 text-charcoal"/>
        </div>
    )
}