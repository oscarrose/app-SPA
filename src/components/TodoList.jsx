import React from "react";
import { ListItems } from "./ListItems";


export function TodoList({todos, toggleTodo}){
    return (
        <ul>
            {todos.map((todos)=>(
                <ListItems key={todos.id} todos={todos} toggleTodo={toggleTodo}/>
            ))}
        
        </ul>
    );
}   