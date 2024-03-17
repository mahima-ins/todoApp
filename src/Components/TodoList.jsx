import React from 'react'
import "./Todo.css";
import 'bootstrap/dist/css/bootstrap.min.css';

 const TodoList = (props) => {
    
  return (
    <>  
    <div className='todo_style'> 
    {/* <i class ="fa fa-times" aria-hidden="true"/>              */}
    <i className="bi-trash" onClick={()=>{
        props.onSelect(props.id);
    }}></i>
    <li> {props.text} </li>
    </div>
    </>
  );
};
export default TodoList;
