import { useState } from "react";
import "./style.css";
export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState("");

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
    </div>
  );
}