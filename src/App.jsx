import css from "./App.module.css";
import Display from "./components/Display.jsx";
import Buttons from "./components/Buttons";
import { useState } from "react";

function App() {
  let [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplay = calVal + buttonText;
      setCalVal(newDisplay);
    }
  };
  return (
    <div className={css.calculator}>
      <Display calVal={calVal} />
      <Buttons onButtonClick={onButtonClick}></Buttons>
    </div>
  );
}

export default App;
