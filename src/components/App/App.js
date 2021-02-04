import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import { Main, SavedNews, PopupRegister, Header, Footer } from "../index";

function App() {
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = React.useState(
    false,
  );

  function handleRegisterClick() {
    setIsRegisterPopupOpen(!isRegisterPopupOpen);
  }

  function closeAllPopups() {
    setIsRegisterPopupOpen(false);
  }

  return (
    <div className="page">
      <Route exact path="/">
        <Header theme={'dark'} onRegister={handleRegisterClick} />
        <Main />
        <Footer />
        <PopupRegister isOpen={isRegisterPopupOpen} onClose={closeAllPopups} title={'Регистрация'} />
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
