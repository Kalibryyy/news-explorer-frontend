import React from "react";
import './Header.css';
import arrowImage from '../../images/arrow.svg';
import menuIcon from '../../images/menu-icon.svg'
import closeIcon from '../../images/close-icon.svg';

function Header() {
  // Нужно поменять значение стейта на true чтобы увидеть тёмную тему
  const [isWhite, setIsWhite] = React.useState(1);
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener(
      'resize',
        () => {
            setWidth(window.innerWidth)
        },
    );
  }, []);

  const [isMenuOpened, setIsMenuOpened] = React.useState(false);

  function openMenu() {
    setIsMenuOpened(!isMenuOpened);
  }

  const Wrapper = ({ children }) => width <= 320 ? <div className={isMenuOpened ? 'header__menu-background' : ''}>{children}</div> : children;

  return (
    <header className={isWhite ? `header header_color_white` : `header`}>
      {isMenuOpened && <div className="header__overlay"></div>}
      <Wrapper>
      <div className="logo__container">
        <div className={isWhite ? `logo logo_color_white` : `logo logo_color_black`}></div>
        <img className="header__icon" src={isMenuOpened ? closeIcon : menuIcon} onClick={openMenu} />
      </div>
      <nav>
        <ul className={isMenuOpened ? `header__list header__list_opened` : `header__list header__list_closed`}>
          <li className="header__item">
            <button className={isWhite ? `header__btn header__btn_color_white` : `header__btn header__btn_color_black`}>Главная</button>
          </li>
          <li className={isWhite ? `header__item header__item_chosen header__item_color_white` : `header__item header__item_chosen header__item_color_black`}>
            <button className={isWhite ? `header__btn header__btn_color_white` : `header__btn header__btn_color_black`}>Сохранённые статьи</button>
          </li>
          <li className="header__item">
            <button className={isWhite ? `header__btn header__btn_color_white header__btn_type_auth header__btn_type_auth_color_white` : `header__btn header__btn_type_auth header__btn_type_auth_color_black header__btn_color_black`}>
              Грета<img className="header__auth-arrow-img" src={arrowImage}/>
              </button>
          </li>
        </ul>
      </nav>
      </Wrapper>
    </header>
  );
}

export default Header;