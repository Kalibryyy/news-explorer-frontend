import React from 'react';
import './Main.css';
import SearchForm from '../SearchForm/SearchForm';
import data from "../../data/data";
import { NewsCardList } from "../index";

function Main() {
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
      <NewsCardList cards={data} />
      </main>
    );
  }

  export default Main;