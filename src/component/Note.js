import React from 'react'

const Note = ({note,removeNote}) => {

  const changeState=(e)=>{

    if(e.target.checked ){

      document.getElementById(note.id).classList.add("done");
     
    }else{
      
      document.getElementById(note.id).classList.remove("done");

    }
    
  }

  return (
    <div className='note-section'>

      <div className='flex'>
        <input onClick={(e)=>changeState(e)}  className='checkbox' type='checkbox' ></input>
        <p id={note.id} className="note-text">{note.text}</p>
      </div>

      <button onClick={()=>removeNote(note.id)} className='remove-btn btn'><i className='fa-solid fa-x'></i></button>
      
    </div>
  )
}

export default Note
