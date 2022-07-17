import './NotFound.css';

function NotFound() {
  
  return (
    <main className="not-found">
      <h1 className="not-found__titel">404</h1>
      <p className="not-found__message">Страница не найдена</p>
      <button  className="not-found__link">
        Назад
      </button>
    </main>
  );
}

export default NotFound;