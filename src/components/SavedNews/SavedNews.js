import React from 'react';
import './SavedNews.css';
import data from '../../data/data';
import { NewsCardList, SavedNewsHeader } from '../index';

function SavedNews() {
    return (
      <main className="saved-news">
        <SavedNewsHeader />
        <NewsCardList cards={data} title={''} doNeedBtn={false} />
      </main>
    );
  }

  export default SavedNews;
