import React from 'react';
import './ResultsLoading.css';
import { Preloader } from "../index";

function ResultsLoading() {
    return (
      <div className="results-loading">
        <Preloader />
        <h4 className="results-loading__text">Идет поиск новостей...</h4>
      </div>
    );
  }

  export default ResultsLoading;