export default function TextInput({ type, value, id, placeholder, handleClick}) {
    return (
        <input
        type={type}
        placeholder={placeholder}
        value={value}
        id={id}
        onChange={(e) => handleClick(e, id)}
        className="rounded-lg p-1 px-2 mb-2"
        />
    )

}