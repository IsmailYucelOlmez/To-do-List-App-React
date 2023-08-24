import React, { useContext, useState } from 'react'
import { NoteContext } from '../context/NoteContext';


const AddEditForm = () => {

  const {dispatch}=useContext(NoteContext);
  const {text}=useContext(NoteContext);
  const {setText}=useContext(NoteContext);
  const {isEdit}=useContext(NoteContext);
  const {setIsEdit}=useContext(NoteContext);
  const {editId}=useContext(NoteContext);

  const [id,setId]=useState(0);
 
  const [statu,setStatu]=useState("uncompleted");
  
    
  const addNote=()=>{
 
      if(text!=""){
        dispatch({
          type:"ADD_NOTE",
          id,
          text,
          statu
      })
        setId(id+1);
        setText("");    
      }

  } 

  const editNote=(id,text)=>{

    dispatch({

      type:"EDIT_NOTE",
      id,
      text

    })

    setIsEdit(false);
    document.querySelector(".add-btn").textContent="Add";

    setText("");
  }

  return (
    <>
      <div className='add-note-field'>
        <input value={text} onChange={(e)=>setText(e.target.value)} type='text' placeholder='Add a note'></input>
        <button className='add-btn btn' onClick={()=>{ isEdit ? editNote(editId,text) : addNote() }}>Add</button>       
      </div>
    </>
  )
}

export default AddEditForm




