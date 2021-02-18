
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
       <div className="container">
          <h1 className="title">Quick Chat</h1>
          {/* <ul className="header">
          <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/sign-up">Sign Up</NavLink></li>
            <li><NavLink to="/sign-in">Sign In</NavLink></li>
          </ul> */}
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/sign-in" component={SignIn}/>
            <Route path="/sign-up" component={SignUp}/>
          </div>
        </div>
        </HashRouter>
    </div>
  );
}

export default App;
