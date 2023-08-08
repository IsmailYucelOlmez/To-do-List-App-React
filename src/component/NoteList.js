import React from 'react'
import Note from './Note'


const NoteList = ({ currentNotes, dispatch}) => {

  return (
    <>
      {currentNotes.map((note, index) => (
        <Note key={index} note={note} dispatch={dispatch} />
      ))}
    </>
  );
};


export default NoteList













// const NoteList = ({currentNotes,removeNote,dispatch,filterState,setFilterState}) => {

 

//   if (filterState === 'all') {
//     return(
//     currentNotes.map((note, index) => (
      
//       <Note
//         key={index} note={note} removeNote={removeNote}  dispatch={dispatch}
//       />
      
//     ))
//     )

//   } else if (filterState === 'completed') {
//     return(
//     currentNotes.map((note, index) => {
//       if (note.statu === 'completed')
        
//           <Note
//           key={index} note={note} removeNote={removeNote}  dispatch={dispatch}
//           />
//     })
//     )
   
//   } else {
//    return(
//     currentNotes.map((note, index) => {
//       if (note.statu === 'uncompleted')
       
//           <Note
//             key={index} note={note} removeNote={removeNote}  dispatch={dispatch}
//           />
        
//     })
//    )
//   }

    
 
// }

// export default NoteList
