export default function ToDoList(props) {
 return (
   <div className="todoList">
     {props.todoList.map((item,i) => {
       return (
         <div className="todoItem" key={i}>
           {item.text}
           <span className="fa fa-close" onClick={()=>props.updateDeletetodo(item)}></span>
           <span className={`${item.complete?"fa fa-circle":"fa fa-circle-o"}`} onClick={()=>props.clickupdateListHandler(item)}></span>
         </div>
       );
     })}
   </div>
 );
}