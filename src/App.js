
import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import {Home, SignIn, SignUp} from './layouts';
import './App.css';

function App() {

//  const RenderSecureRoutes = ( )=> {
//    if(true){
//     return  (
//       <Route path="/" component={Home}/>    
//     )
//    } else {
//    }
//   }

  return (
    <div className="App">
       <HashRouter>
       <div>
          <h1>Alpha Squad Test</h1>
          <ul className="header">
          <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/sign-up">Sign Up</NavLink></li>
            <li><NavLink to="/sign-in">Sign In</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            {/* {RenderSecureRoutes()} */}
            <Route path="/sign-up" component={SignUp}/>
            <Route path="/sign-in" component={SignIn}/>
          </div>
        </div>
        </HashRouter>
    </div>
  );
}

export default App;
