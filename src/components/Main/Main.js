import React from 'react';
import './Main.css';
import SearchForm from '../SearchForm/SearchForm';
import { NewsCardList, ResultsLoading, NoResults, About } from "../index";

function Main({ onFormSubmit, cards, isLoading, input, setCards, onCardSave, onCardUnSave, message, isSearchError }) {
  const [areThereAnyResults, setAreThereAnyResults] = React.useState(false);
  const [isNoResults, setIsNoResults] = React.useState(false);

  React.useEffect(() => {
    if (cards !== null && cards.length > 0) {
      setIsNoResults(false);
      setAreThereAnyResults(true);
    } else if (cards !==null && cards.length === 0) {
      console.log('z')
      setAreThereAnyResults(false);
      setIsNoResults(true);
    } else if (cards === null) {
      setAreThereAnyResults(false);
      setIsNoResults(false);
    }
  }, [cards])

  return (
    <main>
    <section className="search">
      <div className="search__img"></div>
      <div className="search__container">
        <h1 className="search__title">Что творится в&nbsp;мире?</h1>
        <h3 className="search__subtitle">Находите самые свежие статьи на&nbsp;любую тему и&nbsp;сохраняйте в&nbsp;своём личном кабинете.</h3>
        <SearchForm onFormSubmit={onFormSubmit} input={input} />
      </div>
    </section>
    <section className={(areThereAnyResults || isNoResults || isSearchError || isLoading) ? `search-results` : undefined}>
      {!isLoading && areThereAnyResults && !isSearchError && <NewsCardList cards={cards} title={'Результаты поиска'} doNeedBtn={true} main={true} setCards={setCards} onCardSave={onCardSave} onCardUnSave={onCardUnSave} />}
      {!isLoading && isNoResults && <NoResults />}
      {!isLoading && isSearchError && <NoResults message={message} />}
      {isLoading && <ResultsLoading />}
    </section>
    <section className="about-author">
      <About />
    </section>
    </main>
  );
}

  export default Main;