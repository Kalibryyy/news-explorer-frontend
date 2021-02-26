import React from "react";
import "./Button.css";

function Button({ place, text, color, handleBtnClick, disabled }) {
// Нужно поменять значение стейта на true чтобы увидеть залоченную кнопку
  // const [isBtnInactive, setIsBtnInactive] = React.useState(false);

  return (
    <button type="submit" disabled={disabled} className={disabled
    ? `button button_place_${place} button_color_${color} ${'button_inactive'}`
    : `button button_place_${place} button_color_${color}`} onClick={handleBtnClick}>
      {text}
    </button>
  );
}

export default Button;