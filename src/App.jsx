import React, { useState } from "react";
import "./App.css";

function Display({ value }) {
  return (
    <input
      className="display"
      type="text"
      value={value}
      readOnly
    />
  );
}

function Button({ label, className = "", onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
}

export default function App() {
  // Requirement B: Initial state when app starts
  const [displayText, setDisplayText] = useState("10 Things That Require Zero Talent");


  const keyMap = {
    "1": "Being On Time",
    "2": "Making An Effort",
    "3": "Being High Energy",
    "4": "Having A Positive Attitude",
    "5": "Being Passionate",
    "6": "Using Good Body Language",
    "7": "Being Coachable",
    "8": "Doing A Little Extra",
    "9": "Being Prepared",
    "0": "Having A Strong Work Ethic",
    "NAME": "JOAQUIN MANLASTAS",
    "SUBJ": "C-PCIT9"
  };

  const handleButtonClick = (label) => {
    if (keyMap[label]) {
      setDisplayText(keyMap[label]);
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        {/* Requirement A: Full name and section at the top */}
        <h1 className="header">JOAQUIN MANLASTAS - IT3A</h1>
        
        {/* Display showing current state */}
        <Display value={displayText} />

        <div className="buttons">
          <Button label="7" onClick={() => handleButtonClick("7")} />
          <Button label="8" onClick={() => handleButtonClick("8")} />
          <Button label="9" onClick={() => handleButtonClick("9")} />

          <Button label="4" onClick={() => handleButtonClick("4")} />
          <Button label="5" onClick={() => handleButtonClick("5")} />
          <Button label="6" onClick={() => handleButtonClick("6")} />

          <Button label="1" onClick={() => handleButtonClick("1")} />
          <Button label="2" onClick={() => handleButtonClick("2")} />
          <Button label="3" onClick={() => handleButtonClick("3")} />

          <Button label="NAME" onClick={() => handleButtonClick("NAME")} />
          <Button label="0" onClick={() => handleButtonClick("0")} />
          <Button label="SUBJ" onClick={() => handleButtonClick("SUBJ")} />
        </div>
      </div>
    </div>
  );
}
