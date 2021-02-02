import React, {useState} from 'react';
import { useHistory } from "react-router-dom";

export default function SignUp() {
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn=()=>{
    if(!!username && !!password){
        let userName = localStorage.getItem("username", username);
        let pass = localStorage.getItem("password", password);
        if(username===userName && password===pass){
          history.push('/');
        } else {
         alert('No Registered!');
        }
    } else {
        alert('Insert username and password!');
    }
  }

    return (
        <div className="base-container">
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            {/* <img src={loginImg} /> */}
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" onChange={(e)=> setUsername(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" onChange={(e)=> setPassword(e.target.value)}/>
            </div>
          </div>
        </div>
        <div className="footer">
          <button onClick={handleSignIn} type="button" className="btn">
            Sign In
          </button>
        </div>
      </div>
    )
}
