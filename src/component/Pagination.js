import React, { useContext } from 'react'
import { NoteContext } from '../context/NoteContext';

const Pagination = () => {

  const {filteredNotes}=useContext(NoteContext);
  const totalNotes=filteredNotes.length;
  const {notesPerPage}=useContext(NoteContext);
  const {setCurrentPage}=useContext(NoteContext);
  const {currentPage}=useContext(NoteContext);

  let pages= [];

  for(let i=1;i<=Math.ceil(totalNotes/notesPerPage);i++){

    pages.push(i);
   
  }

  return (
    <div className='pagination-field'>
      {
        pages.map((page,index)=>{

          return <button className={`pagination-btn ${page==currentPage ? 'active': ''}`} key={index} onClick={()=>setCurrentPage(page)} >{page}</button>
        })
      }
    </div>
  )
}

export default Pagination


