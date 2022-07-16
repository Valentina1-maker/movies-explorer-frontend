import React from "react";
import { Link } from "react-router-dom";
import "./Login.css"
import {useState} from 'react'

function Login({ handleLogin }) {
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target)
    setError('')
    handleLogin(data.get('email'), data.get('password'))
      .catch((err) => {
        err.then(({ message = '', validation }) => {
          if (validation) {
            setError(validation.body.message)
          } else {
            setError(message)
          }
        })
      })
  };

  return (
    <section className="login">
      <div className="login__header">
        <Link to="/" className="login__logo" />
        <h1 className="login__greeting">Рады видеть!</h1>
      </div>

      <form className="login__form" onSubmit={handleSubmit}>
        <label className="login__form-inputs">E-mail
          <input
            required
            name="email"
            type="email"
            className="login__input"
            placeholder="Email"
            minLength="5"
            maxLength="40"
          />
        </label>

        <label className="login__form-inputs">Пароль
          <input
            required
            name="password"
            type="password"
            className="login__input"
            placeholder="Пароль"
            minLength="1"
            maxLength="40"
          />
        </label>

        <span className={`login__input-error ${error ? 'login__input-error_visible' : ''}`}>
          {error}&hellip;
        </span>

        <button className="login__button">
          Войти
        </button>
      </form>

      <div className="login__register">
        <p className="login__register-text">
          Ещё не зарегистрированы&#63;&nbsp;
        </p>
        <Link to="/signup" className="login__register-link">
          Регистрация
        </Link>
      </div>
    </section>
  );
}

export default Login;