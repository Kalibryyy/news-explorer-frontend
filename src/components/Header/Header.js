import React from "react";
import { Link } from 'react-router-dom';
import './Header.css';
import arrowImage from '../../images/arrow.svg';
import arrowImageWhite from '../../images/arrow-white.svg';
import menuIcon from '../../images/menu-icon.svg'
import closeIcon from '../../images/close-icon.svg';
import closeIconBlack from '../../images/close-icon-black.svg';
import menuIconBlack from '../../images/menu-icon-black.svg';

function Header({ theme, onRegister, onOpenPopupClick }) {
  const [isWhite, setIsWhite] = React.useState(false);
  const [width, setWidth] = React.useState(window.innerWidth);
  const [isMenuOpened, setIsMenuOpened] = React.useState(false);
  const [isPopupOpened, setIsPopupOpened] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

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
    setIsMenuOpened(!isMenuOpened);
    setIsPopupOpened(!isPopupOpened);
    if (isPopupOpened) {
      onOpenPopupClick()
      setIsMenuOpened(false);
    }
  }

  function openRegister() {
    setIsMenuOpened(false);

    if (width <= 320) {
      setIsPopupOpened(true);
    };

    onRegister();
  }

  const Wrapper = ({ children }) => width <= 320 ? isWhite ? <div className={isMenuOpened ? 'header__menu-background' : ''}>{children}</div> : <div className={isMenuOpened ? 'header__menu-background header__menu-background_white' : ''}>{children}</div> : children;

  return (
    <header className={isWhite ? `header header_color_white` : `header`}>
      {isMenuOpened && <div className="header__overlay"></div>}
      <Wrapper>
      <div className={isWhite ? `logo__container logo__container_white` : `logo__container`}>
        <div className={isWhite ? `logo logo_color_white` : `logo logo_color_black`}></div>
        {isWhite ? <img className="header__icon" src={isMenuOpened || isPopupOpened ? closeIcon : menuIcon} onClick={openMenu} /> :
        <img className="header__icon" src={isMenuOpened || isPopupOpened ? closeIconBlack : menuIconBlack} onClick={openMenu} />}
      </div>
      <nav>
        <ul className={isMenuOpened ? `header__list header__list_opened` : `header__list header__list_closed`}>
          <li className="header__item">
          <Link to={''} className={isWhite ? `header__btn header__btn_color_white` : `header__btn header__btn_color_black`}>Главная</Link>
          </li>
          <li className={isWhite ? `header__item header__item_chosen header__item_color_white` : `header__item header__item_chosen header__item_color_black`}>
          <Link to={'saved-news'} className={isWhite ? `header__btn header__btn_color_white` : `header__btn header__btn_color_black`}>Сохранённые статьи</Link>
          </li>
          <li className="header__item">
            <button onClick={openRegister} className={isWhite ? `header__btn header__btn_color_white header__btn_type_auth header__btn_type_auth_color_white` : `header__btn header__btn_type_auth header__btn_type_auth_color_black header__btn_color_black`}>
              {isLoggedIn? `Грета` : `Авторизоваться`}{isLoggedIn && <img className="header__auth-arrow-img" src={isWhite ? arrowImageWhite : arrowImage}/>}
            </button>
          </li>
        </ul>
      </nav>
      </Wrapper>
    </header>
  );
}

export default Header;