import React from "react";
import "./Bookmark.css";

function Bookmark({ handleSaveMsg, isLoggedIn, onCardSave }) {
// Нужно поменять значение стейта на true чтобы увидеть как выглядит нажатая закладка
const [isBookmarkMarked, setIsBookmarkMarked] = React.useState(false);

  function handleBookmarkClick() {
    setIsBookmarkMarked(!isBookmarkMarked);
    onCardSave();
  };

  function handleShowSaveMsg() {
    handleSaveMsg();
  }

  return (
    <div className="bookmark">
      <button type="button" onClick={isLoggedIn ? handleBookmarkClick : undefined} onMouseOver={handleShowSaveMsg} onMouseLeave={handleShowSaveMsg}
      className={isBookmarkMarked ? `bookmark__icon bookmark__icon_active` : `bookmark__icon`}></button>
    </div>
  );
}

export default Bookmark;
