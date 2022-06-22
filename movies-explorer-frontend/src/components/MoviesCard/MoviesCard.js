import './MoviesCard.css';

function MoviesCard() {
  
  return (
    <div className="card">
      <img className="card__picture" alt="" src="" />
      <div className="card__description">
        <h2 className="card__titel">Бег - это свобода</h2>
        <button className="card__like-button card__like-button_liked" /> :
            <button className="card__like-button" />
          <button className="card__delete-button"/> 
        <p className="card__duration">6</p>
      </div>
    </div>
  );
}

export default MoviesCard;