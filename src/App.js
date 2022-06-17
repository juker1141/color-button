import './App.css';
import { useState } from "react"

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [isDisabled, setIsDisabled] = useState(false);
  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  return (
    <div>
      <button
        style={{backgroundColor: buttonColor}}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={isDisabled}
      >
        Change to {newButtonColor}
      </button>
      <input
        defaultChecked={isDisabled}
        type="checkbox"
        onChange={(e) => {setIsDisabled(e.target.checked)}}
      />
    </div>
  );
}

export default App;
