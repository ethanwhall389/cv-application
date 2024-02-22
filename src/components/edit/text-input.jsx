export default function TextInput({ type, value, id, placeholder, handleClick, entryId, isDisabled=false}) {
    return (
        <input
        disabled={isDisabled}
        type={type}
        placeholder={placeholder}
        value={value}
        id={id}
        onChange={(e) => handleClick(e, id, entryId)}
        className="rounded-lg p-1 px-2 mb-2"
        />
    )

}