import { Route, Redirect } from "react-router-dom";
import {useContext} from 'react'
import {CurrentUserContext} from '../contexts'
import React from 'react'

const ProtectedRoute = ({ component: Component, ...props }) => {
  const { loggedIn } = useContext(CurrentUserContext)

  return (
    <Route>
      { () => loggedIn ? <Component {...props} key={loggedIn} /> : <Redirect to="/sign-in" /> }
    </Route>
  );
};

export default ProtectedRoute;
