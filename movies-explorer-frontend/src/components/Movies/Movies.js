import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import logo from "../../images/logo-movies.svg";
import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";


function Movies() {
    return (
      <>
      <header className="header__movies">
            <img
                src={logo}
                alt="Здесь должен быть логотип"
                className="header__logo"
            />
            <div className="header__menu">
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
                                <div className='header__link_button-profile'></div>
                            </li>
                        </ul>
                    </nav>
            </div>
      </header>
      <main className="content">
          <SearchForm/>
      </main>
          
        <Footer />
      </>
      )
    }
    

export default Movies