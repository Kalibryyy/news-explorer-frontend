import React from "react";
import "./Bookmark.css";

function Bookmark({ handleSaveMsg, isLoggedIn, onCardSave, id, onCardUnSave }) {
  // const [isBookmarkMarked, setIsBookmarkMarked] = React.useState(false);

  // React.useEffect(() => {
  //   if (id) {
  //     setIsBookmarkMarked(true);
  //   } else {
  //     setIsBookmarkMarked(false);
  //   }
  // }, []);

  function handleBookmarkClick() {
    console.log(id);
    if (!id) {
      onCardSave();
    } else {
      onCardUnSave();
    }
  }

  function handleShowSaveMsg() {
    handleSaveMsg();
  }

  return (
    <div className="bookmark">
      <button
        type="button"
        onClick={isLoggedIn ? handleBookmarkClick : undefined}
        onMouseOver={handleShowSaveMsg}
        onMouseLeave={handleShowSaveMsg}
        className={
          id
            ? `bookmark__icon bookmark__icon_active`
            : `bookmark__icon`
        }
      ></button>
    </div>
  );
}

export default Bookmark;
