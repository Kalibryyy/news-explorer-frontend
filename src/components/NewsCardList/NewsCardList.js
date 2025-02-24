import React from "react";
import { useLocation } from "react-router-dom";

import "./NewsCardList.css";
import { NewsCard, Button } from "../index";

const NewsCardList = ({
  cards,
  title,
  doNeedBtn,
  main,
  onCardSave,
  onCardUnSave,
  onCardDelete,
}) => {
  const [quantity, setQuantity] = React.useState(window.innerWidth > 720 ? 3 : 2);
  const [isBtnDisabled, setIsBtnDisabled] = React.useState(false);
  const currentPath = useLocation().pathname;

  React.useEffect(() => {
    if (cards !== null && cards.length > quantity) {
      setIsBtnDisabled(false);
    } else {
      setIsBtnDisabled(true);
    }
  }, [cards, quantity]);

  React.useEffect(() => {
    if (currentPath === "/saved-news" && cards !== null) {
      setQuantity(cards.length);
    }
  }, [currentPath, cards]);

  if (!cards || cards === null) {
    return null;
  }
  const cardsToRender = cards.slice(0, quantity);

  function showMoreCards() {
    const columnsAmount = window.innerWidth > 720 ? 3 : 2;
    setQuantity(
      quantity % columnsAmount === 0
        ? quantity + columnsAmount
        : quantity +
            (columnsAmount - (quantity % columnsAmount)) +
            columnsAmount
    );
  }

  return (
    <div className="news-cards__container">
      <h2 className="news-cards__title">{title}</h2>
      <ul className="news-cards__list">
        {cardsToRender.map((item) => (
          <NewsCard
            key={item.url}
            img={item.urlToImage}
            title={item.title}
            text={item.description}
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
      {doNeedBtn && (
        <Button
          place={"search-results"}
          text={"Показать еще"}
          color={"white"}
          handleBtnClick={showMoreCards}
          isResultsBtnDisabled={isBtnDisabled}
        />
      )}
    </div>
  );
};

export default NewsCardList;
