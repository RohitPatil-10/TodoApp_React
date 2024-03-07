
export default function ListItem({item,todos,setTodo}){
    function handleClick(item){
        //This filter method filter all the TodoItem array and return all element except the element we are searching for so the Todo list will set with latest array of elements except latest removed Item.......
        setTodo(todos.filter((todo)=>{
            if(todo.name !== item.name){
                return todo
            }
        }))
    
    }
    function checkHandle(name){
        setTodo(todos.map((todo)=>todo.name===item.name? {...todo,status:!todo.status}: todo))
    }
    const style=item.status?{textDecoration:'line-through'}:{};
    return(
        <div className="itemContent">
        <input type="checkbox" onChange={()=>{
            checkHandle(item);
        }}/>
        <h1 className="item"><span style={style}>{item.name}</span></h1>
        <button 
            onClick={()=>{
            handleClick(item)
            }} 
            className="removeItem">X
        </button>
        </div>
    )
}