import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import Button from '../Button/Button';

const PopupRegister = ({ title, children }) => {
  return <PopupWithForm>
    {/* <div className="popup-register"></div> в другом компоненте другой блок */}
    <form></form>
    {/* <input /> отдельным компонентом */}
    <Button place={'popup'} text={'Зарегистрироваться'} color={'blue'} />
  </PopupWithForm>
}

export default PopupRegister;