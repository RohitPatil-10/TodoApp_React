import React from "react";
import { useState } from "react";
import ListComponent from "./ListComponent";
// import Style from "./CSS Modules/TodoApp.module.css"
import Form from "./Form"
import Header from "./Header";
import "./css/TodoApp.css"
import Footer from "./Footer";

export default function TodoApp(){

    const [todoList,setTodoList]=useState([])
    const completedItems=todoList.filter((todo)=>todo.status).length;
    const totalItems=todoList.length;


    return(
        <div className="body">
        <Header className="header"/>
        <div className="main">
        <Form className="form" todoList={todoList} setTodoList={setTodoList}/>
        <ListComponent className="listComponent" todoList={todoList} setTodoList={setTodoList}/>
        </div>    
        <Footer completedItems={completedItems} totalItems={totalItems}/>
        </div>
    )
}