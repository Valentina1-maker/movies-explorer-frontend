import { useState } from "react";
import { Link } from "react-router-dom";


const Register = ({ handleRegister, waiting }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = data;
    handleRegister( name, email, password);
  };

  return (
    <>
      <section className="register">
        <div className="register__header">
            <Link to="/" className="register__logo" />
        </div>
        <h2 className="popup__title register__title">Добро пожаловать!</h2>
        <form className="popup__form register__form" onSubmit={handleSubmit}>
        <input
            required
            name="name"
            type="name"
            className="register__input register__input_type_name"
            placeholder="Введите имя"
            minLength="2"
            maxLength="40"
            value={data.name}
            onChange={handleChange}
          />
          <input
            required
            name="email"
            type="email"
            className="register__input register__input_type_email"
            placeholder="Email"
            minLength="5"
            maxLength="40"
            value={data.email}
            onChange={handleChange}
          />

          <input
            required
            name="password"
            type="password"
            className="register__input register__input_type_password"
            placeholder="Пароль"
            minLength="1"
            maxLength="40"
            value={data.password}
            onChange={handleChange}
          />

          <button type="submit" className="popup__submit register__button">
            {waiting || "Зарегистрироваться"}
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
    </>
  );
};

export default Register;