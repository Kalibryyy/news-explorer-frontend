import React from 'react';
import './SavedNewsHeader.css';

function SavedNews() {
    return (
      <section className="saved-news-header">
        <div className="saved-news-header__container">
          <h1 className="saved-news-header__title">Сохранённые статьи</h1>
          <h2 className="saved-news-header__subtitle">Грета, у вас 5 сохранённых статей</h2>
          <p className="saved-news-header__text">По ключевым словам: <span className="saved-news-header__bold-text">Природа, Тайга</span> и <span className="saved-news-header__bold-text">2-м другим</span></p>
        </div>
      </section>
    );
  }

  export default SavedNews;