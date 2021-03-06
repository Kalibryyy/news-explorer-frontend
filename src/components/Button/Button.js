import React from "react";
import "./Button.css";

function Button({ place, text, color, handleBtnClick, disabled, isResultsBtnDisabled}) {
  if (isResultsBtnDisabled && place === 'search-results' === true) { return null };

  return (
    <button type="submit" disabled={disabled} className={disabled
    ? `button button_place_${place} button_color_${color} ${'button_inactive'}`
    : `button button_place_${place} button_color_${color}`} onClick={handleBtnClick}>
      {text}
    </button>
  );
}

export default Button;