import React from "react";
import "./Bookmark.css";

function Bookmark() {
// Нужно поменять значение стейта на true чтобы увидеть нажатую закладку
const [isBookmarkActive, setIsBookmarkActive] = React.useState(1);

  return (
    <div className="bookmark">
      <button type="button" className={isBookmarkActive ? `bookmark__icon bookmark__icon_active` : `bookmark__icon`}></button>
    </div>
  );
}

export default Bookmark;
