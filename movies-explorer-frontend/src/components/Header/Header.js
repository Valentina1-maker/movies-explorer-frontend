import React from 'react';
import logo from "../../images/logo-header.svg";
import { NavLink } from "react-router-dom";
import "./Header.css"

function Header() {
    return (
        <header className="header__main">
            <img
                src={logo}
                alt="Здесь должен быть логотип"
                className="header__logo"
            />
            <div className="header__menu">
                        <nav className="header__navigation">
                        <ul className="header__links">
                            <li className="header__li">
                                <NavLink
                                    to="/signup"
                                    className="header__link"
                                    activeClassName='header__link_active'>Регистрация
                                </NavLink>
                            </li>
                            <li className="header__li">
                                <NavLink
                                    to="/sign-in"
                                    className="header__link_entry-button"
                                    activeClassName='header__link_active'>
                                    Войти
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
            </div>
        </header>
    );
}

export default Header;