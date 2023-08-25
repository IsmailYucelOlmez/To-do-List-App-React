import '../App.css';
import Header from "../component/Header"
import React from 'react';
import NoteList from '../component/NoteList';
import AddEditForm from  '../component/AddEditForm'
import Pagination from '../component/Pagination';
import FilterField from '../component/FilterField';

const  AppRouter=()=> { 
 
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