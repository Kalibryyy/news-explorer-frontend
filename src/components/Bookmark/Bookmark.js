import React from "react";
import "./Bookmark.css";

function Bookmark({ handleSaveMsg, isLoggedIn }) {
// Нужно поменять значение стейта на true чтобы увидеть как выглядит нажатая закладка
const [isBookmarkMarked, setIsBookmarkActive] = React.useState(false);

  function handleBookmarkClick() {
    setIsBookmarkActive(!isBookmarkMarked);
  };

  function handleShowSaveMsg() {
    handleSaveMsg();
  }

  return (
    <div className="bookmark">
      <button type="button" onClick={handleBookmarkClick} onMouseOver={handleShowSaveMsg} onMouseLeave={handleShowSaveMsg} className={isBookmarkMarked && isLoggedIn ? `bookmark__icon bookmark__icon_active` : `bookmark__icon`}></button>
    </div>
  );
}

export default Bookmark;
