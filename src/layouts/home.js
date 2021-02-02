import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";

import '../App.css';

export default function Home() {
  const history = useHistory();

  const [loggedInUser, setLoggedInUser] = useState('temp');
  const [msg, setMsg] = useState('');
  const [allMsgs,setAllMsgs] = useState([])
  
   useEffect(()=>{   
    let user = localStorage.getItem("username");
    let pass = localStorage.getItem("password");
    if(!!user && !!pass){
      setLoggedInUser(user);
      let msgs = [];
      // localStorage.setItem("messages", JSON.stringify(msgs));
      let messages = JSON.parse(localStorage.getItem("messages"));
      setAllMsgs(messages);

    } else {
      history.push('/sign-up');
      alert('Unauthorized!');
    }
  },[])

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(allMsgs));
  }, [allMsgs])
  

  const handleSubmit=()=>{
    let messages = [...allMsgs];
    messages.push(msg);
    localStorage.setItem("messages", JSON.stringify(messages)); 
    setAllMsgs(messages);
}

const handleLogout=()=>{
  localStorage.removeItem("username");
  localStorage.removeItem("password");
  // localStorage.removeItem("messages");
  history.push('/sign-in');
}
    return (
        <div className="base-container">
        <div className="home-content">
        <p>Home</p>
        <button className="logout-btn" onClick={()=>handleLogout()}>
          Logout
        </button>
        {/* <div className="msgs-wrap"> */}
        {/* <p>{loggedInUser}: </p> */}
        
        {allMsgs.map((msg)=>{
          return (
            <div>
              <h1>{loggedInUser}: </h1>
              <span>{msg}</span>
            </div>
          )})}
        {/* </div> */}
        </div>
        <input className='msg-input' type="text" name="msg" placeholder="type your message..." 
          // onSubmit={handleSubmit} 
          onChange={(e)=>setMsg(e.target.value)} 
        />
        <button onClick={()=>handleSubmit()}>
          Send
        </button>
      </div>
    )
}
