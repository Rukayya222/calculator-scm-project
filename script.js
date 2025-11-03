// Commit 3: Implemented JavaScript logic for calculator
const display = document.getElementById("display");

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    // Commit 4: Added percentage (%) functionality
    display.value = eval(display.value.replace('%', '/100'));
  } catch (error) {
    display.value = "Error";
  }
}
