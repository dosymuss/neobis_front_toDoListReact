import React from "react";
import { useState } from "react";
const PostItem = (props)=>{
    let [buttonClick,setButtonClick]=useState("unClick")
    let [newText, setNewText] = useState(props.list.value)
    function changeValue(){
        setButtonClick(buttonClick="unClick")
    }
    const newStyle = ()=>{
        let style2 = {...styles}
        style2.textDecoration = "line-through"
        setRadioClick(radioClick=style2)
    }
    let styles = {
        textDecoration: "none",
    }
    let [radioClick, setRadioClick] = useState(styles)



    return(
        <div className="list-item__div">

            {props.list.category === "bus"
            ?
            <label className="radio-div">
            <input className="real-radio" type="radio" name="category" value='bus' onClick={()=>newStyle()}/>
            <span class="custom-radio-business" id="business"></span>
            </label>
            :
            <label className="radio-div">
            <input className="real-radio" type="radio" name="category" value='per' onClick={()=>newStyle()}/>
            <span class="custom-radio-personal" id="personal"></span>
            </label> 
            }
            {
                buttonClick === "unClick"
                ?
                <div className="postContent">
                <p className="contentText" 
                style={radioClick}>{newText}</p>
                </div>
                :
                <div className="postContent" >
                <input className="edit-inp" type="text" 
                onChange={
                    (e)=>{
                        setNewText(newText=e.target.value)
                    
                    }
                } 
                onBlur={()=>{

                    changeValue()
                }}
                />
                </div>
            }
            <div className="post__btns">
                <button className="edit-btn" onClick={()=> {

                    setButtonClick(buttonClick="onClick")
                    }} >edit</button>
                <button className="delete-btn" onClick={()=>props.remove(props.list)}>delete</button>
            </div>
        </div>
    )
}

export default PostItem