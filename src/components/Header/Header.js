import React from "react";
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';
import arrowImage from '../../images/arrow.svg';
import arrowImageWhite from '../../images/arrow-white.svg';
import menuIcon from '../../images/menu-icon.svg'
import closeIcon from '../../images/close-icon.svg';
import closeIconBlack from '../../images/close-icon-black.svg';
import menuIconBlack from '../../images/menu-icon-black.svg';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Header({ onRegister, onSignOut, onOpenPopupClick, isAnyPopupOpen, }) {
  const [isWhite, setIsWhite] = React.useState(false);
  const [width, setWidth] = React.useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const currentUser = React.useContext(CurrentUserContext);
  const currentPath = useLocation().pathname;
  const isLoggedIn = currentUser.name;

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
    if (currentPath === '/') {
      setIsWhite(true);
    } else {
      setIsWhite(false)
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

  function handleAuthBtnClick() {
    setIsMenuOpen(false);

    if (width <= 720) {
      setIsPopupOpen(true);
    };

    isLoggedIn ? onSignOut() : onRegister();
  }

  const Wrapper = ({ children }) => width <= 720 ? isWhite ? <div className={isMenuOpen ? 'header__menu-background' : ''}>{children}</div>
  : <div className={isMenuOpen ? 'header__menu-background header__menu-background_white' : ''}>{children}</div> : children;

  return (
    <header className={isWhite ? `header header_color_white` : `header header_color_black`}>
      {isMenuOpen && <div className="header__overlay"></div>}
      <Wrapper>
      <div  className={isWhite
      ? `logo__container logo__container_white`
      : `logo__container`}>
        <NavLink exact to='/' className={isWhite
          ? `logo logo_color_white`
          : `logo logo_color_black`} />
        {isWhite
        ? <button type="button" className="header__menu-btn"><img className="header__icon" alt="кнопка управления меню" src={isMenuOpen || isPopupOpen ? closeIcon : menuIcon} onClick={openMenu} /></button>
        : <button type="button" className="header__menu-btn"><img className="header__icon" alt="кнопка управления меню" src={isMenuOpen || isPopupOpen ? closeIconBlack : menuIconBlack} onClick={openMenu} /></button>}
      </div>
      <nav>
        <ul className={isMenuOpen
          ? `header__list header__list_opened`
          : `header__list header__list_closed`}>
          <li className={isWhite
            ? `header__item header__item_chosen header__item_color_white` : `header__item`}>
          <NavLink exact to='/' className={isWhite
            ? `header__btn header__btn_color_white`
            : `header__btn header__btn_color_black`}>Главная</NavLink>
          </li>
          {isLoggedIn && <li className={!isWhite
            ? `header__item header__item_chosen header__item_color_black` : `header__item`}>
          <NavLink exact to='saved-news' className={isWhite
            ? `header__btn header__btn_color_grey`
            : `header__btn header__btn_color_black`}>Сохранённые статьи</NavLink>
          </li>}
          <li className="header__item">
            {isLoggedIn ? <button onClick={handleAuthBtnClick} className={isWhite ? `header__btn header__btn_color_white header__btn_type_auth header__btn_type_auth_color_white` : `header__btn header__btn_type_auth header__btn_type_auth_color_black header__btn_color_black`}>
           {currentUser.name}
              {isLoggedIn && <img className="header__auth-arrow-img" src={isWhite ? arrowImageWhite : arrowImage}/>}
            </button> : <button onClick={handleAuthBtnClick} className={isWhite ? `header__btn header__btn_color_white header__btn_type_auth header__btn_type_auth_color_white` : `header__btn header__btn_type_auth header__btn_type_auth_color_black header__btn_color_black`}>
           Авторизоваться
              {isLoggedIn && <img className="header__auth-arrow-img" src={isWhite ? arrowImageWhite : arrowImage}/>}
            </button>}
          </li>
        </ul>
      </nav>
      </Wrapper>
    </header>
  );
}

export default Header;