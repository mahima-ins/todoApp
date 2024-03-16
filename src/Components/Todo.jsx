import React, { useState } from 'react'
import "./Todo.css"

 const Todo = () => {
  const[inputList,setInputList]=useState("buy apple");
  const[items, setItems]= useState([])
  const itemEvent=(event)=>{
    setInputList(event.target.value);

  };
  const List=()=>{
     setItems((oldItems)=>{
         return[...oldItems, inputList];
     });
  };
  return (
    <div className='main'>
    <div className='center'>
    <br></br>
    <h1>Todo list</h1>
    <br></br>
    <input type="text" placeholder='Add list' onChange={itemEvent}/>
    <button onClick={List}>+</button>
    <ol>
      {/* <li> {inputList} </li> */}
      {
        items.map((inputList)=>{
          return  <li> {inputList} </li>
        })
      }
    </ol>
    </div>
    </div>
  )
}
export default Todo;
