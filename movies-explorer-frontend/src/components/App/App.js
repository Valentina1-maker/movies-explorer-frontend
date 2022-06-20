import React from "react";
import './App.css';
import Main from '../Main/Main'
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { Redirect } from "react-router-dom";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Movies from "../Movies/Movies"



function App() {
  return (
    <BrowserRouter>
      <div className="root">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/movies">
             <Movies />
          </Route>
          <Route exact path="/signup">
             <Register />
          </Route>
          <Route path="/sign-in">
            <Login />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
      
      
  );
}

export default App;