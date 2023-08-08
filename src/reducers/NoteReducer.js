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
        default:
            return state
    }
}

export default NotesReducer