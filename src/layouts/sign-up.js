import React,{useState} from 'react';
import { useHistory } from "react-router-dom";

export default function SignUp() {
    const history = useHistory();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp=()=>{
        if(!!username && !!password){
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            history.push('/sign-in');
        } else {
            alert('Insert username and password!');
        }
    }
    return (
        <div className="base-container">
        <div className="header">Sign Up</div>
        <div className="content">
          <div className="image">
            {/* <img src={loginImg} /> */}
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" onChange={(e)=> setUsername(e.target.value)}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" onChange={(e)=> setPassword(e.target.value)} />
            </div>
          </div>
        </div>
        <div className="footer">
          <button onClick={handleSignUp} type="button" className="btn">
            Sign Up
          </button>
        </div>
      </div>
    )
}
