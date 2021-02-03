import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import { Main, SavedNews, NewsCardList, PopupRegister, Header, Footer } from "../index";


function App() {
  return (
    <div className="page">
      <Route exact path="/">
        <Header />
        <Main />
        <Footer />
        <PopupRegister />
      </Route>
      <Route path="/saved-news">
        <SavedNews />
      </Route>
    </div>
  );
}

export default App;
