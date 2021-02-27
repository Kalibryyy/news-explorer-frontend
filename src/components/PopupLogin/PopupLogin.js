import React from 'react';
import './PopupLogin.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { ModalInput, Button } from "../index";
import { validators } from '../../utils/utils';

const PopupLogin = ({ isOpen, onClose, title, onPopupClick, onFormSubmit }) => {
  const [formValues, setFormValues] = React.useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = React.useState({
    email: {
      required: true,
      isEmail: true,
    },
    password: {
      required: true,
    },
  });
  const [isPasswordDirty, setIsPasswordDirty] = React.useState(false);
  const [isEmailDirty, setIsEmailDirty] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(null);
  const [emailError, setEmailError] = React.useState(null);
  const [isEmailError, setIsEmailError] = React.useState(null);

  const handleInputChange = React.useCallback(
    (e) => {
      const { name, value } = e.target;
      setFormValues((prevState) => ({ ...prevState, [name]: value }));
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

      setErrors({
        email: emailValidationResult,
        password: passwordValidationResult,
      });
    },
    [formValues, setErrors],
  );

  const { email, password, } = formValues;
  const isPasswordInvalid = Object.values(errors.password).some(Boolean);
  const isEmailInvalid = Object.values(errors.email).some(Boolean);
  const isSubmitDisabled = isPasswordInvalid || isEmailInvalid;

  React.useEffect(() => {
    if (errors.password.required && isPasswordDirty) {
      setPasswordError('Заполните, пожалуйста, это поле')
    }
    if (errors.email.required && isEmailDirty && formValues.email === '') {
      setEmailError('Заполните, пожалуйста, это поле')
    }
    if (errors.email.isEmail && isEmailDirty && formValues.email !== '') {
      setIsEmailError('Неправильный формат email')
    } else if (!errors.password.required && isPasswordDirty) {
      setPasswordError(null);
    } else if (!errors.email.isEmail && isEmailDirty) {
      console.log('setIsEmailError')
      setIsEmailError(null);
      if (!errors.email.required && isEmailDirty) {
        console.log('setEmailError')
        setEmailError(null);
      }
    } else if (isEmailError && formValues.email === '') {
      setIsEmailError(null);
    }
  }, [errors, formValues]);

  function handleSubmit(e) {
    e.preventDefault();

    onFormSubmit({
      email,
      password,
    });
  }


  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
  <PopupWithForm isOpen={isOpen} onSubmit={handleSubmit} onClose={onClose} title={title} text={'Зарегистрироваться'} onPopupClick={onPopupClick} >
    <ModalInput emailError={emailError} isEmailError={isEmailError} value={email} onChange={handleInputChange} title={'Email'} type={"email"} name={"email"} placeholder={"Введите почту"} error={"Неправильный формат email"} />
    <ModalInput passwordError={passwordError} value={password} onChange={handleInputChange} title={'Пароль'} type={"password"} name={"password"} placeholder={"Введите пароль"} />
    <div className="modal__error-container">
    <span className="modal__server-error">Такой пользователь уже есть</span>
    <Button disabled={isSubmitDisabled} place={'popup'} text={'Войти'} color={'blue'} />
    </div>
  </PopupWithForm>
  );
}

export default PopupLogin;