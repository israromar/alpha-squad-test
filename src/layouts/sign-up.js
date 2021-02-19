/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import {
  Authentication, signup, signInWithGoogle, signInWithGitHub,
} from '../helpers/auth';

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

  console.log('🚀 ~ file: sign-up.js ~ line 7 ~ SignUp ~ history', history);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  console.log('🚀 ~ file: sign-up.js ~ line 11 ~ SignUp ~ error', error);

  const handleSignUp = async () => {
    if (!!email && !!password) {
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      // history.push('/sign-in');
      setError('');
      try {
        const user = await signup(email, password);
        if (user) {
          history.push('/');
          Authentication.authenticate(true);
        }
        console.log('🚀 ~ file: sign-up.js ~ line 37 ~ handleSignUp ~ user', user);
      } catch (err) {
        console.log('🚀 ~ file: sign-up.js ~ line 39 ~ handleSignUp ~ err', err);
        setError(err.message);
        alert(err.message);
      }
    } else {
      alert('Insert email and password!');
    }
  };

  const googleSignIn = async () => {
    try {
      const user = await signInWithGoogle();
      console.log('🚀 ~ file: sign-up.js ~ line 58 ~ googleSignIn ~ user', user);
      if (user) {
        history.push('/');
        Authentication.authenticate(true);
      }
    } catch (err) {
      setError(err.message);
      alert(err.message);
    }
  };

  const githubSignIn = async () => {
    try {
      const user = await signInWithGitHub();
      if (user) {
        history.push('/');
        Authentication.authenticate(true);
      }
    } catch (err) {
      setError(err.message);
      alert(err.message);
    }
  };

  return (
    <div className="base-container">
      <div className="header">Sign Up</div>
      <div className="content">
        <div className="image">
          {/* <img src={loginImg} /> */}
        </div>
        <div className="form">
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              id="outlined-secondary"
              label="Email"
              variant="outlined"
              color="secondary"
            />
            <TextField
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
        <Button onClick={handleSignUp} variant="contained" color="primary">Sign Up</Button>
        <Button style={{ marginTop: '10px' }} onClick={googleSignIn} variant="contained" color="primary">Sign up with Google</Button>
        <Button style={{ marginTop: '10px' }} onClick={githubSignIn} variant="contained" color="primary">Sign up with GitHub</Button>
      </div>

      {/* <div className="footer"  /> */}
      <p className="link" to="/sign-in">
        Have an account?
        <Link className="link" to="/sign-in"> Sign In</Link>
      </p>
    </div>
  );
}
