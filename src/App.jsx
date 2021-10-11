import React,{Fragment,useState,useRef, useEffect} from "react";
import {TodoList} from "./components/TodoList";
import {v4 as Gid} from "uuid"
const key="todoApp.todos";

export function App(){
    const[todos, setTodos]=useState([
        { id:1,task:"tarea 1",completd:false},
    ]);
    const TodoRef=useRef();
    useEffect(()=>{
        const stored=JSON.parse(localStorage.getItem(key));
        if(stored){
            setTodos(stored);
        }
    },[]);

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(todos));

    },[todos]);

    const toggleTodo=(id)=>{
        const newTodo=[...todos];
        const todo=newTodo.find((todo)=>todo.id===id);
        todo.completed= !todo.completed;
        setTodos(newTodo);
    };


    const TodoAdd=()=>{
        const task=TodoRef.current.value;
        if(task==="")return;

        setTodos((prevTodos)=>{
            return[...prevTodos,{id:Gid(),task, completed: false}];
        });
        TodoRef.current.value=null;

    };
    
    const HandleTodoDelete=()=>{
        const newTodo=todos.filter((todo)=> !todo.completed);
        setTodos(newTodo);
    };

    return (
     <Fragment>
        <TodoList todos={todos} toggleTodo={toggleTodo}/>
        <input ref={TodoRef} type="text" placeholder="Nueva tarea" />
        <button  onClick={HandleTodoDelete}>Delete </button>
        <button onClick={TodoAdd}>Add</button>
        <div>
            faltan {todos.filter((todo)=>!todo.completed).length} tareas por finalizar
        </div>
     </Fragment>
    );
    
}