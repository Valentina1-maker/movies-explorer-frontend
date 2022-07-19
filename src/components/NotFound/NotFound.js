import './NotFound.css';
import React from 'react'
import {useHistory} from 'react-router-dom'

function NotFound() {
  const history = useHistory()

  return (
    <main className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__message">Страница не найдена</p>
      <button  className="not-found__link" onClick={history.goBack}>
        Назад
      </button>
    </main>
  );
}

export default NotFound;