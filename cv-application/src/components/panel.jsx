export default function Panel({title, children}) {
    return (
    <div className="bg-charcoal flex-grow rounded-md p-4">
        <h1 className="text-2xl">{title}</h1>
        {children}
    </div>
    )
}