import React from "react";
import classes from "./MyInput.module.css"
const MyInput = (props)=>{
    return(
        <input id="main-create__inp"  className={classes.MyInput} {...props}/>
    )
}

export default MyInput