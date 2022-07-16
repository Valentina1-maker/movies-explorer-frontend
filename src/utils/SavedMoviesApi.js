class SavedMoviesApi {
    constructor({ url }) {
      this._url = url;
    }
  
    _checkResponse(res) {
      return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
    }
  
    getMovies() {
      return fetch(`${this._url}/movies`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
        .then((res) => this._checkResponse(res))
        .then((result) => result.data);
    }

    deleteMovie(movie) {
      return fetch(`${this._url}/movies/${movie.movieId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }).then((res) => this._checkResponse(res));
    }

    saveMovie(movie) {
      return fetch(`${this._url}/movies`, {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }).then((res) => this._checkResponse(res));
    }
}

export default new SavedMoviesApi({
  url: 'http://localhost:3001',
})