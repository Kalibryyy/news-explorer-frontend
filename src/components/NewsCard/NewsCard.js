import React from 'react';
import './NewsCard.css';
import Bookmark from '../Bookmark/Bookmark';
import { formatCardDate } from '../../utils/utils';

const NewsCard = ({ title, img, date, text, source, keyword, main, link, onCardSave }) => {
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
    <article>
      <a href={link} target="_blank" className="card__link"><img className="card__img" src={img} alt="иллюстрация статьи"/></a>
      <div className="card__text-content">
        <p className="card__date">{formatCardDate(date)}</p>
        <a href={link} target="_blank" className="card__link"><h3 className="card__title">{title}</h3></a>
        <p className="card__description">{text}</p>
        <a href={link} target="_blank" className="card__link"><cite className="card__source">{source}</cite></a>
      </div>
    </article>
    {isLoggedIn && !main
    ? <button className="card__garbage-bin" onMouseOver={handleDeleteMsg} onMouseLeave={handleDeleteMsg} />
    : <Bookmark handleSaveMsg={handleSaveMsg} isLoggedIn={isLoggedIn} onCardSave={onCardSave} />}
    {isLoggedIn && !main && <div className="card__keyword-label">{keyword}</div>}
    {isBookmarkChosen && !isLoggedIn && <div className="card__save-article">Войдите, чтобы сохранять статьи</div>}
    {isGarbageBinChosen && <div className="card__save-article">Убрать из сохранённых</div>}
  </li>
 );
}

export default NewsCard;
