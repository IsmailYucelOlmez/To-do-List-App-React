import '../App.css';
import Header from "../component/Header"
import React,{useEffect, useReducer, useState} from 'react';
import NoteList from '../component/NoteList';
import NotesReducer from '../reducers/NoteReducer'
import AddEditForm from  '../component/AddEditForm'
import Pagination from '../component/Pagination';

const  AppRouter=()=> {
  
  const [notes,dispatch]=useReducer(NotesReducer,[]);
  const [currentPage,setCurrentPage]=useState(1);
  const [notesPerPage,setNotesPerPage]=useState(4);

  const lastPostIndex=currentPage*notesPerPage;
  const firstPostIndex=lastPostIndex-notesPerPage;
  const currentNotes= notes.slice(firstPostIndex,lastPostIndex);
   
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
    
    <NoteList  currentNotes={currentNotes} removeNote={removeNote} removeAll={removeAll} />

    <Pagination totalNotes={notes.length} notesPerPage={notesPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
          
    </div>
  );
  
}

export default AppRouter;