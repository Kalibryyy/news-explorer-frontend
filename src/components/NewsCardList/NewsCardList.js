import React from "react";
import "./NewsCardList.css";
import { NewsCard, Button } from "../index";

const NewsCardList = ({ cards, title, doNeedBtn, main, onSave }) => {
  const [quantity, setQuantity] = React.useState(3);
  const cardsToRender = cards.slice(0, quantity);

  const [width, setWidth] = React.useState(window.innerWidth);

  console.log(cards);

  React.useEffect(() => {
    let cleanupFunction = false;
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    return () => cleanupFunction = true;
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

  function showMoreCards() {
    setQuantity(quantity + 3)
  }

  function handleSave() {
    console.log(handleSave) //MainApi.createArticle.then(res => пройти циклом по cards проверить совпадает ли url карточки с res.url
    // если они не совпадают - карточка не меняется, если совпали, меняю cards.item на res.item isBookmarkMarked (в локалсторидж?)
  }

  return (
    <div className="news-cards__container">
      <h2 className="news-cards__title">{title}</h2>
      <ul className="news-cards__list">
        {cards.slice(0, quantity).map((item) => (
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
            // keyword={item.keyword}
            link={item.url}
            main={main}
            onCardSave={handleSave}
          />
        ))}
      </ul>
      {doNeedBtn && <Button place={"search-results"} text={"Показать еще"} color={"white"} handleBtnClick={showMoreCards} />}
    </div>
  );
};

export default NewsCardList;
