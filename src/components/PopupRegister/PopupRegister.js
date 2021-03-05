import React from 'react';
import './PopupRegister.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { ModalInput, Button } from "../index";
import { validators } from '../../utils/utils';

const PopupRegister = ({ isOpen, onClose, title, onPopupClick, onRegister, message, isLoggedIn }) => {
  const [formValues, setFormValues] = React.useState({
    email: '',
    password: '',
    name: '',
  });
  const [errors, setErrors] = React.useState({
    email: {
      required: true,
      isEmail: true,
    },
    password: {
      required: true,
    },
    name: {
      required: true,
    },
  });
  const [isNameDirty, setIsNameDirty] = React.useState(false);
  const [isPasswordDirty, setIsPasswordDirty] = React.useState(false);
  const [isEmailDirty, setIsEmailDirty] = React.useState(false);
  const [nameError, setNameError] = React.useState(null);
  const [passwordError, setPasswordError] = React.useState(null);
  const [emailError, setEmailError] = React.useState(null);
  const [isEmailError, setIsEmailError] = React.useState(null);

  const handleInputChange = React.useCallback(
    (e) => {
      const { name, value } = e.target;
      setFormValues((prevState) => ({ ...prevState, [name]: value }));
      if (name === 'name') {
        setIsNameDirty(true);
      }
      if (name === 'password') {
        setIsPasswordDirty(true);
      }
      if (name === 'email') {
        setIsEmailDirty(true);
      }
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

  const { email, password, name } = formValues;
  const isNameInvalid = Object.values(errors.name).some(Boolean);
  const isPasswordInvalid = Object.values(errors.password).some(Boolean);
  const isEmailInvalid = Object.values(errors.email).some(Boolean);
  const isSubmitDisabled = isNameInvalid || isPasswordInvalid || isEmailInvalid;

  React.useEffect(() => {
    if (errors.name.required && isNameDirty) {
      setNameError('Заполните, пожалуйста, это поле');
    }
    if (errors.password.required && isPasswordDirty) {
      setPasswordError('Заполните, пожалуйста, это поле')
    }
    if (errors.email.required && isEmailDirty && formValues.email === '') {
      setEmailError('Заполните, пожалуйста, это поле')
    }
    if (errors.email.isEmail && isEmailDirty && formValues.email !== '') {
      setIsEmailError('Неправильный формат email')
    } else if (!errors.name.required && isNameDirty) {
      setNameError(null);
    } else if (!errors.password.required && isPasswordDirty) {
      setPasswordError(null);
    } else if (!errors.email.required && isEmailDirty) { // поле заполнено
      setEmailError(null);
      if (!errors.email.isEmail && isEmailDirty) {
        setIsEmailError(null);
      } else if (isEmailError && formValues.email === '') {
        setIsEmailError(null);
      }
    }
  }, [errors, formValues])

  function handleSubmit(e) {
    e.preventDefault();

    onRegister({
      name,
      email,
      password,
    });
  }

  return (
  <PopupWithForm isOpen={isOpen} onSubmit={handleSubmit} onClose={onClose} title={title} text={'Войти'} onPopupClick={onPopupClick} isLoggedIn={isLoggedIn}>
    <ModalInput emailError={emailError} isEmailError={isEmailError} title={'Email'} type={"email"} name={"email"} placeholder={"Введите почту"} onChange={handleInputChange} value={email} />
    <ModalInput passwordError={passwordError} title={'Пароль'} type={"password"} name={"password"} placeholder={"Введите пароль"} onChange={handleInputChange} value={password} />
    <ModalInput nameError={nameError} title={'Имя'} type={"text"} name={"name"} placeholder={"Введите своё имя"} onChange={handleInputChange} value={name}/>
    <div className="modal__error-container">
      <span className="modal__server-error">{message}</span>
      <Button place={'popup'} text={'Зарегистрироваться'} color={'blue'} disabled={isSubmitDisabled}/>
    </div>
  </PopupWithForm>
  );
}

export default PopupRegister;

