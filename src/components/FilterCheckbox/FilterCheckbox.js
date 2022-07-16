import './FilterCheckbox.css';
import {useEffect, useRef} from 'react'

function FilterCheckbox({ onChange, isShort }) {
  const input = useRef()

  useEffect(() => {
    input.current.checked = isShort
  }, [isShort])

  return (
    <form className="checkbox">
      <label className="checkbox__form-label" htmlFor="short-film">
        <input
          ref={input}
          className="checkbox__input checkbox__input_hidden"
          name="short-film"
          type="checkbox"
          onChange={onChange}
          id="short-film"
        />
        <span className="checkbox__input checkbox__input_visible" />
        <span className="checkbox__form-text">Короткометражки</span>
      </label>
    </form>
  );
}

export default FilterCheckbox;