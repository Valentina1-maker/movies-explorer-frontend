import "./ButtonCardsMore.css";
import React from 'react'

function ButtonCardsMore({ onLoadMore }) {
  return (
    <section className="button__more">
      <button className="button__cards-more" onClick={onLoadMore}>
        Ещё
      </button>
    </section>
  );
}

export default ButtonCardsMore;