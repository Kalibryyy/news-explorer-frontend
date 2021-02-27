import React from 'react';
import './ModalInput.css';

function ModalInput({ title, type, name, placeholder, minLength, maxLength, onChange, value, nameError, passwordError, emailError, isEmailError }) {
// console.log(isEmailError)
// console.log(emailError)
  return (
    <>
    <h3 className="modal-input__title">{title}</h3>
    <div className="modal-input__error-container">
      <input
      type={type}
      className="modal-input"
      name={name}
      placeholder={placeholder}
      minLength={minLength}
      maxLength={maxLength}
      onChange={onChange}
      value={value}
      required
      />
      {nameError && <span className="modal-input__error">{nameError}</span>}
      {passwordError && <span className="modal-input__error">{passwordError}</span>}
      {emailError && !isEmailError && <span className="modal-input__error">{emailError}</span>}
      {isEmailError && <span className="modal-input__error">{isEmailError}</span>}
    </div>
    </>
  );
}

export default ModalInput;

