import React from 'react'

export function ListItems({todos, toggleTodo}) {
    const {id,task,completed}=todos;

    const HandleToggleTodo=()=>{
        toggleTodo(id);

    };

    return(
        <li>
            <input type="checkbox" checked={completed} onChange={HandleToggleTodo} />
            {task} 
            
        </li>
    );
}
