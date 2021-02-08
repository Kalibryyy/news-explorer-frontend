import React from 'react';
import './NoResults.css';
import notFound from '../../images/not-found.png';

function NoResults() {
    return (
      <div className="no-results">
        <img className="no-results__img" alt="лупа с грустным смайликом" src={notFound} />
        <h4 className="no-results__title">Ничего не найдено</h4>
        <p className="no-results__text">К сожалению по вашему запросу ничего не найдено.</p>
      </div>
    );
  }

  export default NoResults;