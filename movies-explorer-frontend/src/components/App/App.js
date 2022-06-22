import React from "react";
import './App.css';
import Main from '../Main/Main'
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { Redirect } from "react-router-dom";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Movies from "../Movies/Movies"
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies"



function App() {
  return (
    <BrowserRouter>
      <div className="root">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/movies">
             <Movies />
          </Route>
          <Route exact path="/saved-movies">
             <SavedMovies />
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