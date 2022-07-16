import './App.css';
import Login from "../Login/Login";
import Main from '../Main/Main'
import Movies from "../Movies/Movies"
import Profile from "../Profile/Profile";
import ProtectedRouter from '../ProtectedRouter'
import React, {useEffect} from 'react'
import Register from "../Register/Register";
import SavedMovies from "../SavedMovies/SavedMovies"
import {CurrentUserContext} from '../../contexts'
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  useHistory
} from 'react-router-dom'
import {debounce} from '../../utils/common'
import {getUserInfo, login} from '../../utils/MainApi'
import {useState} from 'react'
import { getCalculatePerPageFunc } from '../../utils/MovieService'

function App() {
  const [countPerPage, setCountPerPage] = useState(0)
  const [initStartCount, setInitStartCount] = useState(0)
  const [loggedIn, setLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState(null)
  const history = useHistory()

  const tokenCheck = () => {
    const token = localStorage.getItem("token"); //получаем сохраненные данные
    if (token) {
      getUserInfo(token)
        .then((data) => {
          if (data.email) {
            setLoggedIn(true);
            setCurrentUser(data)
          }
        })
        .catch(() => {});
    } else {
      setLoggedIn(false);
      setCurrentUser(null)
    }
  };

  const calculateCountPerPage = getCalculatePerPageFunc({ setCountPerPage, setInitStartCount })

  const handleLogin = (email, password) => {
    return login(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("token", res.token);
          history.push("/movies");
          setLoggedIn(true);
        }
      })
  };

  const onRegister = ({ email, password }) => {
    handleLogin(email, password)
      .catch(() => {});
  };

  const onSignOut = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
  };

  useEffect(() => {
    calculateCountPerPage()
    tokenCheck();

    window.addEventListener('resize', debounce(calculateCountPerPage, 250))
  }, [])

  return (
    <BrowserRouter>
      <div className="root">
        <CurrentUserContext.Provider value={{ currentUser, loggedIn }}>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>

            <ProtectedRouter
              exact
              onSignOut={onSignOut}
              onUpdate={tokenCheck}
              path="/profile"
              component={Profile}
            />

            <ProtectedRouter
              exact
              path="/movies"
              countPerPage={countPerPage}
              initStartCount={initStartCount}
              key={countPerPage + initStartCount + loggedIn}
              component={Movies}
            />

            <ProtectedRouter
              exact
              path="/saved-movies"
              countPerPage={countPerPage}
              initStartCount={initStartCount}
              key={countPerPage + initStartCount + loggedIn}
              component={SavedMovies}
            />

            <Route exact path="/signup">
              {
                loggedIn
                  ? <Redirect to="/movies" />
                  : <Register onRegister={onRegister} />
              }
            </Route>

            <Route path="/sign-in">
              {
                loggedIn
                  ? <Redirect to="/movies" />
                  : <Login handleLogin={handleLogin} />
              }
            </Route>

            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </CurrentUserContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
