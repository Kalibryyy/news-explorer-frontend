import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";
import github from "../../images/github.svg";
import linkedin from "../../images/linkedin.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__links">
        <nav className="footer__nav">
          <ul className="footer__nav-list">
            <li className="footer__nav-item">
              <Link to={""} className="footer__link">
                Главная
              </Link>
            </li>
            <li className="footer__nav-item">
              <a
                href="https://praktikum.yandex.ru/"
                target="_blank"
                className="footer__link"
              >
                Яндекс.Практикум
              </a>
            </li>
          </ul>
          <ul className="footer__nav-list">
            <li className="footer__nav-item">
              <a
                href="https://github.com/Kalibryyy"
                target="_blank"
                className="footer__link"
              >
                <img
                  className="footer__nav-image"
                  src={github}
                  alt="логотип Гитхаба"
                />
              </a>
            </li>
            <li className="footer__nav-item">
              <a
                href="https://www.linkedin.com/in/elena-strizhakova/"
                target="_blank"
                className="footer__link"
              >
                <img
                  className="footer__nav-image"
                  src={linkedin}
                  alt="логотип Линкедина"
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
