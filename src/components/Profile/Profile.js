import "./Profile.css";
import HeaderNavigationAccount from "../HeaderNavigationAccount/HeaderNavigationAccount";
import SideBar from "../SideBar/SideBar";
import {CurrentUserContext} from '../../contexts'
import {Link} from 'react-router-dom'
import {updateUserInfo} from '../../utils/MainApi'
import {useContext, useEffect, useState} from 'react'

function Profile({ isSideBarOpened, handleSideBarState, onSignOut, unUpdate }) {
  const userData = useContext(CurrentUserContext)

  const [changed, setChanged] = useState([])
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    setName(userData.currentUser?.name || '')
    setEmail(userData.currentUser?.email || '')
  }, [userData])

  function updateChanged(name, newValue) {
    setChanged(newValue === userData.currentUser?.[name]
      ? changed.filter(i => i !== name)
      : changed.indexOf(name) < 0
        ? [...changed, name] : changed
    )
  }

  function onNameChange(e) {
    updateChanged('name', e.target.value, name)
    setName(e.target.value)
  }

  function onEmailChange(e) {
    updateChanged('email', e.target.value, email)
    setEmail(e.target.value)
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    setError('')
    updateUserInfo({ email, name })
      .then((res) => {
        setChanged([])
      })
      .catch((err) => {
        err.then(({ message = '', validation }) => {
          if (validation) {
            setError(validation.body.message)
          } else {
            setError(message || 'При обновлении произошла ошибка')
          }
        })
      })
  };

  return (
    <>
      <div className="header__movies">
        <Link to="/" className="header__logo_movies" />
        <button type="button" onClick={handleSideBarState} className="header__sidebar-button" />
        <HeaderNavigationAccount />
      </div>

      <section className="profile">
        <h1 className="profile__greeting">Привет, друг!</h1>

        <form className="profile__form" onSubmit={handleUpdate}>
          <div className="profile__form-wrapper">
            <label className="profile__input-field">Имя
              <input
                type="text"
                name="name"
                id="name"
                className="profile__input"
                minLength="2"
                maxLength="30"
                required
                placeholder="Друг"
                onChange={onNameChange}
                value={name}
              />
            </label>

            <label className="profile__input-field">E-mail
              <input
                type="email"
                name="email"
                id="email"
                minLength="5"
                maxLength="40"
                className="profile__input"
                placeholder="Email"
                onChange={onEmailChange}
                value={email}
              />
            </label>
          </div>

          <div className="profile__button-wrapper">
            <span className={`profile__input-error ${error ? 'profile__input-error_visible' : ''}`}>{error}&hellip;</span>

            <button
              className={`profile__button-edit ${changed.length > 0 ? 'profile__button-edit_active' : ''}`}
              disabled={changed.length === 0}
            >
              Редактировать
            </button>

            <button
              className="profile__button-logout"
              type="button"
              onClick={onSignOut}
            >
              Выйти из аккаунта
            </button>
          </div>
        </form>
      </section>

      <SideBar
        isSideBarOpened={isSideBarOpened}
        handleSideBarState={handleSideBarState}
      />
    </>
  );
}

export default Profile