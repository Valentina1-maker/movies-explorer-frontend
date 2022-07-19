import "./Movies.css"
import ButtonCardsMore from "../ButtonCardsMore/ButtonCardsMore";
import Footer from "../Footer/Footer";
import HeaderNavigationAccount from "../HeaderNavigationAccount/HeaderNavigationAccount";
import MoviesApi from '../../utils/MoviesApi'
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import React, {useEffect} from 'react'
import SavedMoviesApi from '../../utils/SavedMoviesApi'
import SearchForm from "../SearchForm/SearchForm";
import SideBar from "../SideBar/SideBar"
import {Link} from "react-router-dom";
import {filterMovies, mapMovie, mapSavedMovie} from '../../utils/MovieService'
import {useState} from 'react';

function Movies({ initStartCount, countPerPage, userLoaded }) {
  const [isSideBarOpened, setIsSideBarOpened] = useState(false)
  const [searchRequest, setSearchRequest] = useState('')
  const [isShort, setIsShort] = useState(false)
  const [page, setPage] = useState(0)
  const [movies, setMovies] = useState([])
  const [savedMovies, setSavedMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    userLoaded && loadSavedMovies()
  }, [userLoaded])

  function loadSavedMovies() {
    setIsLoading(true)
    SavedMoviesApi.getMovies()
      .then((data) => data.map((item) => mapSavedMovie(item)))
      .then((movies) => {
        setIsLoading(false)
        setSavedMovies(movies)
      })
      .catch(() => {
        setIsLoading(false)
        alert('Произошла ошибка загрузки списка сохраненных видео')
      })
  }

  function loadMovies() {
    const storageMovies = localStorage.getItem('movies')
    if (storageMovies) {
      setMovies(JSON.parse(storageMovies))
    } else {
      setIsLoading(true)
      MoviesApi
        .getMovies()
        .then((data) => data.map((item) => mapMovie(item)))
        .then((movies) => {
          setIsLoading(false)
          setMovies(movies)
          localStorage.setItem('movies', JSON.stringify(movies))
        })
        .catch(() => {
          setIsLoading(false)
          alert('Произошла ошибка загрузки списка видео')
        })
    }
  }

  const handleSideBarState = () => {
    setIsSideBarOpened(!isSideBarOpened)
  };

  function setFilters({ searchRequest, isShort }) {
    searchRequest !== undefined && setSearchRequest(searchRequest)
    isShort !== undefined && setIsShort(isShort)
    searchRequest && loadMovies()
  }

  function updateSaved(movie, isSave) {
    if (isSave) {
      setSavedMovies([...savedMovies, { ...movie, id: movie._id }])
    } else {
      setSavedMovies(savedMovies.filter((m) => m.id !== movie.id))
    }
  }

  const filteredMovies = movies
    .filter((movie) =>
      filterMovies({ movie, searchRequest, isShort })
    )

  return (
    <section className="movies">
      <div className="header__movies">
        <Link to="/" className="header__logo_movies" />
        <button type="button" onClick={handleSideBarState} className="header__sidebar-button" />
        <HeaderNavigationAccount />
      </div>

      <SearchForm
        onUpdateFilters={setFilters}
        isShort={isShort}
        searchRequest={searchRequest}
      />
      <MoviesCardList
        movies={filteredMovies.slice(0, initStartCount + countPerPage * page)}
        savedMovies={savedMovies}
        updateSaved={updateSaved}
        searchRequest={searchRequest}
        isLoading={isLoading}
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

export default Movies