import React from 'react';
import './Main.css';
import SearchForm from '../SearchForm/SearchForm';
import data from "../../data/data";
import { NewsCardList, ResultsLoading, NoResults } from "../index";

function Main() {
  // Нужно поменять значение стейта на false чтобы убрать секцию с найденными карточками
  const [areThereAnyResults, setAreThereAnyResults] = React.useState(false);
    // Нужно поменять значение стейта на true чтобы увидеть спиннер (отступ сверху будет виден при скрытой секции с карточками)
  const [isLoading, setIsLoading] = React.useState(false);

    return (
      <main className="content">
      <section className="search">
        <div className="search__img"></div>
        <div className="search__container">
          <h1 className="search__title">Что творится в мире?</h1>
          <h3 className="search__subtitle">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</h3>
          <SearchForm />
        </div>
      </section>
      <section className="search-results">
        {areThereAnyResults ? <NewsCardList cards={data} /> : <NoResults />}
        {isLoading && <ResultsLoading />}
      </section>

      </main>
    );
  }

  export default Main;