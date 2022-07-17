import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import SavedMoviesApi from '../../utils/SavedMoviesApi'

function MoviesCardList({
  movies = [],
  savedMovies = [],
  inSavedPage = false,
  updateSaved,
  searchRequest
}) {
  function onDeleteMovie(id) {
    return SavedMoviesApi.deleteMovie(id)
      .then(() => {
        updateSaved({ id }, false)
      })
      .catch(() => {
      })
  }

  function onSaveMovie(movie) {
    return SavedMoviesApi.saveMovie(movie)
      .then((savedMovie) => {
        updateSaved(savedMovie.movie, true)
      })
      .catch(() => {
      })
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
      {
        searchRequest && !movies.length
          ? <div className="cards__not-found">Ничего не найдено </div>
          : ''
      }
      <div className="cards__container">
        { renderedMovies }
      </div>
    </section>
  );
}

export default MoviesCardList;