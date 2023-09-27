import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [theme, setTheme] = useState("1");
  const [currentValue, setCurrentValue] = useState("0");
  const [currentExpression, setCurrentExpression] = useState("");
  const [fullExpression, setFullExpression] = useState("");

  const themes = {
    1: {
      backgroundColor: "hsl(222, 26%, 31%)",
      buttonColor: "white",
      textColor: "black"
    },
    2: {
      backgroundColor: "#333",
      buttonColor: "#555",
      textColor: "white"
    },
    3: {
      backgroundColor: "blue",
      buttonColor: "lightblue",
      textColor: "white"
    }
  };

  const themeStyle = themes[theme];

  const performOperation = (operator) => {
    if (currentExpression !== "") {
      setFullExpression(
        fullExpression + " " + currentExpression + " " + operator
      );
    } else {
      setFullExpression(fullExpression + " " + currentValue + " " + operator);
    }
    setCurrentExpression("");
    setCurrentValue("0");
  };

  const handleDelete = () => {
    setCurrentValue(currentValue.slice(0, -1));
  };

  const handleReset = () => {
    setCurrentValue("0");
    setCurrentExpression("");
    setFullExpression("");
  };

  const calculateResult = () => {
    try {
      const result = eval(fullExpression + currentExpression + currentValue);
      setCurrentValue(result.toString());
      setCurrentExpression("");
      setFullExpression("");
    } catch (error) {
      setCurrentValue("Erro");
    }
  };

  return (
    <div
      className="calculator"
      style={{ backgroundColor: themeStyle.backgroundColor }}
    >
      <div className="theme-selector">
        <button onClick={() => setTheme("1")}>1</button>
        <button onClick={() => setTheme("2")}>2</button>
        <button onClick={() => setTheme("3")}>3</button>
      </div>
      <div className="display" style={{ color: themeStyle.textColor }}>
        {fullExpression !== "" ? fullExpression : null}
        {currentExpression !== "" ? currentExpression : currentValue}
      </div>
      <div className="buttons">
        <div className="row">
          <button
            className={`button-${theme}`}
            onClick={() => setCurrentValue(currentValue + "7")}
          >
            7
          </button>
          <button
            className={`button-${theme}`}
            onClick={() => setCurrentValue(currentValue + "8")}
          >
            8
          </button>
          <button
            className={`button-${theme}`}
            onClick={() => setCurrentValue(currentValue + "9")}
          >
            9
          </button>
          <button className={`button-${theme}`} onClick={() => handleDelete()}>
            <div className="C">DEL</div>
          </button>
        </div>
        <div className="row">
          <button
            className={`button-${theme}`}
            onClick={() => setCurrentValue(currentValue + "4")}
          >
            4
          </button>
          <button
            className={`button-${theme}`}
            onClick={() => setCurrentValue(currentValue + "5")}
          >
            5
          </button>
          <button
            className={`button-${theme}`}
            onClick={() => setCurrentValue(currentValue + "6")}
          >
            6
          </button>
          <button
            className={`button-${theme}`}
            onClick={() => performOperation("+")}
          >
            +
          </button>
        </div>
        <div className="row">
          <button
            className={`button-${theme}`}
            onClick={() => setCurrentValue(currentValue + "1")}
          >
            1
          </button>
          <button
            className={`button-${theme}`}
            onClick={() => setCurrentValue(currentValue + "2")}
          >
            2
          </button>
          <button
            className={`button-${theme}`}
            onClick={() => setCurrentValue(currentValue + "3")}
          >
            3
          </button>
          <button
            className={`button-${theme}`}
            onClick={() => performOperation("-")}
          >
            -
          </button>
        </div>
        <div className="row">
          <button
            className={`button-${theme}`}
            onClick={() => setCurrentValue(currentValue + ".")}
          >
            .
          </button>
          <button
            className={`button-${theme}`}
            onClick={() => setCurrentValue(currentValue + "0")}
          >
            0
          </button>
          <button
            className={`button-${theme}`}
            onClick={() => performOperation("/")}
          >
            /
          </button>
          <button
            className={`button-${theme}`}
            onClick={() => performOperation("*")}
          >
            X
          </button>
        </div>
        <div className="row">
          <button
            className={`button-${theme} custom-button-C`}
            onClick={() => handleReset()}
          >
            <div className="C">RESET</div>
          </button>
          <button
            className={`button-${theme}`}
            onClick={() => calculateResult()}
          >
            <div className="equals-button">=</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
