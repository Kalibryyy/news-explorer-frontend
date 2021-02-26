import React from 'react';
import './PopupRegister.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { ModalInput, Button } from "../index";

const validators = {
  email: {
    required: (value) => {
      return value === '';
    },
  },
  password: {
    required: (value) => {
      return value === '';
    },
  },
  name: {
    required: (value) => {
      return value === '';
    },
  }
}

const PopupRegister = ({ isOpen, onClose, title, onPopupClick, onOpenInfoTooltip }) => {
  const [formValues, setFormValues] = React.useState({
    email: '',
    password: '',
    name: '',
  });
// console.log(formValues)
  const [errors, setErrors] = React.useState({
    email: {
      required: true,
    },
    password: {
      required: true,
    },
    name: {
      required: true,
    },
  });
  const { email, password, name } = formValues;

  console.log('errors', errors.email.required)
  // , errors.password.required, errors.name.required)

  const handleInputChange = React.useCallback(
    (e) => {
      const { name, value } = e.target;
      setFormValues({ [name]: value });
    },
    [setFormValues],
  );

  React.useEffect(
    function validateInputs() {
      const { email, password, name } = formValues;

      const emailValidationResult = Object.keys(validators.email)
        .map((errorKey) => {
          const errorResult = validators.email[errorKey](email);

          return { [errorKey]: errorResult };
        })
        .reduce((acc, el) => ({ ...acc, ...el }), {});

      const passwordValidationResult = Object.keys(validators.password)
        .map((errorKey) => {
          const errorResult = validators.password[errorKey](password);

          return { [errorKey]: errorResult };
        })
        .reduce((acc, el) => ({ ...acc, ...el }), {});

      const nameValidationResult = Object.keys(validators.name)
        .map((errorKey) => {
          const errorResult = validators.name[errorKey](name);

          return { [errorKey]: errorResult };
        })
        .reduce((acc, el) => ({ ...acc, ...el }), {});

      setErrors({
        email: emailValidationResult,
        password: passwordValidationResult,
        name: nameValidationResult,
      });
    },
    [formValues, setErrors],
  );

  function handleSubmit(e) {
    e.preventDefault();

    onOpenInfoTooltip();
  }

  return (
  <PopupWithForm isOpen={isOpen} onSubmit={handleSubmit} onClose={onClose} title={title} text={'Войти'} onPopupClick={onPopupClick}>
    <ModalInput title={'Email'} type={"email"} name={"email"} placeholder={"Введите почту"} error={"Неправильный формат email"} onChange={handleInputChange} />
    <ModalInput title={'Пароль'} type={"password"} name={"password"} placeholder={"Введите пароль"} onChange={handleInputChange} />
    <ModalInput title={'Имя'} type={"text"} name={"name"} placeholder={"Введите своё имя"} onChange={handleInputChange} />
    <div className="modal__error-container">
      <span className="modal__server-error">Такой пользователь уже есть</span>
      <Button place={'popup'} text={'Зарегистрироваться'} color={'blue'} />
    </div>
  </PopupWithForm>
  );
}

export default PopupRegister;

