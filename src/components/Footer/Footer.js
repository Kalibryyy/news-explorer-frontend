import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import github from '../../images/github.svg';
import fb from '../../images/fb.svg';

function Footer() {
    return (
      <footer className="footer">
        <div className="footer__links">
          <nav className="footer__nav">
            <ul className="footer__nav-list">
              <li className="footer__nav-item"><Link to={''} className="footer__link">Главная</Link></li>
              <li className="footer__nav-item"><a href="https://praktikum.yandex.ru/" target="_blank" className="footer__link">Яндекс.Практикум</a></li>
            </ul>
            <ul className="footer__nav-list">
              <li className="footer__nav-item"><a href="https://github.com/Kalibryyy" target="_blank" className="footer__link"><img src={github} alt="логотип Гитхаба"/></a></li>
              <li className="footer__nav-item"><a href="https://www.facebook.com/" target="_blank" className="footer__link"><img src={fb} alt="логотип Фэйсбука"/></a></li>
            </ul>
          </nav>
        </div>
      </footer>

    );
}

export default Footer;