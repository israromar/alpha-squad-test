/* eslint-disable */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Authentication } from './helpers/auth';
console.log("🚀 ~ file: ProtectedRoute.js ~ line 7 ~ Authentication", Authentication.getAuth());

const PrivateRoute = ({ path, component: Component, ...rest }) => (
  <Route {...rest} path={path} render={props => (Authentication.getAuth() ? <Component {...props} /> : <Redirect to="/sign-in" />)} />
);

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  // component: PropTypes.component,
};
export default PrivateRoute;
