import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import HeaderNavigationAccount from "../HeaderNavigationAccount/HeaderNavigationAccount";


function Movies() {
    return (
        <>
            <section className="movies">
                <div className="header__movies">
                    <Link to="/" className="header__logo_movies" />
                    <button type="button" name="#popup" class="header__sidebar-button"></button>
                    <HeaderNavigationAccount />
                </div>
                <SearchForm />
                <MoviesCardList />
                <Footer />
            </section>
        </>
    )
}


export default Movies