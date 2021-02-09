import React from 'react';
import './PopupLogin.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { ModalInput, Button } from "../index";

const PopupLogin = ({ isOpen, onClose, title, onPopupClick }) => {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
  <PopupWithForm isOpen={isOpen} onSubmit={handleSubmit} onClose={onClose} title={title} text={'Зарегистрироваться'} onPopupClick={onPopupClick} >
    <ModalInput title={'Email'} type={"email"} name={"email"} placeholder={"Введите почту"} minLength={"5"} maxLength={"50"} error={"Неправильный формат email"} />
    <ModalInput title={'Пароль'} type={"password"} name={"password"} placeholder={"Введите пароль"} minLength={"8"} maxLength={"5000"}/>
    <div className="modal__error-container">
    <span className="modal__server-error">Такой пользователь уже есть</span>
    <Button place={'popup'} text={'Войти'} color={'blue'} />
    </div>
  </PopupWithForm>
  );
}

export default PopupLogin;