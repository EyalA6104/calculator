function add(a, b) {
    return a + b;
};
console.log(add(5, 8));

function subtract(a, b) {
    return a - b;
};
console.log(subtract(6, 2));

function multiply(a, b) {
    return a * b;
};
console.log(multiply(5, 5));

function divide(a, b) {
    return a / b;
};
console.log(divide(8, 4));

let firstNum = null
let operator = null
let secondNum = null

function operate (operator, a, b) {
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "x") {
        return multiply(a, b);
    } else if (operator === "÷") {
        return divide(a, b);
    } else {
        return "Error";
    }
};
console.log(operate("x", 6, 2));

let displayValue = "";
const digitButtons = document.querySelectorAll(".digit");
const display = document.querySelector("#display");
const operatorButtons = document.querySelectorAll(".operator");


digitButtons.forEach((digitButton) => {
  digitButton.addEventListener("click", () => {
    displayValue += digitButton.textContent;
    display.textContent = displayValue;
  });
});

operatorButtons.forEach((operatorButton) => {
  operatorButton.addEventListener("click", () => {
    if (displayValue === "") {
      operator = operatorButton.textContent;
      console.log("Updated operator to:", operator);
      return;
    }

    if (firstNum !== null && operator !== null) {
      secondNum = Number(displayValue);
      const result = operate(operator, firstNum, secondNum);
      display.textContent = result;
      firstNum = result;
      displayValue = "";
    } else {
      firstNum = Number(displayValue);
      displayValue = "";
    }

    operator = operatorButton.textContent;
    console.log("Operator set to:", operator);
  });
});


const equalButton = document.querySelector(".equal");

equalButton.addEventListener("click", () => {
  if (firstNum !== null && operator !== null && displayValue !== "") {
    secondNum = Number(displayValue);
    const result = operate(operator, firstNum, secondNum);
    display.textContent = result;
    displayValue = result.toString();
    firstNum = null;
    operator = null;
    secondNum = null;
  }
});

const clearButton = document.querySelector(".clear");

clearButton.addEventListener("click", () => {
    firstNum = null;
    secondNum = null;
    operator = null;
    displayValue = "";
    display.textContent = "";
})


