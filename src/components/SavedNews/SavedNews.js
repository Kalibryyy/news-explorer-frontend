import React from 'react';
import './SavedNews.css';
import { NewsCardList, SavedNewsHeader } from '../index';

function SavedNews({ cards }) {

    return (
      <main className="saved-news">
        <SavedNewsHeader />
        <NewsCardList cards={cards} title={''} doNeedBtn={false} cardsNumber={5} />
      </main>
    );
  }

  export default SavedNews;
