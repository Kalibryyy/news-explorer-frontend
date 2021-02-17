import React from 'react';
import './Main.css';
import SearchForm from '../SearchForm/SearchForm';
import data from "../../data/data";
import { NewsCardList, ResultsLoading, NoResults, About } from "../index";

function Main({ onFormSubmit, cards }) {
  // Нужно поменять значение стейта на false чтобы убрать секцию с найденными карточками
  const [areThereAnyResults, setAreThereAnyResults] = React.useState(1);
  const [isNoResults, setIsNoResults] = React.useState(false);
    // Нужно поменять значение стейта на true чтобы увидеть спиннер (отступ сверху будет виден при скрытых секции с карточками и секции с результатом ненайденных карточек)
  const [isLoading, setIsLoading] = React.useState(false);

    return (
      <main>
      <section className="search">
        <div className="search__img"></div>
        <div className="search__container">
          <h1 className="search__title">Что творится в&nbsp;мире?</h1>
          <h3 className="search__subtitle">Находите самые свежие статьи на&nbsp;любую тему и&nbsp;сохраняйте в&nbsp;своём личном кабинете.</h3>
          <SearchForm onFormSubmit={onFormSubmit}/>
        </div>
      </section>
      <section className={(areThereAnyResults || isNoResults || isLoading) && `search-results`}>
        {areThereAnyResults && <NewsCardList cards={data} data={cards} title={'Результаты поиска'} doNeedBtn={true} main={true} cardsNumber={3} />}
        {isNoResults && <NoResults />}
        {isLoading && <ResultsLoading />}
      </section>
      <section className="about-author">
        <About />
      </section>
      </main>
    );
  }

  export default Main;