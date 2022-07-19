import React, {useEffect, useRef, useState} from 'react'
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'

function SearchForm({
  onUpdateFilters,
}) {
  const [searchRequest, setSearchRequest] = useState('')
  const [isShort, setIsShort] = useState(false)
  const searchInputRef = useRef()

  function onSubmit(e) {
    e && e.preventDefault()
    onUpdateFilters({ searchRequest })
    localStorage.setItem('searchRequest', searchRequest)
  }

  function onChangeFilter(e) {
    const isShort = Boolean(e.target.checked)
    setIsShort(isShort)
    onUpdateFilters({ isShort })
    localStorage.setItem('isShort', String(isShort))
  }

  useEffect(() => {
    const storageIsShort = localStorage.getItem('isShort') === 'true'
    setIsShort(storageIsShort)

    const storageSearchRequest = localStorage.getItem('searchRequest')
    storageSearchRequest && setSearchRequest(storageSearchRequest)

    searchInputRef.current.value = storageSearchRequest
    onUpdateFilters({
      searchRequest: storageSearchRequest,
      isShort: storageIsShort
    })
  }, [])

  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form" onSubmit={onSubmit}>
          <label htmlFor="search" className="search__form-label">
            <input
              className="search__form-input"
              onChange={(e) => setSearchRequest(e.target.value)}
              type="text"
              id="search"
              ref={searchInputRef}
              placeholder="Фильм"
              required
            />
            <button
              className="search__button"
              type="button"
              onClick={onSubmit}
            >
              Найти
            </button>
          </label>
        </form>

        <FilterCheckbox onChange={onChangeFilter} isShort={isShort} />
      </div>
    </section>
  );
}

export default SearchForm;