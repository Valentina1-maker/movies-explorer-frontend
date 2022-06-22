import React from 'react';
import { NavLink } from 'react-router-dom';

function HeaderNavigationMain() {
    return (
        <nav className='header__navigation header__navigation_logged-in'>
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
        </nav>
    )
}

export default HeaderNavigationMain