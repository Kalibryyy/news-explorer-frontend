import React from "react";
import { Link } from 'react-router-dom';
import './Header.css';
import arrowImage from '../../images/arrow.svg';
import arrowImageWhite from '../../images/arrow-white.svg';
import menuIcon from '../../images/menu-icon.svg'
import closeIcon from '../../images/close-icon.svg';
import closeIconBlack from '../../images/close-icon-black.svg';
import menuIconBlack from '../../images/menu-icon-black.svg';

function Header({ theme, onRegister, onOpenPopupClick, isAnyPopupOpen, }) {
  const [isWhite, setIsWhite] = React.useState(false);
  const [width, setWidth] = React.useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    let cleanupFunction = false;
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    return () => cleanupFunction = true;
  }, []);

  React.useEffect(() => {
    if (isAnyPopupOpen) {
      setIsPopupOpen(true);
    } else {
      setIsPopupOpen(false);
    }
  }, [isAnyPopupOpen])

  React.useEffect(() => {
    if (theme === 'dark') {
      setIsWhite(true);
    }
  },)

  React.useEffect(() => {
    window.addEventListener(
      'resize',
        () => {
            setWidth(window.innerWidth)
        },
    );
  }, []);

  function openMenu() {
    setIsMenuOpen(!isMenuOpen);

    if (isPopupOpen) {
      onOpenPopupClick()
      setIsMenuOpen(false);
    }
  }

  function openRegister() {
    setIsMenuOpen(false);

    if (width <= 375) {
      setIsPopupOpen(true);
    };

    onRegister();
  }

  const Wrapper = ({ children }) => width <= 375 ? isWhite ? <div className={isMenuOpen ? 'header__menu-background' : ''}>{children}</div>
  : <div className={isMenuOpen ? 'header__menu-background header__menu-background_white' : ''}>{children}</div> : children;

  return (
    <header className={isWhite ? `header header_color_white` : `header header_color_black`}>
      {isMenuOpen && <div className="header__overlay"></div>}
      <Wrapper>
      <Link to={''}  className={isWhite
      ? `logo__container logo__container_white`
      : `logo__container`}>
        <div className={isWhite
          ? `logo logo_color_white`
          : `logo logo_color_black`}></div>
        {isWhite
        ? <button type="button" className="header__menu-btn"><img className="header__icon" alt="кнопка управления меню" src={isMenuOpen || isPopupOpen ? closeIcon : menuIcon} onClick={openMenu} /></button>
        : <button type="button" className="header__menu-btn"><img className="header__icon" alt="кнопка управления меню" src={isMenuOpen || isPopupOpen ? closeIconBlack : menuIconBlack} onClick={openMenu} /></button>}
      </Link>
      <nav>
        <ul className={isMenuOpen
          ? `header__list header__list_opened`
          : `header__list header__list_closed`}>
          <li className="header__item">
          <Link to={''} className={isWhite
            ? `header__btn header__btn_color_white`
            : `header__btn header__btn_color_black`}>Главная</Link>
          </li>
          <li className={isWhite
            ? `header__item header__item_chosen header__item_color_white`
            : `header__item header__item_chosen header__item_color_black`}>
          <Link to={'saved-news'} className={isWhite
            ? `header__btn header__btn_color_white`
            : `header__btn header__btn_color_black`}>Сохранённые статьи</Link>
          </li>
          <li className="header__item">
            <button onClick={openRegister} className={isWhite ? `header__btn header__btn_color_white header__btn_type_auth header__btn_type_auth_color_white` : `header__btn header__btn_type_auth header__btn_type_auth_color_black header__btn_color_black`}>
              {isLoggedIn
              ? `Грета`
              : `Авторизоваться`}{isLoggedIn && <img className="header__auth-arrow-img" src={isWhite ? arrowImageWhite : arrowImage}/>}
            </button>
          </li>
        </ul>
      </nav>
      </Wrapper>
    </header>
  );
}

export default Header;