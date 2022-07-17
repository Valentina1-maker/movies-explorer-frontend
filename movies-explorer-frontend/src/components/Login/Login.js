import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css"

function Login({ handleLogin }) {
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
        const { email, password } = data;
        handleLogin(email, password);
    };
    return (
        <>
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
                            value={data.email}
                            onChange={handleChange}
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
                            value={data.password}
                            onChange={handleChange}
                        />
                    </label>
                    <button type="submit" className="login__button">
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
        </>
    );
};

export default Login;