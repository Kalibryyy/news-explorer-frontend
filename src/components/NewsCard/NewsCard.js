import React from 'react';
import './NewsCard.css';
import Bookmark from '../Bookmark/Bookmark';

const NewsCard = ({ id, title, img, date, text, source }) => {

 return (
  <li className="card">
    <img className="card__img" src={img} />
    <div className="card__text-content">
      <p className="card__date">30 января 2021</p>
      <h3 className="card__title">{title}</h3>
      <p className="card__description">{text}</p>
      <cite className="card__source">{source}</cite>
    </div>
    <Bookmark />
  </li>
 );
}

export default NewsCard;