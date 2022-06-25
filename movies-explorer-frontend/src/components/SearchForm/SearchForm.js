import React from "react";
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'


function SearchForm() {
    return (
        <section className="search">
          <div className="search__container">
            <form className="search__form">
              <label htmlFor="search" className="search__form-label">
                <input className="search__form-input"
                  type="text"
                  id="search"
                  placeholder="Фильм"
                  required/>
                <input className="search__button"
                type="submit"
                value="Найти"/>
              </label>
            </form>
            <FilterCheckbox/>
          </div>
        </section>
      );
    }
 
export default SearchForm;