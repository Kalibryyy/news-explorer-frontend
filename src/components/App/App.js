import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import { Main, SavedNews, PopupRegister, Header, Footer, PopupLogin, InfoToolTip, } from "../index";
import newsApi from '../../utils/NewsApi';
import * as mainApi from '../../utils/MainApi';
import { fromDate, tillDate } from '../../utils/utils';

function App() {
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = React.useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
  const [isAnyPopupOpen, setIsAnyPopupOpen] = React.useState(false);
  const [cards, setCards] = React.useState(null);
  const [savedCards, setSavedCards] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
// при авторизации и лог ауте обнулять локал сторидж
  React.useEffect(() => {
    const articles = JSON.parse(localStorage.getItem('cardsArray'));
    if (articles !== null) {
      setCards(articles);
    }
  }, []);

  React.useEffect(() => {
    setIsLoading(true);
    mainApi
    .getUserArticles()
    .then((res) => {
      console.log(res);
      res.forEach((card) => {
        // card.link = card.url;
        // card.image = card.urlToImage;
        // card.text = card.description;
        // card.source = {};
        // card.source.name = card.source;
        // card.date = card.publishedAt;
      })
      setSavedCards(savedCards);
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      setIsLoading(false);
    });
  }, []);

  function handleShowResults({ query }) {
    setIsLoading(true);
    if (localStorage.getItem('cardsArray') !== null) {
      localStorage.removeItem('cardsArray');
    }
    newsApi
      .getArticles({ fromDate, tillDate, query })
      .then((cardsArray) => {
        cardsArray.articles.forEach((item) => {
          item.keyword = query
        })
        if (cardsArray.articles.length > 0){
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

  function handleCardSave(item) {
    console.log(item)
    mainApi
    .createArticle(item.keyword, item.title, item.description, item.publishedAt, item.source.name, item.url, item.urlToImage)
    .then((res) => {
      cards.forEach((card) => {
        if (card.url === res.link) {
          card._id = res._id;
          console.log('card', card, 'res', res)
        }
      })
      setCards(cards);
      localStorage.setItem('cardsArray', JSON.stringify(cards));
    })
    .catch((err) => console.log(`Error ${err}`));
  }

  function handleCardUnSave(item) {
    console.log(item)
    mainApi
    .deleteArticle(item._id)
    .then((res) => {
      console.log(res);
      cards.forEach((card) => {
        if (card._id === res._id) {
          card._id = null;
          console.log('card', card, 'res', res)
        }
        setCards(cards);
        localStorage.setItem('cardsArray', JSON.stringify(cards));
      })
    })
    .catch((err) => console.log(`Error ${err}`));
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
        <Main onFormSubmit={handleShowResults} cards={cards} isLoading={isLoading} setCards={setCards} onCardSave={handleCardSave} onCardUnSave={handleCardUnSave} />
      </Route>
      <Route path="/saved-news">
        <Header
          onRegister={handleRegisterClick}
          onOpenPopupClick={closeAllPopups}
          isAnyPopupOpen={isAnyPopupOpen}
        />
        {/* <SavedNews cards={savedCards} /> */}
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
