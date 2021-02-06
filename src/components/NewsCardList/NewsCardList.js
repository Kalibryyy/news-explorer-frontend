import React from "react";
import "./NewsCardList.css";
import { NewsCard, Button } from "../index";

const NewsCardList = ({ cards, title, doNeedBtn, main }) => {
  const [quantity, setQuantity] = React.useState(3);

  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    let cleanupFunction = false;
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    return () => cleanupFunction = true;
  }, []);

  let textLength;
  let titleLength;

  if (width <= 320) {
    textLength = 90;
    titleLength = 30;
  } else if (width <= 768) {
    textLength = 75;
    titleLength = 30;
  } else {
    textLength = 186;
    titleLength = 40;
  }

  function showMoreCards() {
    setQuantity(6)
  }

  return (
    <div className="news-cards__container">
      <h2 className="news-cards__title">{title}</h2>
      <ul className="news-cards__list">
        {cards.slice(0, quantity).map((item) => (
          <NewsCard
            key={item.id}
            img={item.img}
            title={
              item.title.length > titleLength
                ? `${item.title.substring(0, titleLength)}...`
                : `${item.title.substring(0, titleLength)}`
            }
            text={
              item.text.length > textLength
                ? `${item.text.substring(0, textLength)}...`
                : `${item.text.substring(0, textLength)}`
            }
            source={item.source}
            date={item.date}
            keyword={item.keyword}
            main={main}
          />
        ))}
      </ul>
      {doNeedBtn && <Button place={"search-results"} text={"Показать еще"} color={"white"} handleBtnClick={showMoreCards} />}
    </div>
  );
};

export default NewsCardList;
