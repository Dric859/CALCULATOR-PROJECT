const display = document.getElementById("display");
const historyDisplay = document.getElementById("history");

let currentInput = "";

// Add number/operator
function append(value) {

    const operators = "+-*/";
    const last = currentInput.slice(-1);

    if (
        operators.includes(last) &&
        operators.includes(value)
    ) {
        return;
    }

    currentInput += value;
    display.value = currentInput;
}

// Clear everything
function clearDisplay() {
    currentInput = "";
    display.value = "";
    historyDisplay.textContent = "";
}

// Delete one character
function backspace() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
}

// Calculate answer
function calculate() {

    if (!currentInput) return;

    try {

        // Allow only safe characters
        if (!/^[0-9+\-*/(). ]+$/.test(currentInput)) {
            throw new Error();
        }

        const expression = currentInput;
        const result = Function(
            '"use strict"; return (' + expression + ')'
        )();

        historyDisplay.textContent =
            expression + " = " + result;

        currentInput = String(result);
        display.value = currentInput;

    } catch {

        display.value = "Error";
        currentInput = "";
    }
}

/*
---------------------------------
Keyboard Support
---------------------------------
*/

document.addEventListener("keydown", (event) => {

    const key = event.key;

    if (!isNaN(key)) {
        append(key);
    }

    else if ("+-*/.".includes(key)) {
        append(key);
    }

    else if (key === "Enter") {
        event.preventDefault();
        calculate();
    }

    else if (key === "Backspace") {
        backspace();
    }

    else if (key === "Escape") {
        clearDisplay();
    }
});