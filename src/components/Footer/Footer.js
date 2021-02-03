import React from 'react';
import './Footer.css';
import github from '../../images/github.svg';
import fb from '../../images/fb.svg';

function Footer() {
    return (
      <footer className="footer">
        <p className="footer__copyright">© 2020 Supersite, Powered by News API</p>
        <div className="footer__links">
          <nav className="footer__nav">
            <ul className="footer__nav-list">
              <li className="footer__nav-item">Главная</li>
              <li className="footer__nav-item">Яндекс.Практикум</li>
            </ul>
            <ul className="footer__nav-list">
              <li className="footer__nav-item"><img src={github} /></li>
              <li className="footer__nav-item"><img src={fb} /></li>
            </ul>
          </nav>
        </div>
      </footer>

    );
}

export default Footer;