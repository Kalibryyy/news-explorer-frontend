import React from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import Button from "../Button/Button";

const NewsCardList = ({ cards }) => {
  const [quantity, setQuantity] = React.useState(4);

  return (
    <section className="search-results">
      <div className="search-results__container">
        <h2 className="search-results__title">Результаты поиска</h2>
        <ul className="search-results__list">
          {cards.slice(0, quantity).map((item) => (
            <NewsCard
              key={item.id}
              img={item.img}
              title={item.title}
              text={item.text.substring(0, 150)}
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

// .substring(0, 186)

