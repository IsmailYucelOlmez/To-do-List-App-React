import '../App.css';
import Header from "../component/Header"
import React,{useContext, useEffect, useReducer, useState} from 'react';
import NoteList from '../component/NoteList';
import AddEditForm from  '../component/AddEditForm'
import Pagination from '../component/Pagination';
import FilterField from '../component/FilterField';
import { NoteContext } from '../context/NoteContext';

const  AppRouter=()=> {
  
  const {notes}=useContext(NoteContext);
  const {dispatch}=useContext(NoteContext);


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

    <AddEditForm /> 

    <FilterField />
    
    <NoteList />

    <Pagination />
          
    </div>
  );
  
}

export default AppRouter;