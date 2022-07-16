import './MoviesCard.css';
import { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom"

function MoviesCard({
  movie = {},
  savedMovies = [],
  onDeleteMovie,
  onSaveMovie,
  inSavedPage
}) {
  const [isSaved, setIsSaved] = useState(false);
  // const { pathname } = useLocation();

  useEffect(() => {
    checkIsSaved()
  }, [])

  function handleSaveMovie() {
    onSaveMovie(movie).then((state) => {
      state && setIsSaved(true)
    })
  }

  function handleDeleteSavedMovie() {
    onDeleteMovie(movie).then((state) => {
      state && setIsSaved(false)
    })
  }

  function checkIsSaved() {
    const searchMovie = savedMovies.find(item => item.movieId === movie.movieId)
    searchMovie ? setIsSaved(true) : setIsSaved(false) //если фильм сохранненый кнопка лайка активная, если нет - неактивная
  }

  function renderButton() {
    const DeleteButtonInSavedPage = (
      <button
        onClick={handleDeleteSavedMovie}
        className="card__delete-button"
      />
    )

    const DeleteButton = (
      <button
        onClick={handleDeleteSavedMovie}
        className="card__like-button card__like-button_liked"
      />
    )

    //при лайке на активную кнопку лайк удаляется и наоборот
    const SaveButton = (
      <button
        type="button"
        onClick={handleSaveMovie}
        className="card__like-button"
      />
    )

    if (isSaved) {
      return inSavedPage ? DeleteButtonInSavedPage : DeleteButton
    } else {
      return SaveButton
    }
  }

  if (inSavedPage && !isSaved) {
    return ''
  } else {
    return (
      <div className="card">
        <img className="card__picture" src={movie.image} alt="Здесь изображение фильма"  />
        <div className="card__description">
          <h2 className="card__title">{movie.nameRU}</h2>
          { renderButton() }
        </div>
        <p className="card__duration">{movie.duration} мин</p>
      </div>
    );
  }
}

export default MoviesCard;