import React,{Fragment,useState,useRef, useEffect,Component} from "react";
import {TodoList} from "./components/TodoList";
import {CounterClick} from "./components/CounterClick";
import KeyPadComponent from "./components/KeyPadComponent";
import ResultComponent from "./components/ResultComponent"
import "./style/AppCalculator.css"
import GridGallery from "./components/gallery";
import {v4 as Gid} from "uuid"
const key="todoApp.todos";


//App the calculador
class AppCalculator extends Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };


    calculate = () => {
        var checkResult = ''
        if(this.state.result.includes('--')){
            checkResult = this.state.result.replace('--','+')
        }

        else {
            checkResult = this.state.result
        }

        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(checkResult) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div>
                <div className="calculator">
                    <ResultComponent result={this.state.result}/>
                    <KeyPadComponent onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default AppCalculator;

//App the gallery

export function AppGallery() {
    const images = [
      "./img/img1.jpg",
      "./img/img2.jpg",
      "./img/img3.jpg",
      "./img/img4.jpg"
    ];
  
    return (<GridGallery images={images} alt="description of image"/>);
}
  

//App de conunters
export function AppCounterClick(){
   
    return(
        <div className="content">
             <CounterClick initialValue={0}/>
        </div>
    
   
    );
}

//app the todoList
export function AppTodoList(){
    const[todos, setTodos]=useState([
        { id:1,task:"tarea 1",completed:false},
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
    const style = {
     fontSize:'12px',
        width: '45px',
        height:'45px',
        margin: '5px'
    };
    

    return (
      
     <Fragment>
        <TodoList todos={todos} toggleTodo={toggleTodo}/>
        <input ref={TodoRef} type="text" placeholder="Nueva tarea" />
        <button style={style}  onClick={HandleTodoDelete}>Delete </button>
        <button style={style} onClick={TodoAdd}>Add</button>
       
      
        <div>
            faltan {todos.filter((todo)=>!todo.completed).length} tareas por finalizar
        </div>
        <div>
        
        </div>
     </Fragment>
    );

    
}