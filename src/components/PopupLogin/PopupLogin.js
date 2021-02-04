import React from 'react';
import './PopupLogin.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { ModalInput, Button } from "../index";

const PopupLogin = ({ isOpen, onClose, title, openRegister }) => {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
  <PopupWithForm isOpen={isOpen} onSubmit={handleSubmit} onClose={onClose} title={title} >
    <ModalInput title={'Email'} type={"email"} name={"email"} placeholder={"Введите почту"} minLength={"5"} maxLength={"50"} error={"Неправильный формат email"} />
    <ModalInput title={'Пароль'} type={"password"} name={"password"} placeholder={"Введите пароль"} minLength={"8"} maxLength={"5000"}/>
    <div className="modal__error-container">
    <span className="modal__server-error">Такой пользователь уже есть</span>
    <Button place={'popup'} text={'Войти'} color={'blue'} />
    </div>
    <div className="modal__auth-signin">
      <p className="modal__auth-paragraph">или <button onClick={openRegister} className="modal__auth-btn">Зарегистрироваться</button></p>
    </div>
  </PopupWithForm>
  );
}

export default PopupLogin;