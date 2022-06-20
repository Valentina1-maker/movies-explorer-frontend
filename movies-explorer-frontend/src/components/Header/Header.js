import React from 'react';
import logo from "../../images/logo-header.svg";
import { NavLink } from "react-router-dom";
import "./Header.css"

function Header({loggedIn}) {
    return (
        <header className="header__main">
            <img
                src={logo}
                alt="Здесь должен быть логотип"
                className="header__logo"
            />
            <div className="header__menu">
                {loggedIn ? (
                <>
                <nav className='header__navigation header__navigation_logged-in'>
                        <ul className='header__links header__links_logged-in'>
                            <li className='header__li header__li_logged-in'>
                                <NavLink
                                    to="/movies"
                                    className="header__link header__link_logged-in"
                                    activeClassName='header__link_active'>
                                    Фильмы
                                </NavLink>
                            </li>
                            <li className='header__li header__li_logged-in'>
                                <NavLink
                                    to="/saved-movies"
                                    className="header__link header__link_logged-in"
                                    activeClassName='header__link_active'>
                                    Сохраненные фильмы
                                </NavLink>
                            </li>
                            <li className='header__li header__li_logged-in header__li_account-button'>
                                <NavLink
                                    to="/profile"
                                    className="header__link header__link_logged-in header__li_account-button"
                                    activeClassName='header__link_active'>
                                    Аккаунт
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    </> ) : (
                        <>
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
                        </>
                    )}
                   
            </div>
        </header>
    );
}

export default Header;