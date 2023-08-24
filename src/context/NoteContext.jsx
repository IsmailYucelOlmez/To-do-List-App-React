import { createContext } from "react";
import { useState,useReducer } from "react";


export const NoteContext=createContext();

export const NoteContextProvider=({children})=>{

    const NotesReducer=(state,action)=>{
        switch(action.type){
            case "ADD_NOTE":
                return[
                    ...state,
                    {id:action.id,text:action.text,statu:action.statu}
                ]
    
            case "REMOVE_NOTE" :
                return state.filter((note)=>note.id!==action.id)
    
            case "REMOVE_ALL":
                return []
                
            case "SHOW_NOTES":
                return action.notes;
    
            case "EDIT_STATU":
                return state.map((note)=>{
    
                    if(note.id===action.id){
                        return{
                            ...note,
                            statu: action.statu
                        }
                    }else{
                        return note
                    }
                })    
    
            case "EDIT_NOTE":
                return state.map((note)=>{
    
                    if(note.id===action.id){
                        return{
                            ...note,
                            text: action.text
                        }
                    }else{
                        return note
                    }
                })  
    
            default:
                return state
        }
    }

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
     



    return( 
    <NoteContext.Provider value={{dispatch,currentNotes,filteredNotes,notes,text,setText,isEdit,setIsEdit,editId,setEditId,setFilterState,currentNotes,notesPerPage,currentPage,setCurrentPage}}>
       {children}
    </NoteContext.Provider>
    )
}