/* eslint-disable */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Authentication } from './helpers/auth';

const PublicRoute = ({ path, component: Component, ...rest }) => (
  <Route {...rest} path={path} render={props => (!Authentication.getAuth() ? <Component {...props} /> : <Redirect to="/" />)} />
);

PublicRoute.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.component,
};
export default PublicRoute;
