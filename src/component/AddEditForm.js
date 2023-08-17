import React, { useState } from 'react'


const AddEditForm = ({dispatch,text,setText,isEdit,setIsEdit,editId}) => {

  const [id,setId]=useState(0);
 
  const [statu,setStatu]=useState("uncompleted");
  
    
  const addNote=(id,text)=>{
 
    if(isEdit){
      dispatch({

        type:"EDIT_NOTE",
        id,
        text
  
      })

      setIsEdit(false);
      document.querySelector(".add-btn").textContent="Add";

      setText("");

    }else{

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
   
  } 

  return (
    <>
      <div className='add-note-field'>
        <input value={text} onChange={(e)=>setText(e.target.value)} type='text' placeholder='Add a note'></input>
        <button className='add-btn btn' onClick={()=>addNote(editId,text)}>Add</button>       
      </div>
    </>
  )
}

export default AddEditForm




