import React from 'react';
import './InfoToolTip.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

const InfoToolTip = ({ isOpen, onClose, title, openRegister }) => {

  function handleSubmit(e) {
    e.preventDefault();


  }

  return (
  <PopupWithForm isOpen={isOpen} onSubmit={handleSubmit} onClose={onClose} title={title} >
    <div className="modal__auth-signin">
      <p className="modal__auth-paragraph"><button onClick={openRegister} className="modal__auth-btn modal__auth-btn_left">Войти</button></p>
    </div>
  </PopupWithForm>
  );
}

export default InfoToolTip;