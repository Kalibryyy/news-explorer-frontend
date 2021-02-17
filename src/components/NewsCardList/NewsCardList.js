import React from "react";
import "./NewsCardList.css";
import { NewsCard, Button } from "../index";

const NewsCardList = ({ cards, title, doNeedBtn, main, cardsNumber, data }) => {
  const [quantity, setQuantity] = React.useState(cardsNumber);

  const [width, setWidth] = React.useState(window.innerWidth);
  console.log('NewsCardList', data)

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
            link={item.link}
            main={main}
          />
        ))}
      </ul>
      {doNeedBtn && <Button place={"search-results"} text={"Показать еще"} color={"white"} handleBtnClick={showMoreCards} />}
    </div>
  );
};

export default NewsCardList;
