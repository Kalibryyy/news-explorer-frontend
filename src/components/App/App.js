import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import { Main, SavedNews, PopupRegister, Header, Footer, PopupLogin, InfoToolTip } from "../index";

function App() {
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = React.useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);
  const [isInfoTooltipOpen, setisInfoTooltipOpen] = React.useState(false);

  function handleRegisterClick() {
    setIsRegisterPopupOpen(!isRegisterPopupOpen);
    setIsLoginPopupOpen(false);
  }

  function handleLoginClick() {
    setIsLoginPopupOpen(!isLoginPopupOpen);
    setIsRegisterPopupOpen(false);
  }

  function handleOpenInfoTooltip() {
    setisInfoTooltipOpen(!isInfoTooltipOpen);
    setIsRegisterPopupOpen(false);
  }

  function closeAllPopups() {
    setIsRegisterPopupOpen(false);
    setIsLoginPopupOpen(false);
    setisInfoTooltipOpen(false);
  }

  return (
    <div className="page">
      <Route exact path="/">
        <Header theme={'dark'} onRegister={handleRegisterClick} />
        <Main />
        <Footer />
        <PopupRegister openLogin={handleLoginClick} isOpen={isRegisterPopupOpen} onClose={closeAllPopups} title={'Регистрация'} onOpenInfoTooltip={handleOpenInfoTooltip} />
        <PopupLogin isOpen={isLoginPopupOpen} onClose={closeAllPopups} title={'Вход'} openRegister={handleRegisterClick} />
        <InfoToolTip isOpen={isInfoTooltipOpen} onClose={closeAllPopups} title={'Пользователь успешно зарегистрирован!'} />
      </Route>
      <Route path="/saved-news">
        <Header />
        <SavedNews />
        <Footer />
      </Route>
    </div>
  );
}

export default App;
