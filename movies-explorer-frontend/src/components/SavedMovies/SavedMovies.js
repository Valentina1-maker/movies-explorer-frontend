import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css"
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import HeaderNavigationAccount from "../HeaderNavigationAccount/HeaderNavigationAccount";
import { useState } from 'react';
import SideBar from "../SideBar/SideBar"


function Movies() {
    const [isSideBarOpened, setIsSideBarOpened] = useState(false)

    const handleSideBarState = () => {
        setIsSideBarOpened(!isSideBarOpened)
    };

    return (
        <>
            <section className="savedmovies">
                <div className="header__movies">
                    <Link to="/" className="header__logo_movies" />
                    <button type="button" onClick={handleSideBarState} class="header__sidebar-button"></button>
                    <HeaderNavigationAccount />
                </div>
                <SearchForm />
                <MoviesCardList />
                <Footer />
                <SideBar isSideBarOpened={isSideBarOpened}
                    handleSideBarState={handleSideBarState} />
            </section>
        </>
    )
}


export default Movies