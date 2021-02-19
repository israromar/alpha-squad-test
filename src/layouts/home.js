/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import socketIOClient from 'socket.io-client';
// import { io } from "socket.io-client";

import {signOut, Authentication} from '../helpers/auth';
import '../App.css';

const ENDPOINT = 'http://localhost:4001';
// const URL = "ws://localhost:4001";
// const socket = io(URL, { transports: ['websocket'], autoConnect: false });

export default function Home() {
  const history = useHistory();

  const [loggedInUser, setLoggedInUser] = useState('temp');
  const [msg, setMsg] = useState('');
  const [allMsgs, setAllMsgs] = useState([]);
  const [response, setResponse] = useState('');

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    console.log("🚀 ~ file: home.js ~ line 21 ~ useEffect ~ socket", socket);
    socket.on("FromAPI", data => {
      console.log("🚀 ~ file: home.js ~ line 26 ~ useEffect ~ data", data);
      setResponse(data);
    });

    socket.onAny((event, ...args) => {
      console.log(event, args);
    });

  }, []);

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(allMsgs));
  }, [allMsgs]);

  const handleSubmit = () => {
    const messages = [...allMsgs];
    messages.push(msg);
    localStorage.setItem('messages', JSON.stringify(messages));
    setAllMsgs(messages);
  };

  const handleLogout = async () => {
      await signOut();
      Authentication.signout();
      history.push('/sign-in');
  };

  return (
    <div className="base-container">
      <div className="home-content">
        <p>Home</p>
        <button className="logout-btn" onClick={() => handleLogout()}>
          Logout
        </button>
        {allMsgs.map((msg) => (
          <div style={{}}>
            <span style={{ color: 'Grey', fontWeight: 700, fontSize: 20 }}>
              {loggedInUser} :
            </span>
            <span style={{ fontSize: 12 }}>{msg}</span>
            
          </div>
        ))}
            <p>
              It's <time dateTime={response}>{response}</time>
            </p>
        {/* </div> */}
      </div>
      <input
        className="msg-input"
        type="text"
        name="msg"
        placeholder="type your message..."
          // onSubmit={handleSubmit}
        onChange={(e) => setMsg(e.target.value)}
      />
      <button onClick={() => handleSubmit()}>
        Send
      </button>
    </div>
  );
}
