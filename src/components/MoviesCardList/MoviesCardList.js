import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import SavedMoviesApi from '../../utils/SavedMoviesApi'

function MoviesCardList({
  movies = [],
  savedMovies = [],
  inSavedPage = false,
}) {

  function onDeleteMovie(movie) {
    localStorage.removeItem('movies')
    return SavedMoviesApi.deleteMovie(movie)
  }

  function onSaveMovie(movie) {
    localStorage.removeItem('movies')
    return SavedMoviesApi.saveMovie(movie)
  }


  const renderedMovies = movies
    .map((movie) => (
      <MoviesCard
        movie={movie}
        key={movie.movieId}
        savedMovies={savedMovies}
        inSavedPage={inSavedPage}
        onDeleteMovie={onDeleteMovie}
        onSaveMovie={onSaveMovie}
      />
    ))

  return (
    <section className="cards">
      <div className="cards__container">
        { renderedMovies }
      </div>
    </section>
  );
}

export default MoviesCardList;