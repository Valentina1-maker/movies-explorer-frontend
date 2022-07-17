import "./SavedMovies.css"
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

function SavedMovies() {
  const [isSideBarOpened, setIsSideBarOpened] = useState(false)
  const [searchRequest, setSearchRequest] = useState('')
  const [isShort, setIsShort] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [movies, setMovies] = useState([])

  useEffect(() => {
    loadSavedMovies()
  }, [])

  function loadSavedMovies() {
    setIsLoading(true)
    SavedMoviesApi.getMovies()
      .then((data) => data.map((item) => mapSavedMovie(item)))
      .then((movies) => {
        setMovies(movies)
        setIsLoading(false)
      })
      .catch(() => {
        alert('Произошла ошибка загрузки списка сохраненных видео')
        setIsLoading(false)
      })
  }

  function updateSaved(movie, isSave) {
    if (isSave) {
      setMovies([...movies, { ...movie, id: movie._id }])
    } else {
      setMovies(movies.filter((m) => m.id !== movie.id))
    }
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
        <button
          type="button"
          onClick={handleSideBarState}
          className="header__sidebar-button"
        />
        <HeaderNavigationAccount />
      </div>

      <SearchForm
        onUpdateFilters={setFilters}
        isShort={isShort}
        searchRequest={searchRequest}
      />
      <MoviesCardList
        movies={filteredMovies}
        inSavedPage
        savedMovies={movies}
        searchRequest={searchRequest}
        updateSaved={updateSaved}
        isShort={isShort}
        isLoading={isLoading}
      />
      <Footer />
      <SideBar
        isSideBarOpened={isSideBarOpened}
        handleSideBarState={handleSideBarState}
      />
    </section>
  )
}

export default SavedMovies