import { useState } from "react"
export default function Form({todoList,setTodoList}){
    // this state is only used by Form Component so we added it to this component
    // const [todo,setTodo]=useState("")
    const [todo,setTodo]=useState({name:"",status:false})
    function handler(e){
        e.preventDefault();
        const duplicateItem=todoList.some(({name})=>{
            return todo.name===name;
        });
        //Also using spread operator for adding new item to existing items in todoList state variable
        if(todo.name==""){
            alert("Please Enter Your Task....")
        }else if(duplicateItem){
            alert("Your Task is Already Present in List....")

        }else{
            setTodoList([...todoList,todo]);
        }
        //This will print empty array because setTodoList is async thats why console.log will execute first
        // console.log(todoList);
        setTodo({name:"",status:false});
    }

    return(
        <div className="form">
        <form onSubmit={handler}>
                <input onChange={(e)=>{
                    setTodo({name:e.target.value})
                }} type="text" value={todo.name} placeholder="Enter your task"/>
                <button>Add</button>
        </form>
        </div>
    )
}