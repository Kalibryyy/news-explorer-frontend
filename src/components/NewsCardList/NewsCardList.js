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
    console.log(quantity)
    if (quantity < 10) {
      setQuantity(quantity + 3)
    }
  }

  return (
    <div className="news-cards__container">
      <h2 className="news-cards__title">{title}</h2>
      <ul className="news-cards__list">
        {cards.slice(0, quantity).map((item) => (
          <NewsCard
            // key={item.id}
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
            // link={item.link}
            main={main}
          />
        ))}
      </ul>
      {doNeedBtn && <Button place={"search-results"} text={"Показать еще"} color={"white"} handleBtnClick={showMoreCards} />}
    </div>
  );
};

export default NewsCardList;
