export default function Panel({title, children}) {
   return (
   <div className="bg-slate-400 flex-1">
        <h2>{title}</h2>
        {children}
    </div>
   )
}