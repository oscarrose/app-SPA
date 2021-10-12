import React from "react";
import { Link } from "react-router-dom";

const Navbar=()=>{
    const sytle={
         
            display: 'inline',
            liststyletype: 'none',
            margin: '0px',
            padding: '0px',
            fontweight: 'bold',
            textdecoration: 'none',
            margin: '5px'

    }
    return(
    <>
        <Link style={sytle} to="/todolist">TodoList</Link>
        <Link style={sytle} to="/counter">Counter</Link>
        <Link style={sytle} to="/calculator">Calculator</Link>
        <Link style={sytle} to="/gallery">Gallery</Link>
        <hr/>
    
    </>
    );
}

export default Navbar;
