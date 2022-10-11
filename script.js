//declaration of global variables used to displate the display
let firstNumber = "";
let secondNumber = "";
let operator = "";

//declaration of all connections between JS and HTML | Buttons & Display
let numberButtons = document.querySelectorAll(".nmb-btn");
let operatorButton = document.querySelectorAll(".operator");
let deleteButton = document.querySelector(".delete");
let clearButton = document.querySelector(".clear");
let equalButton = document.querySelector(".equal");
let dotButton = document.querySelector(".button-15");

//Loop through every numeral Button to store the Value and display the Input.
numberButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    switch (operator) {
      case "+":
      case "-":
      case "*":
      case "/":
        if (e.target.value == ".") {
          e.target.disabled = true;
          if (secondNumber == "") {
            secondNumber = "0";
          }
        }
        secondNumber += btn.value;
        break;
      default:
        if (e.target.value == ".") {
          e.target.disabled = true;
          if (firstNumber == "") {
            firstNumber = "0";
          }
        }
        firstNumber += btn.value;
        break;
    }

    let showDisplay = firstNumber + operator + secondNumber;
    document.getElementById("nmb").innerHTML = showDisplay;
  });
});

//Clear button to reset everything
clearButton.addEventListener("click", () => {
  dotButton.disabled = false;
  firstNumber = "";
  operator = "";
  secondNumber = "";

  let showDisplay = firstNumber + operator + secondNumber;
  document.getElementById("nmb").innerHTML = showDisplay;
});

//Operator button to define the operator button
operatorButton.forEach((op) => {
  op.addEventListener("click", () => {
    dotButton.disabled = false;
    operator = op.value;

    let showDisplay = firstNumber + operator + secondNumber;
    document.getElementById("nmb").innerHTML = showDisplay;
  });
});

//Delete button to delete the last set charakter
deleteButton.addEventListener("click", function () {
  switch (operator) {
    case "+":
    case "-":
    case "*":
    case "/":
      secondNumber = secondNumber.substring(0, secondNumber.length - 1);
      if (secondNumber.includes != ".") {
        dotButton.disabled = false;
      }
      break;
    default:
      firstNumber = firstNumber.substring(0, firstNumber.length - 1);
      if (secondNumber.includes != ".") {
        dotButton.disabled = false;
      }
      break;
  }

  let showDisplay = firstNumber + operator + secondNumber;
  document.getElementById("nmb").innerHTML = showDisplay;
});

equalButton.addEventListener("click", () => {
    operate();
} 

);

function add(a, b) {
  result = a + b;
  operator = "";
  secondNumber = "";
  firstNumber = Math.round(result);
}

function subtract(a, b) {
  result = a - b;
  operator = "";
  secondNumber = "";
  Math.round(firstNumber);
}

function multiply(a, b) {
  firstNumber = a * b;
  operator = "";
  secondNumber = "";
  Math.round(firstNumber);
}

function divide(a, b) {
  firstNumber = a / b;
  operator = "";
  secondNumber = "";
  Math.round(firstNumber);
}

function operate () {
    dotButton.disabled = false;

    a = parseFloat(firstNumber);
    b = parseFloat(secondNumber);
  
    if (operator == "+") {
      add(a, b);
    } else if (operator == "-") {
      subtract(a, b);
    } else if (operator == "*") {
      multiply(a, b);
    } else {
      divide(a, b);
    }
  
    let showDisplay = firstNumber + operator + secondNumber;
    document.getElementById("nmb").innerHTML = showDisplay;
}