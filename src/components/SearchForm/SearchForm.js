import React from "react";
import "./SearchForm.css";
import Button from '../Button/Button';

const validators = {
  search: {
    required: (value) => {
      return value === '';
    },
  },
}

function SearchForm({ onFormSubmit }) {
  const [formValues, setFormValues] = React.useState({
    search: '',
  });
  const [searchDirty, setSearchDirty] = React.useState(false);
  const [errors, setErrors] = React.useState({
    search: {
      required: true,
      minLength: true,
    },
  });
  const { search } = formValues;
  // const [showError, setShowError] = React.useState(false);

  console.log('errors', errors.search.required)

  const handleInputChange = React.useCallback(
    (e) => {
      const { name, value } = e.target;
      setFormValues({ [name]: value });
    },
    [setFormValues],
  );

  React.useEffect(
    function validateInputs() {
      const { search } = formValues;

      const searchValidationResult = Object.keys(validators.search)
        .map((errorKey) => {
          const errorResult = validators.search[errorKey](search);

          return { [errorKey]: errorResult };
        })
        .reduce((acc, el) => ({ ...acc, ...el }), {});

      setErrors({
        search: searchValidationResult,
      });
    },
    [formValues, setErrors],
  );

  function handleSubmit(e) {
    e.preventDefault();

    // if (searchDirty) {
    //   setShowError(true);
    // }

    onFormSubmit({
      query: search,
    });
  }

  function handleFocusOut(e) {
    setSearchDirty(true);
  }

console.log(searchDirty)
  return (
    <form onSubmit={handleSubmit} className="search-form">
      <div className="search-form__error-container">
        <input
          className="input"
          type="text"
          name="search"
          placeholder="Введите тему новости"
          minLength="2"
          maxLength="500"
          required
          onChange={handleInputChange}
          onBlur={handleFocusOut}
        />
        {searchDirty && errors.search.required && <span className="search-form__error">Нужно ввести ключевое слово</span>}
      </div>
    <Button place={'input'} text={'Искать'} color={'blue'} />
    </form>
  );
}

export default SearchForm;

