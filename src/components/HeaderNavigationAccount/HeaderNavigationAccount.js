import React from 'react';
import { NavLink } from 'react-router-dom';


function HeaderNavigationAccount() {
  return (
    <nav className='header__navigation_account header__navigation_logged-in'>
      <div className='header__links header__links_logged-in'>
        <ul className='header__links_movies'>
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
        </ul>
        <ul className='header__links_account'>
          <li className='header__li header__li_logged-in header__link_account-button'>
            <NavLink
              to="/profile"
              className="header__link header__link_logged-in header__li_account-button"
              activeClassName='header__link_active'>
              Аккаунт
            </NavLink>
          </li>
        </ul>
      </div>
    </nav >
  )
}

export default HeaderNavigationAccount
