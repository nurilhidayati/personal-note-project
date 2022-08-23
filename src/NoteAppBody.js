import React from 'react'
import NoteAppInput from './NoteAppInput'
import NoteList from './NoteList'

function NoteAppBody({data, archive, onDelete, onAdd, search}) {
    let dataNotArchived = data.filter(e => e.archived === false);
    let dataArchived = data.filter(e => e.archived === true);
    if(search){
        dataNotArchived = dataNotArchived.filter(e => e.title.toLowerCase().includes(search))
        dataArchived = dataArchived.filter(e => e.title.toLowerCase().includes(search))
    }
    return (
        <div className="note-app__body">
            <NoteAppInput onAdd={onAdd} />
            <h2>Catatan Aktif</h2>
            {
                dataNotArchived.length <= 0 ? <p className="notes-list__empty-message">Tidak ada catatan</p>
                : <NoteList data={dataNotArchived} archive={archive} onDelete={onDelete}/>
            }
            <h2>Arsip</h2>
            {
                dataArchived.length <= 0 ? <p className="notes-list__empty-message">Tidak ada catatan</p>
                : <NoteList data={dataArchived} archive={archive} onDelete={onDelete}/>
            }
        </div>
    )
}

export default NoteAppBody