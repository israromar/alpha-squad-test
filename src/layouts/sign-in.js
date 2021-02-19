/* eslint-disable no-console */
/* eslint-disable no-alert */
import React, { useState } from 'react';
import { io } from 'socket.io-client';
import { useHistory, Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import { signin, Authentication } from '../helpers/auth';

const URL = 'ws://localhost:4001';
const socket = io(URL, { transports: ['websocket'], autoConnect: false });

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '40ch',
    },
  },
}));

export default function SignUp() {
  const history = useHistory();
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  // const [response, setResponse] = useState('');

  console.log('🚀 ~ file: sign-in.js ~ line 24 ~ SignUp ~ error', error);

  const handleSignIn = async () => {
    if (!!email && !!password) {
      try {
        const user = await signin(email, password);
        console.log('🚀 ~ file: sign-in.js ~ line 32 ~ handleSignIn ~ user', user);
        if (user) {
          // const socket = socketIOClient(ENDPOINT);
          console.log('🚀 ~ file: sign-in.js ~ line 41 ~ handleSignIn ~ socket', socket);
          // socket.on('FromAPI', (data) => {
          //   setResponse(data);
          // });

          Authentication.authenticate(true);
          history.push('/');
        }
      } catch (err) {
        console.log('🚀 ~ file: sign-in.js ~ line 38 ~ handleSignIn ~ err', err);
        Authentication.authenticate(false);
        setError(err.message);
        alert(err.message);
      }
    } else {
      alert('Insert email and password!');
    }
  };

  return (
    <div className="base-container">
      <div className="header">Sign In</div>
      <div className="content">
        <div className="image">
          {/* <img src={loginImg} /> */}
        </div>
        <div className="form">
          <form className={classes.root} noValidate autoComplete="off">

            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="outlined-secondary"
              label="Email"
              variant="outlined"
              color="secondary"
            />
            <TextField
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="outlined-secondary"
              label="Password"
              variant="outlined"
              color="secondary"
            />

          </form>
        </div>
      </div>
      <div className="footer">
        <Button onClick={handleSignIn} variant="contained" color="primary">Sign In</Button>
      </div>
      <Link className="link" to="/sign-up">Register</Link>
    </div>
  );
}
