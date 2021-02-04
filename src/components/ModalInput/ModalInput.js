import React from 'react';
import './ModalInput.css';

function ModalInput({ title, type, name, placeholder, minLength, maxLength, error }) {
  return (
    <>
    <h3 className="modal__input-title">{title}</h3>
    <div className="modal__error-container">
      <input
      type={type}
      className="modal__input"
      name={name}
      placeholder={placeholder}
      minLength={minLength}
      maxLength={maxLength}
      required
      />
      <span className="modal__error">{error}</span>
    </div>
    </>
  );
}

export default ModalInput;

