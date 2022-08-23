import React from 'react'

function NoteItemAction({data, archive, onDelete}) {
    const archvText = data.archived ? 'Pindahkan' : 'Arsipkan';
    return (
        <div className="note-item__action">
            <button className="note-item__delete-button" onClick={() => onDelete(data.id)}>Delete</button>
            <button className="note-item__archive-button" onClick={() =>{archive(data.id)}}>{archvText}</button>
        </div>
    )
}

export default NoteItemAction