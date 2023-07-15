const NotesReducer=(state,action)=>{
    switch(action.type){
        case "ADD_NOTE":
            return[
                ...state,
                {id:action.id,text:action.text}
            ]

        case "REMOVE_NOTE" :
            return state.filter((note)=>note.id!==action.id)

        case "REMOVE_ALL":
            return []
            
        case "SHOW_NOTES":
            return action.notes;

        default:
            return state
    }
}

export default NotesReducer