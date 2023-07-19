import React from 'react'
import Note from './Note'


const NoteList = ({currentNotes,removeNote,removeAll}) => {
  return (
    <div className='notelist-field'>
    <div className='note-list'>
    { currentNotes&&(

      currentNotes.map((note,index)=>(

          <Note key={index} note={note} removeNote={removeNote} />
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
