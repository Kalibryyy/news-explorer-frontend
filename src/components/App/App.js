import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import { Main, SavedNews, PopupRegister, Header, Footer, PopupLogin, InfoToolTip, } from "../index";
import newsApi from '../../utils/NewsApi';
import { fromDate, tillDate } from '../../utils/utils';

function App() {
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = React.useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
  const [isAnyPopupOpen, setIsAnyPopupOpen] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  console.log('cards', cards)

  React.useEffect(() => {
    const articles = JSON.parse(localStorage.getItem('cardsArray'));
    console.log('useEffect', articles)
    if (articles !== null) {
      setCards(articles);
    }
  }, []);

  function handleShowResults({ query }) {
    setIsLoading(true);
    newsApi
      .getArticles({ fromDate, tillDate, query })
      .then((cardsArray) => {
        if (cardsArray.articles) {
          localStorage.setItem('cardsArray', JSON.stringify(cardsArray.articles));
        }
        setCards(cardsArray.articles);
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  React.useEffect(() => {
    if (isRegisterPopupOpen || isLoginPopupOpen || isInfoTooltipOpen) {
      setIsAnyPopupOpen(true);
    } else {
      setIsAnyPopupOpen(false);
    }
  }, [isRegisterPopupOpen, isLoginPopupOpen, isInfoTooltipOpen])

  function handleRegisterClick() {
    setIsRegisterPopupOpen(!isRegisterPopupOpen);
    setIsLoginPopupOpen(false);
    setIsInfoTooltipOpen(false);
  }

  function handleLoginClick() {
    setIsLoginPopupOpen(!isLoginPopupOpen);
    setIsRegisterPopupOpen(false);
    setIsInfoTooltipOpen(false);
  }

  function handleOpenInfoTooltip() {
    setIsInfoTooltipOpen(!isInfoTooltipOpen);
    setIsRegisterPopupOpen(false);
    setIsLoginPopupOpen(false);
  }

  function closeAllPopups() {
    setIsRegisterPopupOpen(false);
    setIsLoginPopupOpen(false);
    setIsInfoTooltipOpen(false);
  }

  React.useEffect(() => {
    if (isRegisterPopupOpen || isLoginPopupOpen || isInfoTooltipOpen) {
      const onKeypress = (e) => {
        if (e.key === "Escape") {
          closeAllPopups();
        }
      };

      document.addEventListener("keydown", onKeypress);

      return () => {
        document.removeEventListener("keydown", onKeypress);
      };
    }
  }, [isRegisterPopupOpen, isLoginPopupOpen, isInfoTooltipOpen]);

  return (
    <div className="page">
      <Route exact path="/">
        <Header
          theme={"dark"}
          onRegister={handleRegisterClick}
          onOpenPopupClick={closeAllPopups}
          isAnyPopupOpen={isAnyPopupOpen}
        />
        <Main onFormSubmit={handleShowResults} cards={cards} isLoading={isLoading} />
      </Route>
      <Route path="/saved-news">
        <Header
          onRegister={handleRegisterClick}
          onOpenPopupClick={closeAllPopups}
          isAnyPopupOpen={isAnyPopupOpen}
        />
        <SavedNews />
      </Route>
      <Footer />
      <PopupRegister
        onPopupClick={handleLoginClick}
        isOpen={isRegisterPopupOpen}
        onClose={closeAllPopups}
        title={"Регистрация"}
        onOpenInfoTooltip={handleOpenInfoTooltip}
      />
      <PopupLogin
        isOpen={isLoginPopupOpen}
        onClose={closeAllPopups}
        title={"Вход"}
        onPopupClick={handleRegisterClick}
      />
      <InfoToolTip
        isOpen={isInfoTooltipOpen}
        onClose={closeAllPopups}
        title={"Пользователь успешно зарегистрирован!"}
        onPopupClick={handleLoginClick}
      />
    </div>
  );
}

export default App;
