import { useState } from "react";
import "./style.css";
import TodoList from "./todoList";
export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState("");
  const[tab,setTab]=useState("All");

  function changeInputHandler(e) {
    setInput(e.target.value);
  }

  function clickButtonHandler(e) {
    //descriptive way
    // const clonedTodo = [...todoList];
    // const newTodo = {
    //   text: input,
    //   complete: false
    // }

    // clonedTodo.push(newTodo)

    setTodoList([...todoList, { text: input, complete: false }]);
    setInput("");
  }

  function clickupdateListHandler(item) {
    const updatedtodoList = todoList.map((arrayItem) => {
      if (item.text === arrayItem.text && item.complete === false) {
        arrayItem.complete = true;
      } else if (item.text === arrayItem.text && item.complete === true) {
        arrayItem.complete = false;
      }
      return arrayItem;
    });
    setTodoList([...updatedtodoList]);
  }

  function updateDeletetodo(item) {
    const updateList = todoList.filter((arrayItem) => {
      if (arrayItem.text!== item.text) return true
     // else return true
     return false;
    });
    setTodoList([...updateList]);
  }

  const updatedList = todoList.filter((item) => {
    if (tab === "all") return true;
    else if (tab === "pending") {
      return !item.complete;
    } else if (tab === "completed") {
      return item.complete;
    }
    return true;
  });
// setTodoList([...updatedList]);

  return (
    <div className="app">
      <div className="addInputDiv">
        <input
          type="text"
          className="inputBar"
          placeholder="Add Activity"
          value={input}
          onChange={changeInputHandler}
        ></input>
        <button
          type="submit"
          className="inputButton"
          onClick={clickButtonHandler}
        >
          Add To Do
        </button>
      </div>
     
        <TodoList todoList={updatedList} clickupdateListHandler={clickupdateListHandler} updateDeletetodo={updateDeletetodo}/>
      
        <div className="tab">
          <button className={`${tab==='all'?"activeTab":"all"}`}  onClick={()=>setTab("all")}>All</button>
          <button className={`${tab==='pending'?"activeTab":"pending"}`}  onClick={()=>setTab("pending")}>Pending</button>
          <button className={`${tab==='completed'?"activeTab":"completed"}`}  onClick={()=>setTab("completed")}>Completed</button>

        </div>
    </div>

  );
}