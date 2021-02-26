import React from 'react';
import './ModalInput.css';

function ModalInput({ title, type, name, placeholder, minLength, maxLength, error, onChange, value }) {
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
      <span className="modal-input__error">{error}</span>
    </div>
    </>
  );
}

export default ModalInput;

