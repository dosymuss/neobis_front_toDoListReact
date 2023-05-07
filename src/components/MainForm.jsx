import React from "react";
import MyInput from "../ui/input/MyInput";
import { useState } from "react";

const MainForm = ({create})=>{
    const[lists, setLists]=useState({value:"", category:""})
    function addList(e){
        e.preventDefault()
        const newList = {
            ...lists,
            id:Date.now()
        }
        create(newList)
        setLists({value:"", category:""})
      }
    return(
        <form className="main">
            <div class="main-create__div">
                <p class="name">CREATE A TODO</p>
                <p class="instruction">What's on your todo list?</p>
                <MyInput placeholder="e.g. get a milk" onChange={e=>setLists({...lists, value:e.target.value})}/>
            </div>
            <div className="main-category__div">
            <p class="instruction">Pick a category</p>
            <div className="main-category-btn__div">
                <div className="main-category__btn">
                <label>
                <input className="real-radio" type="radio" name="category" id="radio-business" value='bus' onClick={e=>setLists({...lists, category:e.target.value})}/>
                <span class="custom-radio-business" id="business"></span>
                <p>Business</p>
                </label>
                </div>

                <div className="main-category__btn">
                <label>
                <input className="real-radio" type="radio" name="category" id="radio-personal" value='per' onClick={e=>setLists({...lists, category:e.target.value})}/>
                <span class="custom-radio-personal" id="personal"></span>
                <p>Personal</p>
                </label>
                </div>
            </div>
            </div>

        <button id="submit-btn" type="submit" onClick={addList}>Add todo</button>
        </form>
    )
}

export default MainForm