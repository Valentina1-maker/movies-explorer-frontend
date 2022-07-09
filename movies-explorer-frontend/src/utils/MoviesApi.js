class MoviesApi {
    constructor({config}) {
      this._url = config;
    }
  
    _checkResponse(res) {
      return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
    }
  
    getMovies() {
      return fetch(this._url, {
        method: "GET",
      }).then((res) => this._checkResponse(res));
    }
}

export default new MoviesApi({
  config: 'https://api.nomoreparties.co/beatfilm-movies'
}) 