export default function Button({ text, handleClick, bttnColor='slate-500' }) {
    return (
        <button className={`p-3 my-2 rounded-lg hover:scale-110 transition-all bg-${bttnColor}`}
        onClick={() => handleClick()}
        >{text}</button>
    )
}