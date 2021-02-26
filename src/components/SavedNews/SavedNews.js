import React from 'react';
import './SavedNews.css';
import { NewsCardList, SavedNewsHeader } from '../index';

function SavedNews({ savedCards }) {
console.log(savedCards)
    return (
      <main className="saved-news">
        <SavedNewsHeader />
        <NewsCardList title={''} doNeedBtn={false} savedCards={savedCards} />
      </main>
    );
  }

  export default SavedNews;
