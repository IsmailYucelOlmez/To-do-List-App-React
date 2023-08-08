import React from 'react'

const FilterField = ({setFilterState,dispatch}) => {

  const editFilter=(statu)=>{

    setFilterState(statu);
  }

  const removeAll=()=>{

    dispatch({
      type:"REMOVE_ALL"
    });
  
  }  

  return (
    <div className='filter-field'>

      <div className='filter-texts'>
        <p onClick={()=>editFilter("all")}>All</p>
        <p onClick={()=>editFilter("completed")} >Completed</p>
        <p onClick={()=>editFilter("uncompleted")}>Uncompleted</p>
      </div>

      <div className='remove-notes-field'>
          <button className='remove-all-btn btn' onClick={removeAll} >Remove All</button>
      </div>

    </div>
  )
}

export default FilterField
