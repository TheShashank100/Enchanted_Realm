import { Link } from "react-router-dom";
import "./Calc.css";
import React, { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  // handle changes in num1 input
  const handleNum1Change = (event) => {
    setNum1(parseInt(event.target.value));
  };

  // handle changes in num2 input
  const handleNum2Change = (event) => {
    setNum2(parseInt(event.target.value));
  };

  // handle addition button click
  const handleAddition = () => {
    setResult(num1 + num2);
  };

  // handle subtraction button click
  const handleSubtraction = () => {
    setResult(num1 - num2);
  };

  // handle multiplication button click
  const handleMultiplication = () => {
    setResult(num1 * num2);
  };

  // handle division button click
  const handleDivision = () => {
    if (num2 === 0) {
      setResult("Cannot divide by zero");
    } else {
      setResult(num1 / num2);
    }
  };

  const handleClear = () => {
    setNum1(0);
    setNum2(0);
    setResult(0);
  };

  return (
    <div className="calculator">
      <div className="center">
        <Link to="/" className="text-decor">
          <div className="zoom1">
            <h1 id="color">Calculator</h1>
          </div>
        </Link>
      </div>
      <div className="input-section">
        <input
          type="text"
          pattern="[0-9]*"
          value={num1}
          onChange={handleNum1Change}
          placeholder="Enter a number"
          className="input-field"
        />
        <input
          type="text"
          pattern="[0-9]*"
          value={num2}
          onChange={handleNum2Change}
          placeholder="Enter a number"
          className="input-field"
        />
      </div>
      <div className="button-section">
        <button className="operation-btn" onClick={handleAddition}>
          +
        </button>
        <button className="operation-btn" onClick={handleSubtraction}>
          -
        </button>
        <button className="operation-btn" onClick={handleMultiplication}>
          X
        </button>
        <button className="operation-btn" onClick={handleDivision}>
          /
        </button>
        <button className="clear-btn" onClick={handleClear}>
          Clear
        </button>
      </div>
      <p id="calc-color">Result: {result}</p>
    </div>
  );
}

export default Calculator;
