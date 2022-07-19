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
import NotFound from '../NotFound/NotFound'

function App() {
  const [countPerPage, setCountPerPage] = useState(0);
  const [initStartCount, setInitStartCount] = useState(0);
  const [userLoaded, setUserLoaded] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  const tokenCheck = () => {
    const token = localStorage.getItem("token"); //получаем сохраненные данные
    if (token) {
      setUserLoaded(false)
      return getUserInfo(token)
        .then((data) => {
          if (data.email) {
            setLoggedIn(true);
            setCurrentUser(data);
            setUserLoaded(true)
          }
        })
        .catch(() => {
          onSignOut()
        });
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
          tokenCheck().then(() => {
            history.push("/movies");
          })
        }
      })
  };

  const onRegister = ({ email, password }) => {
    handleLogin(email, password)
      .catch(() => {});
  };

  const onSignOut = () => {
    setCurrentUser(null)
    setLoggedIn(false);
    localStorage.removeItem('token');
    localStorage.removeItem('movies')
    localStorage.removeItem('isShort')
    localStorage.removeItem('searchRequest')
  };

  const resizeListener = debounce(calculateCountPerPage, 250)

  useEffect(() => {
    calculateCountPerPage()
    tokenCheck();

    window.addEventListener('resize', resizeListener)
    return function cleanup() {
      window.removeEventListener('resize', resizeListener)
    }
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
              userLoaded={userLoaded}
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
              <NotFound />
            </Route>
          </Switch>
        </CurrentUserContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
