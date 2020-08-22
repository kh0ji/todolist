import React from "react";

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';
var Todo=(props)=>{

    return(
        <div style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        }}>
         <li style={
            {width:"100px"}
        }>{props.value}</li>
        <Tooltip title="Delete">
        <IconButton onClick={()=>{
            props.onSelect(props.id)
        }} aria-label="delete">
        <DeleteIcon />
        </IconButton>
        </Tooltip>
       
        </div>
    )
}
export default Todo