import './MoviesCard.css';
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"

function MoviesCard({ movie, isSaved, saveMovies, deleteSavedMovies  }) {

    const[isLiked, setIsLiked] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        checkIsSaved()
      }, [])


    const thisMovie = {
        country: movie.country || "Нет данных",
        director: movie.director || "Нет данных",
        duration: movie.duration || 0,
        year: movie.year || "Нет данных",
        description: movie.description || " ",
        image: isSaved ? movie.image : `https://api.nomoreparties.co${movie.image.url}`,
        trailer: isSaved ? movie.trailer : movie.trailerLink,
        thumbnail: isSaved ? movie.thumbnail : `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
        movieId: isSaved ? movie._id : movie.id,
        nameRU: movie.nameRU || "Нет данных",
        nameEN: movie.nameEN || "Нет данных",
    }

    function handleMovieLike() {
        setIsLiked(true) //изменяем состояние лайка
        saveMovies(thisMovie) //сохраняем данные фильма при лайке
    }

    function handleDeleteMovieLike() {
        setIsLiked(false)
        const searchMovie = saveMovies.find(item => item.movieId ===movie.id) //находит первый фильм по id пользователя
        deleteSavedMovies(searchMovie._id) //удаляет фильм по id при снятии лайка
    }

    function checkIsSaved() {
        const searchMovie = saveMovies.find(item => item.movieId ===movie.id)
        searchMovie ? setIsLiked(true) : setIsLiked(false) //если фильм сохранненый кнопка лайка активная, если нет - неактивная
    }

    function handleDeleteMovie () {
        deleteSavedMovies(movie._id)
    }

    return (
        <div className="card">
            <img className="card__picture" src={isSaved ? movie.image : `https://api.nomoreparties.co${movie.image.url}`} alt="Здесь изображение фильма"  />
            <div className="card__description">
                <h2 className="card__title">{movie.nameRU}</h2>
                {pathname === "/movies" ? 
                isLiked ? <button onClick={handleDeleteMovieLike} className="card__like-button card__like-button_liked" />  :
                <button type="button"  onClick={ handleMovieLike } className="card__like-button" />  //при лайке на активную кнопку лайк удаляется и наоборот
                : isSaved ? //если это наш фильм сохраненный кнопка удаления активна
                <button className="card__delete-button" onClick={handleDeleteMovie} /> : <></> }
            </div>
            <p className="card__duration">1ч42мин</p>
        </div>
    );
}

export default MoviesCard;