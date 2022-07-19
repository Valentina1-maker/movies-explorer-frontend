class MoviesApi {
    constructor({ url }) {
      this._url = url;
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
  url: process.env.REACT_APP_GLOBAL_API,
})