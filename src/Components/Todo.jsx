import React, { useState } from 'react'
import "./Todo.css"
import TodoList from './TodoList';

 const Todo = () => {
  const[inputList,setInputList]=useState("");
  const[items, setItems]= useState([])
  const itemEvent=(event)=>{
    setInputList(event.target.value);

  };
  const List=()=>{
     setItems((oldItems)=>{
         return[...oldItems, inputList];
     });
     setInputList('');
  };
  const delItems=(id)=>{
    // console.log("deleted");
    setItems((oldItems)=>{
      return oldItems.filter((arrayEle , index)=>{
        return index !== id;
      })
    })
  };
  return (
    <div className='main'>
    <div className='center'>
    <br></br>
    <h1>Todo list</h1>
    <br></br>
    <input type="text" placeholder='Enter your task' value={inputList} onChange={itemEvent}/>
    <button  style={{marginLeft:"25px", borderRadius:"50%", border:"none"}}onClick={List}>+</button>
    <ol>
      {/* <li> {inputList} </li> */}
      {
        items.map((inputList, index)=>{
        return <TodoList key= {index}
         id={index}
          text= {inputList}
          onSelect={delItems}
         />;
        })
      }
    </ol>
    </div>
    </div>
  )
}
export default Todo;
