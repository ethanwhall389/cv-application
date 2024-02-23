export default function Button({ text, handleClick, bttnColor='slate-500' }) {
    return (
        <button className={`p-3 my-2 rounded-lg hover:scale-110 transition-all bg-${bttnColor} h-14`}
        onClick={() => handleClick()}
        >{text}</button>
    )
}