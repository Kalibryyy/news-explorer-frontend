import React from 'react';
import './PopupWithForm.css';
import closeIcon from '../../images/close-icon.svg';

function PopupWithForm({ isOpen, onSubmit, onClose, title, children, onPopupClick, text }) {
  // Нужно поменять значение стейта на true чтобы увидеть корректную версию InfoTooltip
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
        <div className={isOpen ? `modal modal_opened` : `modal`}>
            <div onClick={onClose} className="modal__overlay"></div>
            <form className={`modal__container`} onSubmit={onSubmit} noValidate>
                <img src={closeIcon} alt="закрывающая иконка" className="modal__close hover" onClick={onClose} />
                <h2 className="modal__title">{title}</h2>
                {children}
                <div className={isLoggedIn ? `modal__auth-signin modal__auth-signin_left` : `modal__auth-signin`}>
                  <p className="modal__auth-paragraph">{!isLoggedIn && `или `}<button onClick={onPopupClick} className="modal__auth-btn">{text}</button></p>
                </div>
            </form>
        </div>
  );
}

export default PopupWithForm;




