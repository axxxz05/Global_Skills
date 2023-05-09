let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";

function calculate() {
  const num1 = parseFloat(firstNumber);
  const num2 = parseFloat(secondNumber);
  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    result = num1 / num2;
  }
  document.getElementById("result").value = result;
  document.getElementById(
    "history"
  ).innerHTML = `${firstNumber} ${operator} ${secondNumber} = ${result}`;
}

function clearAll() {
  firstNumber = "";
  secondNumber = "";
  operator = "";
  result = "";
  document.getElementById("result").value = "";
}

function buttonClicked(buttonValue) {
  if (buttonValue === "C") {
    clearAll();
  } else if (
    buttonValue === "+" ||
    buttonValue === "-" ||
    buttonValue === "*" ||
    buttonValue === "/"
  ) {
    operator = buttonValue;
    document.getElementById("result").value = "";
  } else if (buttonValue === "=") {
    calculate();
  } else if (buttonValue === "del") {
    if (operator === "") {
      firstNumber = firstNumber.slice(0, -1);
      document.getElementById("result").value = firstNumber;
    } else {
      secondNumber = secondNumber.slice(0, -1);
      document.getElementById("result").value = secondNumber;
    }
  } else {
    if (operator === "") {
      firstNumber += buttonValue;
      document.getElementById("result").value = firstNumber;
    } else {
      secondNumber += buttonValue;
      document.getElementById("result").value = secondNumber;
    }
  }
}

function clickButton(e) {
  let buttonValue = e.key;
  if (buttonValue === "Enter") {
    buttonValue = "=";
  } else if (buttonValue === "Backspace") {
    buttonValue = "del";
  } else if (buttonValue === "*") {
    buttonValue = "&times;";
  } else if (buttonValue === "/") {
    buttonValue = "&divide;";
  }

  const validValues = [
    "C",
    "+",
    "-",
    "&times;",
    "&divide;",
    "del",
    "=",
    ".",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];
  if (validValues.includes(buttonValue)) {
    buttonClicked(buttonValue);
    document
      .querySelector(`button[value="${buttonValue}"]`)
      .classList.add("active");
  }
}

document.addEventListener("keydown", clickButton);

const buttons = document.querySelectorAll("button");
for (let button of buttons) {
  button.addEventListener("click", function () {
    buttonClicked(this.value);
  });
  button.addEventListener("transitionend", function () {
    this.classList.remove("active");
  });
}
