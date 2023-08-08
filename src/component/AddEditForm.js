import React, { useState } from 'react'


const AddEditForm = ({dispatch}) => {

  const [id,setId]=useState(0);
  const [text,setText]=useState("");
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

  return (
    <>
      <div className='add-note-field'>
        <input value={text} onChange={(e)=>setText(e.target.value)} type='text' placeholder='Add a note'></input>
        <button className='add-btn btn' onClick={addNote}>Add</button>       
      </div>
    </>
  )
}

export default AddEditForm




