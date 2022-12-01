import { useState } from "react";

let white = "#fff";
let gray = "#787A80";
let primary = "#17696A";

const Button = ({ buttonText }) => {
  const [buttonColor, setButtonColor] = useState(white);
  const [buttonTextColor, setButtonTextColor] = useState(gray);

  function handleColorChange(e) {
    const newButtonColor = buttonColor === white ? primary : white;
    setButtonColor(newButtonColor);
    const newButtonTextColor = buttonTextColor === gray ? white : gray;
    setButtonTextColor(newButtonTextColor);
  }

  return (
    <button
      className="subscribe__checkbox-category"
      style={{ backgroundColor: buttonColor, color: buttonTextColor }}
      onClick={handleColorChange}
    >
      {buttonText}
    </button>
  );
};

export default Button;
