import React,{useState} from "react";

export function CounterClick(prop){

    const handleButtonClick=()=>{
        setConuters(counter +1);
    }
    const[counter,setConuters]=useState(prop.initialValue)
    const style={
        fontsize: 'large',
        width: '100px',
        height: '40px',
        marginbottom: '-80px'
    }

    return <button style={style} className="contador" onClick={handleButtonClick}>{counter}</button>;
}