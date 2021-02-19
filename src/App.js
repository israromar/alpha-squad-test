import React, { useState, useEffect } from 'react';
import {
  // Route,
  HashRouter,
} from 'react-router-dom';
import { Home, SignIn, SignUp } from './layouts';
import PublicRoute from './PublicRoute';
import ProtectedRoute from './ProtectedRoute';

import { Authentication } from './helpers/auth';
import { auth } from './services/firebase';

import './App.css';

function App() {
  const [loading, setLoading] = useState(false);
  console.log('🚀 ~ file: App.js ~ line 17 ~ App ~ loading', loading);

  useEffect(() => {
    console.log('useEffect');
    auth().onAuthStateChanged((user) => {
      console.log('🚀 ~ file: App.js ~ line 21 ~ auth ~ user', user);
      if (user) {
        Authentication.authenticate(true);
        setLoading(false);
      } else {
        Authentication.authenticate(false);
      }
    });
  });

  return (
    <div className="App">
      <HashRouter>
        <div className="container">
          <h1 className="title"> Quick Chat </h1>
          <div className="content">
            {/* <Route exact path="/" component={Home} /> */}
            <PublicRoute path="/sign-in" component={SignIn} />
            <PublicRoute path="/sign-up" component={SignUp} />
            <ProtectedRoute exact path="/" component={Home} />
          </div>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
