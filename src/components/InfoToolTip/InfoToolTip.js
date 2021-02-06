import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

const InfoToolTip = ({ isOpen, onClose, title, onPopupClick }) => {

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
  <PopupWithForm isOpen={isOpen} onSubmit={handleSubmit} onClose={onClose} title={title} text={'Войти'} onPopupClick={onPopupClick} isLoggedIn={true} />
  );
}

export default InfoToolTip;