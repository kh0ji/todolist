import React, { useState } from "react";
import TodoList from "./Todo"
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import TextField from '@material-ui/core/TextField';
var App=()=>{
    var [input, setInput]=useState("");
    var [todoList, setTodoList]=useState(JSON.parse(localStorage.getItem("Todo")));
var AddInput=(e)=>{
var{value}=e.target
setInput(value);
}
var addtodo=()=>{
    if(input!==""){

  
setTodoList((prev)=>{
   
  return[...prev,input]
})

setInput("");
    }
}
var deleteItem=(id)=>{
setTodoList((prev)=>{
    return prev.filter((arryE,index)=>{
return index !== id;
    })
})
localStorage.setItem('Todo',JSON.stringify(todoList))

}
localStorage.setItem('Todo',JSON.stringify(todoList))

    return(
    <>
    <div>
        <center className="text-center" >
        <br/>
        <h1> ToDo List</h1>
        <br/>
        <TextField id="standard-basic" label="Add a item" onChange={AddInput} value={input} />
       
        <Tooltip title="Add Items">
        <IconButton onClick={addtodo} color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon />
       </IconButton>
       </Tooltip>
        <br/>
        <ol>{
         JSON.parse(localStorage.getItem("Todo"))!==?
        JSON.parse(localStorage.getItem("Todo")).map((item,index)=>{
            return(
                <TodoList 
                key={index} 
                id={index}
                value={item}
                onSelect={deleteItem}
                />
                
            )
        }):null
        }
        </ol>
        </center>
    </div>
    </>
)
    }
export default App;
