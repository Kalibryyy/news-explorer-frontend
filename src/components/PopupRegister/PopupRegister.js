import React from 'react';
import './PopupRegister.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { ModalInput, Button } from "../index";

const PopupRegister = ({ isOpen, onClose, title, openLogin, onOpenInfoTooltip }) => {
  function handleSubmit(e) {
    e.preventDefault();

    // открывается попап пользователь успешно зарегистрирован
    onOpenInfoTooltip();
  }

  return (
  <PopupWithForm isOpen={isOpen} onSubmit={handleSubmit} onClose={onClose} title={title} >
    <ModalInput title={'Email'} type={"email"} name={"email"} placeholder={"Введите почту"} minLength={"5"} maxLength={"50"} error={"Неправильный формат email"} />
    <ModalInput title={'Пароль'} type={"password"} name={"password"} placeholder={"Введите пароль"} minLength={"8"} maxLength={"5000"}/>
    <ModalInput title={'Имя'} type={"text"} name={"name"} placeholder={"Введите своё имя"} minLength={"2"} maxLength={"30"}/>
    <div className="modal__error-container">
    <span className="modal__server-error">Такой пользователь уже есть</span>
    <Button place={'popup'} text={'Зарегистрироваться'} color={'blue'} />
    </div>
    <div className="modal__auth-signin">
      <p className="modal__auth-paragraph">или <button onClick={openLogin} className="modal__auth-btn">Войти</button></p>
    </div>
  </PopupWithForm>
  );
}

export default PopupRegister;

