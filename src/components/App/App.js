import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import { Main, SavedNews, PopupRegister, Header, Footer } from "../index";

function App() {
  return (
    <div className="page">
      <Route exact path="/">
        <Header theme={'dark'}/>
        <Main />
        <Footer />
        <PopupRegister />
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
