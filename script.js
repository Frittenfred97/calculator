//declaration of global variables used to displate the display
let firstNumber = "";
let secondNumber = "";
let operator = "";
let showDisplay = "";
 
//declaration of all connections between JS and HTML | Buttons & Display
let numberButtons = document.querySelectorAll(".nmb-btn");
let operatorButton = document.querySelectorAll(".operator");
let deleteButton = document.querySelector(".delete");
let clearButton = document.querySelector(".clear");
let equalButton = document.querySelector(".equal");
let dotButton = document.querySelector(".button-15");

//
window.addEventListener("keydown", (e) => {
    if(e.key == "Enter") {
        equalButton.click();
    } else if(e.key == "Backspace") {
        deleteButton.click();
    } else if(e.key == "Delete") {
        clearButton.click();
    } else if(e.key == "+" || e.key == "-" || e.key == "/" || e.key == "*") {
        operatorButton.forEach((op) => {
            if (op.value == e.key) {
                op.click(e.value);
            };
        })
    } else if(e.key == ".") {
        dotButton.click();
    } else if(e.key == "0" || e.key == "1" || e.key == "2" || e.key == "3" || e.key == "4" || e.key == "5" || e.key == "6" || e.key == "7" || e.key == "8" || e.key == "9") {
        numberButtons.forEach((btn) => {
            if (btn.value == e.key) {
                btn.click(e.key);
            }
        })
        }
    })
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

    showDisplay = firstNumber + operator + secondNumber;
    document.getElementById("nmb").innerHTML = showDisplay;
  });
});

//Clear button to reset everything
clearButton.addEventListener("click", () => {
  dotButton.disabled = false;
  firstNumber = "";
  operator = "";
  secondNumber = "";

  showDisplay = firstNumber + operator + secondNumber;
  document.getElementById("nmb").innerHTML = showDisplay;
});

//Operator button to define the operator button
operatorButton.forEach((op) => {
  op.addEventListener("click", () => {

    if (firstNumber == "") {
        firstNumber = "0";
    }

    switch (operator) {
        case "+":
        case "-":
        case "*":
        case "/":
            if (firstNumber != "" && secondNumber != "") {
                operate();
            }
            operator = op.value;
            dotButton.disabled = false;
          break;
        default:
            dotButton.disabled = false;
            operator = op.value;
          break;
      }

    showDisplay = firstNumber + operator + secondNumber;
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
      if (secondNumber.includes(".") == false) {
        dotButton.disabled = false;
      }
      break;
    default:
      firstNumber = firstNumber.substring(0, firstNumber.length - 1);
      if (firstNumber.includes(".") == false) {
        dotButton.disabled = false;
      }
      break;
  }

  showDisplay = firstNumber + operator + secondNumber;
  document.getElementById("nmb").innerHTML = showDisplay;
});

equalButton.addEventListener("click", () => {
    operate();
});

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
    let showDisplay = firstNumber + operator + secondNumber;
    if (operator == "+") {
      add(a, b);
    } else if (operator == "-") {
      subtract(a, b);
    } else if (operator == "*") {
        multiply(a, b);
    } else {
        if (a == 0 || b == 0) {
            showDisplay = "Du kleiner Ganove!";
        } else if (isNaN(a) && isNaN(b)) {
            showDisplay = "Ohne moos nix los!";
        } else {
            divide(a, b);
        }
    }
    document.getElementById("nmb").innerHTML = showDisplay;
};