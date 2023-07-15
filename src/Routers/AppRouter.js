import '../App.css';
import Header from "../component/Header"
import React,{useEffect, useReducer} from 'react';
import NoteList from '../component/NoteList';
import NotesReducer from '../reducers/NoteReducer'
import AddEditForm from  '../component/AddEditForm'

const  AppRouter=()=> {
  
  const [notes,dispatch]=useReducer(NotesReducer,[]);
   
  useEffect(()=>{

    const noteData=JSON.parse(localStorage.getItem('notes'));
    
    dispatch({type:"SHOW_NOTES",notes:noteData})
    
  },[])

  useEffect(()=>{

    localStorage.setItem('notes',JSON.stringify(notes));

  },[notes]);

  const removeNote=(id)=>{
    dispatch({

      type:"REMOVE_NOTE",
      id

    })

  }

  const removeAll=()=>{

    dispatch({
      type:"REMOVE_ALL"
    });

  }
 
  return (

    <div className='container'>

    <Header />

    <AddEditForm dispatch={dispatch}/> 
    
    <NoteList  notes={notes} removeNote={removeNote} removeAll={removeAll} />
          
    </div>
  );
  
}

export default AppRouter;