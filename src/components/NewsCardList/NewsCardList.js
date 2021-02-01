import React from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import Button from "../Button/Button";

const NewsCardList = ({ cards }) => {
  const [quantity, setQuantity] = React.useState(6);

  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener(
      'resize',
        () => {
            setWidth(window.innerWidth)
        },
    );
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

  return (
    <section className="search-results">
      <div className="search-results__container">
        <h2 className="search-results__title">Результаты поиска</h2>
        <ul className="search-results__list">
          {cards.slice(0, quantity).map((item) => (
            <NewsCard
              key={item.id}
              img={item.img}
              title={item.title.length > titleLength ? `${item.title.substring(0, titleLength)}...` : `${item.title.substring(0, titleLength)}`}
              text={item.text.length > textLength ? `${item.text.substring(0, textLength)}...` : `${item.text.substring(0, textLength)}`}
              source={item.source}
            />
          ))}
        </ul>
        <Button
          place={"search-results"}
          text={"Показать еще"}
          color={"white"}
        />
      </div>
    </section>
  );
};

export default NewsCardList;


