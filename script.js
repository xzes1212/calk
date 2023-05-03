let outputScreen = document.getElementById("outputscreen");

function display(num) {
  outputScreen.value += num;
}
function Calculate() {
  let input = outputScreen.value;
  let regex = /(-?\d+\.?\d*)([\+\-\*\/])(-?\d+\.?\d*)/;
  let match = input.match(regex);

  if (match) {
    let operator = match[2];
    let num1 = parseFloat(match[1]);
    let num2 = parseFloat(match[3]);

    if (operator === "+") {
      outputScreen.value = num1 + num2;
    } else if (operator === "-") {
      outputScreen.value = num1 - num2;
    } else if (operator === "*") {
      outputScreen.value = num1 * num2;
    } else if (operator === "/") {
      outputScreen.value = num1 / num2;
    }
  }
}
function Clear(){
  outputScreen.value = "";
}
function del(){
  outputScreen.value = outputScreen.value
  .slice(0,-1)
}
function percent() {
  let input = outputScreen.value;
  let regex = /(-?\d+\.?\d*)([\+\-\*\/])(-?\d+\.?\d*)/;
  let match = input.match(regex);

  if (match) {
    let operator = match[2];
    let num1 = parseFloat(match[1]);
    let num2 = parseFloat(match[3]);

    if (operator === "+" || operator === "-") {
      outputScreen.value = (num1 * num2) / 100;
    } else if (operator === "*") {
      outputScreen.value = num1 * (num2 / 100);
    } else if (operator === "/") {
      outputScreen.value = num1 / (num2 / 100);
    }
  } else {
    alert("Invalid input");
  }
}



