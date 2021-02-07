import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import { Main, SavedNews, PopupRegister, Header, Footer, PopupLogin, InfoToolTip } from "../index";

function App() {
  const [isRegisterPopupOpened, setIsRegisterPopupOpened] = React.useState(false);
  const [isLoginPopupOpened, setIsLoginPopupOpened] = React.useState(false);
  const [isInfoTooltipOpened, setisInfoTooltipOpened] = React.useState(false);

  function handleRegisterClick() {
    setIsRegisterPopupOpened(!isRegisterPopupOpened);
    setIsLoginPopupOpened(false);
    setisInfoTooltipOpened(false);
  }

  function handleLoginClick() {
    setIsLoginPopupOpened(!isLoginPopupOpened);
    setIsRegisterPopupOpened(false);
    setisInfoTooltipOpened(false);
  }

  function handleOpenInfoTooltip() {
    console.log(123, isInfoTooltipOpened)
    setIsRegisterPopupOpened(false);

    setIsLoginPopupOpened(false);
    setisInfoTooltipOpened(!isInfoTooltipOpened);
  }

  function closeAllPopups() {
    setIsRegisterPopupOpened(false);
    setIsLoginPopupOpened(false);
    setisInfoTooltipOpened(false);
  }

  React.useEffect(() => {
    if (isRegisterPopupOpened || isLoginPopupOpened || isInfoTooltipOpened) {
      const onKeypress = e => {
        if (e.key === "Escape") {
          closeAllPopups();
        }
      }

      document.addEventListener('keydown', onKeypress);

      return () => {
          document.removeEventListener('keydown', onKeypress);
        };

    }
  }, [isRegisterPopupOpened, isLoginPopupOpened, isInfoTooltipOpened]);

  return (
    <div className="page">
      <Route exact path="/">
        <Header theme={'dark'} onRegister={handleRegisterClick} onOpenPopupClick={closeAllPopups} isRegisterPopupOpened={isRegisterPopupOpened} isLoginPopupOpened={isLoginPopupOpened} isInfoTooltipOpened={isInfoTooltipOpened} />
        <Main />
      </Route>
      <Route path="/saved-news">
        <Header onRegister={handleRegisterClick} onOpenPopupClick={closeAllPopups} isRegisterPopupOpened={isRegisterPopupOpened} isLoginPopupOpened={isLoginPopupOpened} isInfoToolTipOpened={isInfoTooltipOpened} />
        <SavedNews />
      </Route>
      <Footer />
        <PopupRegister onPopupClick={handleLoginClick} isOpen={isRegisterPopupOpened} onClose={closeAllPopups} title={'Регистрация'} onOpenInfoTooltip={handleOpenInfoTooltip} />
        <PopupLogin isOpen={isLoginPopupOpened} onClose={closeAllPopups} title={'Вход'} onPopupClick={handleRegisterClick} />
        <InfoToolTip isOpen={isInfoTooltipOpened} onClose={closeAllPopups} title={'Пользователь успешно зарегистрирован!'} onPopupClick={handleLoginClick}/>
    </div>
  );
}

export default App;
