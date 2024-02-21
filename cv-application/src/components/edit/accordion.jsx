import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useRef } from 'react';

// export default function Accordian({ title, children, isOpen, handleClick }) {
//     return <AccordionItem/>
// }

export default function Accordion({ title, children, isOpen, setIndex, index }) {
    
    const contentHeight = useRef();

    function handleClick() {
        setIndex( (prevIndex) => (prevIndex === index ? null : index))
    }

    let rotateArrow = isOpen ? 'rotate-0' : 'rotate-180'
    
    return (
        <div className="flex flex-col border-2 rounded-lg overflow-hidden" style={isOpen ? {paddingBottom: '15px'} : {paddingBottom: '0px'}}>
            
            <div className='flex justify-between bg-slate-300 px-3 pt-2 rounded-t-md' onClick={handleClick}>
                <h1 className="text-start font-bold mb-2 text-lg">{title}</h1>
                <ExpandLessIcon className={`${rotateArrow} scale-150 transition-all`} />
            </div>

            <div ref={contentHeight} style={isOpen 
                ? {height: contentHeight.current.scrollHeight}
                : {height: '0px'}}
                className='transition-all duration-500'
                >

                {children}

            </div>


        </div>
    )
}