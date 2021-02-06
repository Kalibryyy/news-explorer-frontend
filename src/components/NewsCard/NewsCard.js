import React from 'react';
import './NewsCard.css';
import Bookmark from '../Bookmark/Bookmark';

const NewsCard = ({ title, img, date, text, source, keyword, main }) => {
  // нужно поменять стейт на true чтобы увидеть версию карточки на странице залогинненого пользователя
  const [isLoggedIn, setIsLoggedIn] = React.useState(1);

  const [isBookmarkChosen, setIsBookmarkChosen] = React.useState(false);

  const [isGarbageBinChosen, setIsGarbageBinChosen] = React.useState(false);

  function handleSaveMsg() {
    setIsBookmarkChosen(!isBookmarkChosen);
  }

  function handleDeleteMsg() {
    setIsGarbageBinChosen(!isGarbageBinChosen);
  }

 return (
  <li className="card">
    <img className="card__img" src={img} />
    <div className="card__text-content">
      <p className="card__date">{date}</p>
      <h3 className="card__title">{title}</h3>
      <p className="card__description">{text}</p>
      <cite className="card__source">{source}</cite>
    </div>
    {isLoggedIn && !main ? <button className="card__garbage-bin" onMouseOver={handleDeleteMsg} onMouseLeave={handleDeleteMsg} /> : <Bookmark handleSaveMsg={handleSaveMsg} isLoggedIn={isLoggedIn} />}
    {isLoggedIn && !main && <div className="card__keyword-label">{keyword}</div>}
    {isBookmarkChosen && !isLoggedIn && <div className="card__save-article">Войдите, чтобы сохранять статьи</div>}
    {isGarbageBinChosen && <div className="card__save-article">Убрать из сохранённых</div>}
  </li>
 );
}

export default NewsCard;
