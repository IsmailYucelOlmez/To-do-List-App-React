import React from 'react'
import Note from './Note'


const NoteList = ({notes,removeNote,removeAll}) => {
  return (
    <div className='notelist-field'>
    <div className='note-list'>
    { notes&&(

      notes.map((note)=>(

          <Note key={note.id} note={note} removeNote={removeNote} />
      ))
      )
    }
    </div>
    <div className='remove-notes-field'>
          <button className='remove-all-btn btn' onClick={removeAll} >Remove All</button>
    </div>
    </div>
  )
}

export default NoteList
