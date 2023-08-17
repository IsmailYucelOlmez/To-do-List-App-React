import '../App.css';
import Header from "../component/Header"
import React,{useEffect, useReducer, useState} from 'react';
import NoteList from '../component/NoteList';
import NotesReducer from '../reducers/NoteReducer'
import AddEditForm from  '../component/AddEditForm'
import Pagination from '../component/Pagination';
import FilterField from '../component/FilterField';

const  AppRouter=()=> {
  
  const [notes,dispatch]=useReducer(NotesReducer,[]);

  const [currentPage,setCurrentPage]=useState(1);
  const [notesPerPage,setNotesPerPage]=useState(4);

  const [isEdit,setIsEdit]=useState(false);
  const [text,setText]=useState("");
  const [editId,setEditId]=useState();
  
  const [filterState,setFilterState]=useState("all");

  const filteredNotes = notes.filter((note) => {
    if (filterState === 'all') {
      
      return true;
    } 

    if (filterState === 'completed') {
      
      return note.statu === 'completed';     
    }else {
      
      return note.statu === 'uncompleted';
    }
  });

  const lastPostIndex=currentPage*notesPerPage;
  const firstPostIndex=lastPostIndex-notesPerPage;
  const currentNotes= filteredNotes.slice(firstPostIndex,lastPostIndex);
   
   useEffect(()=>{

    showNotes();
    
   },[])

   useEffect(()=>{

     localStorage.setItem('notes',JSON.stringify(notes));

   },[notes]);

   const showNotes=()=>{

    const noteData=JSON.parse(localStorage.getItem('notes'));
    
    dispatch({type:"SHOW_NOTES",notes:noteData})

   }
 
  return (

    <div className='container'>

    <Header />

    <AddEditForm dispatch={dispatch} text={text} setText={setText} isEdit={isEdit} setIsEdit={setIsEdit} editId={editId} /> 

    <FilterField setFilterState={setFilterState} dispatch={dispatch} />
    
    <NoteList  currentNotes={currentNotes} dispatch={dispatch} setEditId={setEditId} setText={setText} setIsEdit={setIsEdit}/>

    <Pagination totalNotes={filteredNotes.length} notesPerPage={notesPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
          
    </div>
  );
  
}

export default AppRouter;