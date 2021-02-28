import React from 'react';
import './SavedNews.css';
import { NewsCardList, SavedNewsHeader } from '../index';

function SavedNews({ savedCards, onCardDelete }) {
    console.log('savedNews', savedCards)
    return (
      <main className="saved-news">
        <SavedNewsHeader cards={savedCards} />
        <NewsCardList title={''} doNeedBtn={false} cards={savedCards} showAll onCardDelete={onCardDelete} />
      </main>
    );
  }

  export default SavedNews;
