import "./SavedMovies.css"
import ButtonCardsMore from '../ButtonCardsMore/ButtonCardsMore'
import Footer from "../Footer/Footer";
import HeaderNavigationAccount from "../HeaderNavigationAccount/HeaderNavigationAccount";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import React from "react";
import SavedMoviesApi from '../../utils/SavedMoviesApi'
import SearchForm from "../SearchForm/SearchForm";
import SideBar from "../SideBar/SideBar"
import { Link } from "react-router-dom";
import { useEffect } from 'react'
import { useState } from 'react';
import {filterMovies, mapSavedMovie} from '../../utils/MovieService'

function SavedMovies({ initStartCount, countPerPage }) {
  const [isSideBarOpened, setIsSideBarOpened] = useState(false)
  const [searchRequest, setSearchRequest] = useState('')
  const [isShort, setIsShort] = useState(false)
  const [page, setPage] = useState(0)
  const [movies, setMovies] = useState([])

  useEffect(() => {
    loadSavedMovies()
  }, [])

  function loadSavedMovies() {
    SavedMoviesApi.getMovies()
      .then((data) => data.map((item) => mapSavedMovie(item)))
      .then((movies) => {
        setMovies(movies)
      })
  }

  const handleSideBarState = () => {
    setIsSideBarOpened(!isSideBarOpened)
  };

  function setFilters({ searchRequest, isShort }) {
    searchRequest !== undefined && setSearchRequest(searchRequest)
    isShort !== undefined && setIsShort(isShort)
  }

  const filteredMovies = movies
    .filter((movie) =>
      filterMovies({ movie, searchRequest, isShort })
    )

  return (
    <section className="savedmovies">
      <div className="header__movies">
        <Link to="/" className="header__logo_movies" />
        <button type="button" onClick={handleSideBarState} className="header__sidebar-button" />
        <HeaderNavigationAccount />
      </div>

      <SearchForm onUpdateFilters={setFilters} />
      <MoviesCardList
        movies={filteredMovies.slice(0, initStartCount + countPerPage * page)}
        inSavedPage
        savedMovies={movies}
        searchRequest={searchRequest}
        isShort={isShort}
      />
      {
        initStartCount + countPerPage * page + countPerPage <= filteredMovies.length
          ? <ButtonCardsMore onLoadMore={() => setPage(page + 1)} />
          : ''
      }
      <Footer />
      <SideBar
        isSideBarOpened={isSideBarOpened}
        handleSideBarState={handleSideBarState}
      />
    </section>
  )
}

export default SavedMovies