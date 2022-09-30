let firstNumber = "";
let secondNumber = "";
let operator = ""; 
let numberButtons = document.querySelectorAll(".nmb-btn");
let number = 0;

function add(a, b) {
    return  a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b) {

    if (operator == "+") {
        return add(a, b);
    } else if (operator == "-") {
        return subtract(a, b); 
        } else if (operator == "*") {
            return multiply(a, b);
        } else {
            return divide(a, b);
        }
}

numberButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
         number = btn.value;
         document.getElementById("nmb").innerHTML = number;
    });
});