import React from 'react';
import './InfoToolTip.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

const InfoToolTip = ({ isOpen, onClose, title, openLogin }) => {

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
  <PopupWithForm isOpen={isOpen} onSubmit={handleSubmit} onClose={onClose} title={title} >
    <div className="modal__auth-signin modal__auth-signin_left">
      <p className="modal__auth-paragraph"><button onClick={openLogin} className="modal__auth-btn">Войти</button></p>
    </div>
  </PopupWithForm>
  );
}

export default InfoToolTip;