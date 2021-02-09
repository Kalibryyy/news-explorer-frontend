import React from "react";
import "./SearchForm.css";
import Button from '../Button/Button';

function SearchForm() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="search-form">
    <input
      className="input"
      type="text"
      name="search"
      placeholder="Введите тему новости"
      minLength="2"
      maxLength="500"
      required
    />
    <Button place={'input'} text={'Искать'} color={'blue'} />
    </form>
  );
}

export default SearchForm;

