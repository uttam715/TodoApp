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
    const updatedtodoList=todoList.map((arrayItem)=>{
      // return(arrayItem);
      const rawitem={text:arrayItem.text,complete:arrayItem.complete};
      console.log(rawitem);
      if(item.text===rawitem.text&&item.complete===false)
      {
        rawitem.complete=true;
      }
      else if(item.text===rawitem.text&&item.complete===true)
      {
        rawitem.complete=false;
      }
      return rawitem;

  });
    setTodoList([...updatedtodoList]);
  }
  //   const updatedtodoList=todoList.map((arrayItem)=>{
  //     if(item.complete===true)
  //     {
  //       return(arrayItem.complete=false);
  //     }
  //     else if(item.complete===false)
  //     return(arrayItem.complete=true);
  //   });
  //   setTodoList([...updatedtodoList]);

  // }

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
     
        <TodoList todoList={todoList} clickupdateListHandler={clickupdateListHandler}/>
      
    </div>
  );
}