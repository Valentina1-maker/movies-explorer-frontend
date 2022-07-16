import "./Register.css"
import { Link } from "react-router-dom";
import {register} from '../../utils/MainApi'
import {useState} from 'react'


const Register = ({ onRegister }) => {
  const [error, setError] = useState('')

  const handleRegister = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    setError('')
    register(data)
      .then((res) => {
        onRegister({
          email: res.email,
          password: data.get('password')
        })
      })
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
    <section className="register">
      <div className="register__header">
        <Link to="/" className="register__logo" />
      </div>
      <h2 className="register__title">Добро пожаловать!</h2>
      <form className="register__form" onSubmit={handleRegister}>
        <label className="register__form-input">Имя
          <input
            required
            name="name"
            type="name"
            className="register__input"
            placeholder="Введите имя"
            minLength="2"
            maxLength="40"
          />
        </label>

        <label className="register__form-input">E-mail
          <input
            required
            name="email"
            type="email"
            className="register__input"
            placeholder="Email"
            minLength="5"
            maxLength="40"
          />
        </label>
        <label className="register__form-input">Пароль
          <input
            required
            name="password"
            type="password"
            className="register__input"
            placeholder="Пароль"
            minLength="1"
            maxLength="40"
          />
        </label>
        <span className={`register__input-error ${error ? 'register__input-error_visible' : ''}`}>
          {error}&hellip;
        </span>
        <button className="register__button">
          Зарегистрироваться
        </button>
      </form>

      <div className="register__login">
        <p className="register__login-text">
          Уже зарегистрированы&#63;&nbsp;
        </p>
        <Link to="/sign-in" className="register__link">
          Войти
        </Link>
      </div>
    </section>
  );
}

export default Register;