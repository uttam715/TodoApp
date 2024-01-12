import { useState } from "react";
import "./style.css";
import TodoList from "./todoList";
export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState("");
  // const[updatedList,setUpdatedList]=useState([]);

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
     
        <TodoList todoList={todoList} clickupdateListHandler={clickupdateListHandler} updateDeletetodo={updateDeletetodo}/>
      
    </div>
  );
}