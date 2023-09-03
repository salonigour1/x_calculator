import { findByDisplayValue } from "@testing-library/react";
import React, { useState } from "react";
import "./calculator.css";

function Calculator() {
  const [opt, setOpt] = useState("");
  const [prev, setPrev] = useState("");
  const [curr, setCurr] = useState("");

  function handleOperator(operator) {
    setOpt(operator);
    setPrev(curr);
    setCurr("");
  }

  const handleNumber = (value) => {
    if (value === ".") {
      if (curr.includes(".")) {
        return;
      }
      console.log("object");
    }
    setCurr(curr + value);
  };
  const handleBack = () => {
    setCurr(curr.slice(0, curr.length - 1));
  };
  const handleClear = () => {
    setCurr("");
    setPrev("");
    setOpt("");
  };
  const handleResult = () => {
    if (opt === "+") {
      setCurr(Number(prev) + Number(curr) + "");
      setPrev("");
      setOpt("");
    }
    if (opt === "-") {
      setCurr(Number(prev) - Number(curr) + "");
      setPrev("");
      setOpt("");
    }
    if (opt === "*") {
      setCurr(Number(prev) * Number(curr) + "");
      setPrev("");
      setOpt("");
    }
    if (opt === "÷") {
      setCurr(Number(prev) / Number(curr) + "");
      setPrev("");
      setOpt("");
    }
  };

  return (
    <div className="container">
      <div className="output">
        <div className="previous-operator">
          {prev}
          {opt}
        </div>
        <div className="current-operator">{curr}</div>
      </div>
      <button className="keys clear" onClick={handleClear}>
        AC
      </button>

      <button className="keys delete" onClick={handleBack}>
        DEL
      </button>
      <button
        className="keys operation divide"
        onClick={() => handleOperator("÷")}
      >
        ÷
      </button>
      <button className="keys digi1" onClick={() => handleNumber(1)}>
        1
      </button>
      <button className="keys digi2" onClick={() => handleNumber(2)}>
        2
      </button>
      <button className="keys digi3" onClick={() => handleNumber(3)}>
        3
      </button>
      <button
        className="keys operation multiply"
        onClick={() => handleOperator("*")}
      >
        *
      </button>
      <button className="keys digi4" onClick={() => handleNumber(4)}>
        4
      </button>
      <button className="keys digi5" onClick={() => handleNumber(5)}>
        5
      </button>
      <button className="keys digi6" onClick={() => handleNumber(6)}>
        6
      </button>
      <button
        className="keys operation plus"
        onClick={() => handleOperator("+")}
      >
        +
      </button>
      <button className="keys digi7" onClick={() => handleNumber(7)}>
        7
      </button>
      <button className="keys digi8" onClick={() => handleNumber(8)}>
        8
      </button>
      <button className="keys digi9" onClick={() => handleNumber(9)}>
        9
      </button>
      <button
        className="keys operation minus"
        onClick={() => handleOperator("-")}
      >
        -
      </button>
      <button className="keys operation dot" onClick={() => handleNumber(".")}>
        .
      </button>
      <button className="keys digi0" onClick={() => handleNumber(0)}>
        0
      </button>
      <button className="keys equal" onClick={handleResult}>
        =
      </button>
    </div>
  );
}

export default Calculator;
