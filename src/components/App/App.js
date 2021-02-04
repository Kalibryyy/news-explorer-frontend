import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import { Main, SavedNews, PopupRegister, Header, Footer, PopupLogin } from "../index";

function App() {
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = React.useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);

  function handleRegisterClick() {
    setIsRegisterPopupOpen(!isRegisterPopupOpen);
    setIsLoginPopupOpen(false);
  }

  function handleLoginClick() {
    setIsLoginPopupOpen(!isLoginPopupOpen);
    setIsRegisterPopupOpen(false);
  }

  function closeAllPopups() {
    setIsRegisterPopupOpen(false);
    setIsLoginPopupOpen(false);
  }

  return (
    <div className="page">
      <Route exact path="/">
        <Header theme={'dark'} onRegister={handleRegisterClick} />
        <Main />
        <Footer />
        <PopupRegister openLogin={handleLoginClick} isOpen={isRegisterPopupOpen} onClose={closeAllPopups} title={'Регистрация'} />
        <PopupLogin isOpen={isLoginPopupOpen} onClose={closeAllPopups} title={'Вход'} openRegister={handleRegisterClick} />
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
