import React from 'react'
import NoteItem from './NoteItem'

function NoteList({data, archive, onDelete}) {
    return (
        <div className="notes-list">
            {data.map(e =>{
                return <NoteItem key={e.id} data={e} archive={archive} onDelete={onDelete}/>
            })}
        </div>
    )
}

export default NoteList