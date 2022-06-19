import React from "react";
import './App.css';
import Main from '../Main/Main'
import { Route } from "react-router-dom";
import { BrowserRouter, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Register from "../Register/Register";
import Login from "../Login/Login";
//const CurrentUserContext = React.createContext();


function App() {
  return (
    <BrowserRouter>
      <div className="root">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/sign-up">
            <Register />
          </Route>
          <Route path="/sign-in">
            <Login />
          </Route>
          <Route path="*">
            <Redirect to="/"/>
          </Route>

        </Switch>
      </div>
      </BrowserRouter>
    
  );
}

export default App;