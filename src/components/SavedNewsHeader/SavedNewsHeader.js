import React from 'react';
import './SavedNewsHeader.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function SavedNewsHeader({ cards }) {
  const currentUser = React.useContext(CurrentUserContext);
  const name = currentUser.name;
  const generalNumber = cards !== null && cards.length;
  const [textSavedArticles, setTextSavedArticles] = React.useState('сохранённых статей');
console.log(cards)
  React.useEffect(() => {
    if (String(generalNumber).endsWith('1') && generalNumber !== 11) {
      setTextSavedArticles('сохранённая статья');
    } else if (String(generalNumber).endsWith('2') || String(generalNumber).endsWith('3') || String(generalNumber).endsWith('4')) {
      setTextSavedArticles('сохранённые статьи')
    } else {
      setTextSavedArticles('сохранённых статей')
    }
  }, [cards]);

    return (
      <section className="saved-news-header">
        <div className="saved-news-header__container">
          <h1 className="saved-news-header__title">Сохранённые статьи</h1>
          <h2 className="saved-news-header__subtitle">{`${name}, у вас ${generalNumber ? generalNumber : ''} ${textSavedArticles}`}</h2>
          <p className="saved-news-header__text">По ключевым словам: <span className="saved-news-header__bold-text">Природа, Тайга </span>
          и <span className="saved-news-header__bold-text">2-м другим</span></p>
        </div>
      </section>
    );
  }

  export default SavedNewsHeader;