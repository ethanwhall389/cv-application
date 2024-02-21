export default function Button({ text, handleClick  }) {
    return (
        <button className="bg-slate-500 p-3 my-2 rounded-lg hover:scale-110 transition-all"
        onClick={() => handleClick()}
        >{text}</button>
    )
}