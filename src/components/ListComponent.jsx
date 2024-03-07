// this is know as CSS Component Specially used for styling perticular component
// import Style from "./CSS Modules/ListComponent.module.css"
import ListItem from "./ListItem"

export default function ListComponent({todoList,setTodoList}){

    return(
        <div className="display">
        {todoList.map((item)=>{
            return <div key={item.name} className="listComponent"><ListItem key={item.name} item={item} todos={todoList} setTodo={setTodoList}/></div>
        })}
        </div>
    )
}