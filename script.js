const calculator = {
  displayValue: "0",
  firstNumber: null,
  waitingForSecondNumber: false,
  operator: null,
};

const updateDisplay = () => {
  const display = document.querySelector(".screen");
  display.value = calculator.displayValue;
};
updateDisplay();

const keys = document.querySelector(".keys");
keys.addEventListener("click", (event) => {
  const { target } = event;
  if (!target.matches("button")) {
    return;
  }
  if (target.classList.contains("operator")) {
    handleOperator(target.value);
    updateDisplay();
    return;
  }
  if (target.classList.contains("decimal")) {
    inputDecimal(target.value);
    updateDisplay();
    return;
  }
  inputDigit(target.value);
  updateDisplay();
});

const inputDigit = (digit) => {
  const { displayValue, waitingForSecondNumber } = calculator;

  if (waitingForSecondNumber === true) {
    calculator.displayValue = digit;
    calculator.waitingForSecondNumber = false;
  } else {
    calculator.displayValue =
      displayValue === "0" ? digit : displayValue + digit;
  }
};

const inputDecimal = (dot) => {
  if (calculator.waitingForSecondNumber === true) {
    calculator.displayValue = "0.";
    calculator.waitingForSecondNumber = false;
    return;
  }
  if (!calculator.displayValue.includes(dot)) {
    calculator.displayValue += dot;
  }
};
