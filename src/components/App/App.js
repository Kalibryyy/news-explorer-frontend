import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import { Main, SavedNews, NewsCardList, PopupRegister, Header } from "../index";


function App() {
  return (
    <div className="page">
      <Route exact path="/">
        <Header />
        <Main />
        <PopupRegister />
      </Route>
      <Route path="/saved-news">
        <SavedNews />
      </Route>
    </div>
  );
}

export default App;
