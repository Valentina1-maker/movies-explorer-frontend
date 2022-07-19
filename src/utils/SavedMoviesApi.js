export const BASE_URL = process.env.REACT_APP_API

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

    deleteMovie(id) {
      return fetch(`${this._url}/movies/${id}`, {
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
  url: BASE_URL,
})