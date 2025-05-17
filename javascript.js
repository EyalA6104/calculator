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
    } else if (operator === "*") {
        return multiply(a, b);
    } else if (operator === "/") {
        return divide(a, b);
    } else {
        return "Error";
    }
};
console.log(operate("*", 6, 2));

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

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (displayValue === "") return; 

    firstNum = Number(displayValue);
    operator = button.textContent;
    displayValue = "";
  });
});


