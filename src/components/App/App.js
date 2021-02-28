import React from "react";
import { Switch, Route, useHistory, Redirect } from "react-router-dom";
import "./App.css";
import { Main, SavedNews, PopupRegister, Header, Footer, PopupLogin, InfoToolTip, } from "../index";
import newsApi from '../../utils/NewsApi';
import * as mainApi from '../../utils/MainApi';
import { fromDate, tillDate } from '../../utils/utils';
import ProtectedRoute from '../ProtectedRoute';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function App() {
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = React.useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
  const [isAnyPopupOpen, setIsAnyPopupOpen] = React.useState(false);
  const [cards, setCards] = React.useState(null);
  const [savedCards, setSavedCards] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});
  const [message, setMessage] = React.useState('');
  const [isSearchError, setIsSearchError] = React.useState(false);
  const history = useHistory();

  function tokenCheck() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      mainApi
        .getUserInfo(jwt)
        .then((res) => {
          setCurrentUser(res);
          setIsLoggedIn(true);
        })
        .catch((err) => console.error(err));
    } else {
      setIsLoggedIn(false);
      setCurrentUser({});
    }
  }

  React.useEffect(() => {
    tokenCheck();
  }, []);

  //запрос первоначальных данных при логине
  React.useEffect(() => {
    // if (!isLoggedIn) history.push('/');
    const jwt = localStorage.getItem('jwt');
      if (isLoggedIn && jwt) {
        setIsLoading(true);
        mainApi
          .getAppInfo(jwt)
          .then((data) => {
            const [userData, articlesArray] = data;
            setCurrentUser(userData);
            const savedCards = articlesArray.map((card) => {
              card.url = card.link;
              card.urlToImage = card.image;
              card.description = card.text;
              card.source = {name: card.source};
              card.publishedAt = card.date;
              return card;
            })
            setSavedCards(savedCards);
          })
          .catch((err) => console.log(`Error ${err}`))
          .finally(() => {
            setIsLoading(false);
          });
      }
    }, [isLoggedIn]);

  function handleRegister({ name, email, password }) {
    setIsLoading(true);
    mainApi
      .register(name, password, email)
      .then((data) => {
        setIsInfoTooltipOpen(!isInfoTooltipOpen);
        setIsRegisterPopupOpen(false);
        setIsLoginPopupOpen(false);
        if (localStorage.getItem('cardsArray') !== null) {
          localStorage.removeItem('cardsArray');
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.statusCode === 400) {
          setMessage('некорректно заполнено одно из полей');
        } else {
          setMessage(err.message);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleLogin({ password, email }) {
    mainApi
      .authorize(password, email)
      .then((data) => {
        if (data.token) {
          localStorage.setItem('jwt', data.token);
        }
        if (localStorage.getItem('cardsArray') !== null) {
          localStorage.removeItem('cardsArray');
        }
        setIsLoggedIn(true);
        closeAllPopups();
      })
      .catch((err) => {
        if (err.statusCode === 400) {
          setMessage('некорректно заполнено одно из полей');
        } else {
          setMessage(err.message);
        }
      });
  }

  function handleLogOut() {
    setIsRegisterPopupOpen(false);
    localStorage.removeItem('jwt');
    setCurrentUser({});
    setIsLoggedIn(false);
  }

  // поиск статей
  function handleShowResults({ query }) {
    setIsLoading(true);
    if (localStorage.getItem('cardsArray') !== null) {
      localStorage.removeItem('cardsArray');
    }
    newsApi
      .getArticles({ fromDate, tillDate, query })
      .then((cardsArray) => {
        setIsSearchError(false);
        cardsArray.articles.forEach((item) => {
          item.keyword = query
        })
        if (cardsArray.articles.length > 0){
          localStorage.setItem('cardsArray', JSON.stringify(cardsArray.articles));
        }
        setCards(cardsArray.articles);
      })
      .catch((err) => {
        console.log(err);
        setIsSearchError(true);
        setMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  // запрос найденных пользователем статей из localStorage при перезагрузке
  React.useEffect(() => {
    const articles = JSON.parse(localStorage.getItem('cardsArray'));
    if (articles !== null) {
      setCards(articles);
    }
  }, []);

  function handleCardSave(item) {
    console.log(item)
    const jwt = localStorage.getItem('jwt');
    mainApi
    .createArticle(item.keyword, item.title, item.description, item.publishedAt, item.source.name, item.url, item.urlToImage, jwt)
    .then((res) => {
        const newCards = cards.map((card) => {
          if (card.url === res.link) {
             card._id = res._id;
          }
          return card;
       })
      setCards(newCards);
      localStorage.setItem('cardsArray', JSON.stringify(cards));
    })
    .catch((err) => console.log(`Error ${err}`));
  }

  function handleCardUnSave(item) {
    const jwt = localStorage.getItem('jwt');
    mainApi
    .deleteArticle(item._id, jwt)
    .then((res) => {
      console.log(res);
      const newCards = cards.map((card) => {
        if (card._id === res._id) {
          card._id = undefined;
          console.log('card', card, 'res', res)
        }
        return card;
      })
        setCards(newCards);
        localStorage.setItem('cardsArray', JSON.stringify(cards));
    })
    .catch((err) => console.log(`Error ${err}`));
  }

  function handleCardDelete(id) {
    const jwt = localStorage.getItem('jwt');
    mainApi
      .deleteArticle(id, jwt)
      .then(() => {
        const newCards = savedCards.filter((c) => c._id !== id);
        setSavedCards(newCards);
      })
      .catch((err) => console.log(`Error ${err}`));
  }

  // Попапы
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
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <Header
        onRegister={handleRegisterClick}
        onOpenPopupClick={closeAllPopups}
        isAnyPopupOpen={isAnyPopupOpen}
        isLoggedIn={isLoggedIn}
        onLogOut={handleLogOut}
      />
      <Switch>
        <Route exact path="/">
          <Main
          onFormSubmit={handleShowResults}
          cards={cards}
          isLoading={isLoading}
          setCards={setCards}
          onCardSave={handleCardSave}
          onCardUnSave={handleCardUnSave}
          message={message}
          isSearchError={isSearchError}
          />
        </Route>
        {isLoggedIn === null ? null : (
        <ProtectedRoute exact path="/saved-news"
        isLoggedIn={isLoggedIn}
        component={SavedNews}
        savedCards={savedCards}
        onCardDelete={handleCardDelete}
        />
        )}
        <Route path="">
        {isLoggedIn === null ? null : <Redirect to="/" />}
        </Route>
      </Switch>
      <Footer />
      <PopupRegister
        onPopupClick={handleLoginClick}
        isOpen={isRegisterPopupOpen}
        onClose={closeAllPopups}
        title={"Регистрация"}
        onFormSubmit={handleRegister}
        message={message}
      />
      <PopupLogin
        isOpen={isLoginPopupOpen}
        onClose={closeAllPopups}
        title={"Вход"}
        onPopupClick={handleRegisterClick}
        onFormSubmit={handleLogin}
        message={message}
      />
      <InfoToolTip
        isOpen={isInfoTooltipOpen}
        onClose={closeAllPopups}
        title={"Пользователь успешно зарегистрирован!"}
        onPopupClick={handleLoginClick}
      />
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
