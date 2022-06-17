import './App.css';
import { useState } from "react";

export const replaceCamelWithSpaces = (colorName) => {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
};

function App() {
  const [buttonColor, setButtonColor] = useState("MediumVioletRed");
  const [isDisabled, setIsDisabled] = useState(false);
  const newButtonColor = buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";

  return (
    <div>
      <button
        style={{backgroundColor: isDisabled ? "gray" : buttonColor}}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={isDisabled}
      >
        Change to {newButtonColor}
      </button>
      <input
        id="disable-button-checkbox"
        defaultChecked={isDisabled}
        type="checkbox"
        onChange={(e) => {setIsDisabled(e.target.checked)}}
      />
      <label htmlFor="disable-button-checkbox">
        Disabled button
      </label>
    </div>
  );
}

export default App;
