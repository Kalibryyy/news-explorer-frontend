import React from "react";
import "./SearchForm.css";
import Button from '../Button/Button';

function SearchForm({ onFormSubmit }) {
  const input = React.useRef(null);
  const [showError, setShowError] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (input.current.value === '') {
      setShowError(true);
    } else {
      onFormSubmit({
        query: input.current.value,
      });
      setShowError(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="search-form" noValidate>
      <div className="search-form__error-container">
        <input
          ref={input}
          className="input"
          type="text"
          name="search"
          placeholder="Введите тему новости"
          minLength="2"
          maxLength="500"
          required
        />
        {showError && <span className="search-form__error">Нужно ввести ключевое слово</span>}
      </div>
    <Button place={'input'} text={'Искать'} color={'blue'} />
    </form>
  );
}

export default SearchForm;

