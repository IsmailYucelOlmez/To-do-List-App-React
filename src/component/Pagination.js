import React from 'react'

const Pagination = ({totalNotes,notesPerPage,setCurrentPage,currentPage}) => {

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


