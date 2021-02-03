import React from 'react';
import './About.css';
import authorPic from '../../images/author.png';

function About() {
    return (
      <>
        <img className="about-author__img" src={authorPic} />
        <div className="about-author__description">
          <h2 className="about-author__title">Об авторе</h2>
          <p className="about-author__text">Это блок с описанием автора проекта. Здесь следует указать, как вас зовут, чем вы занимаетесь,
          какими технологиями разработки владеете.</p>
          <p className="about-author__text">Также можно рассказать о процессе обучения в Практикуме, чему вы тут научились, и чем можете помочь потенциальным заказчикам.</p>
        </div>
      </>
    );
}

export default About;