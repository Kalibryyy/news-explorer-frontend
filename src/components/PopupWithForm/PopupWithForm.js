import React from 'react';
import './PopupWithForm.css';
import closeIcon from '../../images/close-icon.svg';

function PopupWithForm({ isOpen, onSubmit, onClose, title, children }) {
  return (
        <div className={isOpen ? `modal modal_opened` : `modal`}>
            <div className="modal__overlay"></div>
            <form className={`modal__container`} onSubmit={onSubmit}>
                <img src={closeIcon} alt="закрывающая иконка" className="modal__close hover" onClick={onClose} />
                <h2 className="modal__title">{title}</h2>
                {children}
            </form>
        </div>
  );
}

export default PopupWithForm;




