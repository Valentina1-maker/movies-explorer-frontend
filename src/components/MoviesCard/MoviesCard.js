import './MoviesCard.css';
import { useState, useEffect } from "react";

function MoviesCard({
  movie = {},
  savedMovies = [],
  onDeleteMovie,
  onSaveMovie,
  inSavedPage
}) {
  const [savedId, setSavedId] = useState('');

  useEffect(() => {
    if (!savedMovies.length) return

    checkIsSaved()
  }, [savedMovies])

  function checkIsSaved() {
    const saved = savedMovies.find(savedMovie => savedMovie.movieId === movie.movieId)

    saved ? setSavedId(saved.id) : setSavedId('')
  }

  function renderButton() {
    const DeleteButtonInSavedPage = (
      <button
        onClick={() => onDeleteMovie(savedId)}
        className="card__delete-button"
      />
    )

    const DeleteButton = (
      <button
        onClick={() => onDeleteMovie(savedId)}
        className="card__like-button card__like-button_liked"
      />
    )

    //при лайке на активную кнопку лайк удаляется и наоборот
    const SaveButton = (
      <button
        type="button"
        onClick={() => onSaveMovie(movie)}
        className="card__like-button"
      />
    )

    if (savedId) {
      return inSavedPage ? DeleteButtonInSavedPage : DeleteButton
    } else {
      return SaveButton
    }
  }

  if (inSavedPage && !savedId) {
    return ''
  } else {
    return (
      <div className="card">
        <a href={movie.trailerLink} target="_blank" rel="noreferrer">
          <img className="card__picture" src={movie.image} alt="Здесь изображение фильма"  />
        </a>

        <div className="card__description">
          <h2 className="card__title">
            {movie.nameRU}
          </h2>
          { renderButton() }
        </div>

        <p className="card__duration">
          {
            movie.duration > 60
              ? `${Math.floor(movie.duration / 60)} ч ${movie.duration % 60 ? `${movie.duration % 60} мин` : ''}`
              : `${movie.duration} мин`
          }
        </p>
      </div>
    );
  }
}

export default MoviesCard;