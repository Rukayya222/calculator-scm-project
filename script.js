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
// Commit 4: Fixed calculation error and improved validation
function calculate() {
  try {
    // Prevent evaluation if display is empty
    if (display.value.trim() === "") {
      display.value = "";
      return;
    }

    // Evaluate safely
    display.value = eval(display.value);

    // Limit output to 5 decimal places
    if (display.value.includes(".")) {
      display.value = parseFloat(display.value).toFixed(5);
    }
  } catch (error) {
    display.value = "Error";
  }
}
