import React from "react";
import PostItem from "./PostItem";
const PostList = ({lists, remove})=>{
    return(
        <div className="list-container">
        <h2>TODO LIST</h2>
        <div className="list-wrapper">
        {lists.map((list)=>(
            <PostItem  remove={remove} list={list} key={list.id}/>
        ))
        }
        </div>

        </div>
    );
};

export default PostList