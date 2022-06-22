import './MoviesCard.css';
import foto from "../../images/image-film.png"

function MoviesCard() {
    return (
        <div className="card">
            <img className="card__picture" alt="" src={foto} />
            <div className="card__description">
                <h2 className="card__title">Бег - это свобода</h2>
                <button className="card__like-button card__like-button_liked" />
                <button className="card__like-button" />
                <button className="card__delete-button" />
                <p className="card__duration">1ч42мин</p>
            </div>
        </div>
    );
}

export default MoviesCard;