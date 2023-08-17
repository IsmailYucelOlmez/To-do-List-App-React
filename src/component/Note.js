import React from 'react'

const Note = ({note,dispatch,setEditId,setText,setIsEdit}) => {

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
