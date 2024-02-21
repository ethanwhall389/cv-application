import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function DeleteBttn({ handleClick, entryId }) {
    
    const id = entryId;

    return (
        <button
        onClick={(e) => handleClick(e, id)}
        className='slate-500 w-6 self-end'
        >
            <DeleteOutlineIcon></DeleteOutlineIcon>
        </button>
    )
}