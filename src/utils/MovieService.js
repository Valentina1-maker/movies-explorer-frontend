export const defaultMovieMap = (movie) => ({
  country: movie.country || "Нет данных",
  description: movie.description || " ",
  director: movie.director || "Нет данных",
  duration: movie.duration || 0,
  nameEN: movie.nameEN || "Нет данных",
  nameRU: movie.nameRU || "Нет данных",
  year: movie.year || "Нет данных",
})

export const mapMovie = (movie) => {
  return {
    ...defaultMovieMap(movie),
    image: `https://api.nomoreparties.co${movie.image.url}`,
    movieId: movie.id,
    thumbnail: `https://api.nomoreparties.co${movie.image?.formats?.thumbnail?.url}`,
    trailerLink: movie.trailerLink,
  }
}

export const mapSavedMovie = (movie) => {
  return {
    ...defaultMovieMap(movie),
    image: movie.image,
    movieId: movie.movieId,
    id: movie._id,
    thumbnail: movie.thumbnail,
    trailerLink: movie.trailer,
  }
}

export const getCalculatePerPageFunc = ({ setCountPerPage, setInitStartCount }) => () => {
  const width = window.innerWidth
  if (width >= 1280) {
    setCountPerPage(4)
    setInitStartCount(12)
    return
  }

  if (width >= 980) {
    setCountPerPage(3)
    setInitStartCount(9)
    return
  }

  if (width >= 728) {
    setCountPerPage(2)
    setInitStartCount(6)
    return
  }

  if (width >= 320) {
    setCountPerPage(2)
    setInitStartCount(5)
  }
}

export const filterMovies = ({ movie, searchRequest, isShort }) => {
  const foundBySearch = searchRequest
    ? movie.nameRU.toLowerCase().includes(searchRequest.toLowerCase())
    : true
  const foundByShort = isShort
    ? movie.duration <= 40
    : true

  return foundBySearch && foundByShort
}