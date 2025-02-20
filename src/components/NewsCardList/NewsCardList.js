import React from "react";
import "./NewsCardList.css";
import { NewsCard, Button } from "../index";
import { useLocation } from 'react-router-dom';

const NewsCardList = ({ cards, title, doNeedBtn, main, onCardSave, onCardUnSave, onCardDelete }) => {
  const [quantity, setQuantity] = React.useState(3);
  const [width, setWidth] = React.useState(window.innerWidth);
  const [isBtnDisabled, setIsBtnDisabled] = React.useState(false);
  const currentPath = useLocation().pathname;

  React.useEffect(() => {
    if (cards !== null && cards.length > quantity) {
      setIsBtnDisabled(false);
    } else {
      setIsBtnDisabled(true);
    }
  }, [quantity]);

  React.useEffect(() => {
    const resize = () => {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  let textLength;
  let titleLength;

  if (width <= 480) {
    textLength = 90;
    titleLength = 30;
  } else if (width <= 768) {
    textLength = 70;
    titleLength = 25;
  } else if (width <= 1024) {
    textLength = 90;
    titleLength = 17;
  }else if (width <= 1280) {
    textLength = 115;
    titleLength = 25;
  } else {
    textLength = 157;
    titleLength = 40;
  }

  React.useEffect(() => {
    if (currentPath === '/saved-news' && cards !== null) {
      setQuantity(cards.length);
    }
  }, [cards])

  if (!cards || cards === null) { return null }
  const cardsToRender = cards.slice(0, quantity);

  function showMoreCards() {
    setQuantity(quantity + 3)
  }

  return (
    <div className="news-cards__container">
      <h2 className="news-cards__title">{title}</h2>
      <ul className="news-cards__list">
        {cardsToRender.map((item) => (
          <NewsCard
            key={item.url}
            img={item.urlToImage}
            title={
              item.title.length > titleLength
                ? `${item.title.substring(0, titleLength)}...`
                : `${item.title.substring(0, titleLength)}`
            }
            text={
              item.description.length > textLength
                ? `${item.description.substring(0, textLength)}...`
                : `${item.description.substring(0, textLength)}`
            }
            source={item.source.name}
            date={item.publishedAt}
            keyword={item.keyword}
            link={item.url}
            main={main}
            onCardSave={main && onCardSave.bind(null, item)}
            onCardUnSave={main && onCardUnSave.bind(null, item)}
            id={item._id}
            cards={cards}
            onCardDelete={onCardDelete}
          />
        ))}
      </ul>
      {doNeedBtn && <Button place={"search-results"} text={"Показать еще"} color={"white"} handleBtnClick={showMoreCards} isResultsBtnDisabled={isBtnDisabled} />}
    </div>
  );
};

export default NewsCardList;
