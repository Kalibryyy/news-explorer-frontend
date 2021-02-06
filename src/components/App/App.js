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
    setisInfoTooltipOpen(false);
  }
  console.log(isRegisterPopupOpen)

  function handleLoginClick() {
    setIsLoginPopupOpen(true);
    setIsRegisterPopupOpen(false);
    setisInfoTooltipOpen(false);
  }

  function handleOpenInfoTooltip() {
    setisInfoTooltipOpen(!isInfoTooltipOpen);
    setIsRegisterPopupOpen(false);
    setIsLoginPopupOpen(false);
  }

  function closeAllPopups() {
    setIsRegisterPopupOpen(false);
    setIsLoginPopupOpen(false);
    setisInfoTooltipOpen(false);
  }

  React.useEffect(() => {
    // if (isRegisterPopupOpen) {
      const onKeypress = e => {
        if (e.key === "Escape") {
          console.log(e)
          closeAllPopups();
        }
      }

      document.addEventListener('keydown', onKeypress);
    // }
  }, []);

  return (
    <div className="page">
      <Route exact path="/">
        <Header theme={'dark'} onRegister={handleRegisterClick} onOpenPopupClick={closeAllPopups} />
        <Main />
      </Route>
      <Route path="/saved-news">
        <Header onRegister={handleRegisterClick} onOpenPopupClick={closeAllPopups} />
        <SavedNews />
      </Route>
      <Footer />
        <PopupRegister onPopupClick={handleLoginClick} isOpen={isRegisterPopupOpen} onClose={closeAllPopups} title={'Регистрация'} onOpenInfoTooltip={handleOpenInfoTooltip} />
        <PopupLogin isOpen={isLoginPopupOpen} onClose={closeAllPopups} title={'Вход'} onPopupClick={handleRegisterClick} />
        <InfoToolTip isOpen={isInfoTooltipOpen} onClose={closeAllPopups} title={'Пользователь успешно зарегистрирован!'} onPopupClick={handleLoginClick}/>
    </div>
  );
}

export default App;
