import React from "react";
import reactDom from "react-dom";

import {BrowserRouter, Route,Switch} from "react-router-dom";

//Import the app

import {AppTodoList} from "./App";
import AppCalculator from "./App";
import Navbar from "./components/Navbar";
import {AppCounterClick} from "./App";
import {AppGallery} from "./App";



reactDom.render(

    <React.StrictMode>
        <BrowserRouter>
        <Navbar/>
        <Switch>
            <Route component={AppTodoList} path="/todolist">
             <AppTodoList/>
            </Route>

            <Route component={AppCounterClick} path="/counter">
               <AppCounterClick/>
              
            </Route>

            <Route component={AppCalculator} path="/calculator">
             <AppCalculator/>
               
            </Route>

            <Route component={AppGallery} path="/gallery">
                <AppGallery/>
             
            </Route>
        </Switch>
        </BrowserRouter>
    </React.StrictMode>,

     document.getElementById("root")
);