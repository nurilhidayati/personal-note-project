import React from 'react'
import NoteItemContent from './NoteItemContent'
import NoteItemAction from './NoteItemAction'

function Noteitem({data, archive, onDelete}) {
    return (
        <div className="note-item">
            <NoteItemContent {...data} />
            <NoteItemAction data={data} archive={archive} onDelete={onDelete}/>
        </div>
    )
}

export default Noteitem