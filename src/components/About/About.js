import React from "react";
import "./About.css";
import authorPic from "../../images/author.jpeg";

function About() {
  return (
    <>
      <img className="about-author__img" src={authorPic} alt="портрет автора" />
      <div className="about-author__description">
        <h2 className="about-author__title">Об авторе</h2>
        <p className="about-author__text">
          JavaScript разработчик c опытом создания веб-приложений с
          использованием React и Angular.
          Люблю решать сложные задачи, моя главная цель - создавать
          функциональные приложения, которые улучшают жизнь пользователей и
          повышают ценность для бизнеса. В настоящее время оттачиваю свои
          навыки и учусь каждый день, чтобы стать лучшим разработчиком.
        </p>
        <p className="about-author__text">
          Ищу команду с интересными проектами. В свою очередь
          предложу знания и опыт применения HTML, CSS, JavaScript, React, Redux,
          Angular, RxJS, Typescript, Node.js, Express.js., Next.js, Git, Webpack.
        </p>
      </div>
    </>
  );
}

export default About;
