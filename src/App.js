import "./styles/App.css"
import MainForm from "./components/MainForm";
import { useState } from "react";
import PostList from "./components/PostList";


function App() {
const [lists, setLists] = useState([
  {id:1,value:"gygygy",category:"bus"}
])
const createList = (newList)=>{
setLists([...lists, newList])
}
const removeList = (list)=>{
  setLists(lists.filter(l=> l.id !== list.id))
}





  return (
    <div className="App">
      <h1 className="header-title">What's up <input id="nameInp" placeholder="name"/></h1>
      <MainForm create={createList}/>
      <PostList remove={removeList} lists={lists}/>
    </div>
  );
}

export default App;
