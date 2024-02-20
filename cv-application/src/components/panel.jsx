export default function Panel({title, children}) {
   return (
   <div className="bg-slate-400 flex-1 flex flex-col p-3 rounded-lg">
        <h2 className="text-start text-lg font-bold opacity-75 mb-2">{title}</h2>
        {children}
    </div>
   )
}