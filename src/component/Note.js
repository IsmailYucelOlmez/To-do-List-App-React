import React, { useContext } from 'react'
import { NoteContext } from '../context/NoteContext'

const Note = ({note}) => {

  const {dispatch}=useContext(NoteContext);
  const {setEditId}=useContext(NoteContext);
  const {setText}=useContext(NoteContext);
  const {setIsEdit}=useContext(NoteContext);

  const editStatu=(id,statu)=>{
    dispatch({

      type:"EDIT_STATU",
      id,
      statu

    })
    
  }

  const changeState=(e)=>{

    if(note.statu==="uncompleted"){
      
      editStatu(note.id,"completed");
     
    }else{
       
      editStatu(note.id,"uncompleted")
      
    }    
  }

  const removeNote=(id)=>{
    dispatch({

      type:"REMOVE_NOTE",
      id

    })

  }

  const changeEditStatu=(id,text)=>{

    setText(text);
    setEditId(id);
    setIsEdit(true);
    document.querySelector(".add-btn").textContent="Edit";

  }

  console.log(note);


  return (
    <div className='note-section'>

      <div className='flex'>
        <input  className="checkbox" type='checkbox' checked={note.statu==="completed"} onChange={(e)=>changeState(e)} ></input>
        <p  className={`note-text ${note.statu==="completed" ? "done":""} `} >{note.text}</p>
      </div>

      <div> 
      <button onClick={()=>changeEditStatu(note.id,note.text)} className='edit-btn btn'><i className='fa-solid fa-pencil'></i></button>
      <button onClick={()=>removeNote(note.id)} className='remove-btn btn'><i className='fa-solid fa-x'></i></button>
      </div>

    </div>
  )
}

export default Note
