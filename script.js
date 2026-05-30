const display = document.getElementById("display");

// Add value to screen
function append(v) {
    display.value += v;
}

// Clear screen
function clearDisplay() {
    display.value = "";
}

// Calculate result
function calculate() {
    try {
        display.value = Function("return " + display.value)();
    } catch {
        display.value = "Error";
    }
}

// Remove last character (backspace)
function backspace() {
    display.value = display.value.slice(0, -1);
}

/*
-----------------------------------------
KEYBOARD SUPPORT
-----------------------------------------
*/
document.addEventListener("keydown", function (event) {

    const key = event.key;

    // Numbers
    if (!isNaN(key)) {
        append(key);
    }

    // Operators
    else if (key === "+" || key === "-" || key === "*" || key === "/") {
        append(key);
    }

    // Decimal point
    else if (key === ".") {
        append(key);
    }

    // Enter = calculate
    else if (key === "Enter") {
        calculate();
    }

    // Backspace = delete last character
    else if (key === "Backspace") {
        backspace();
    }

    // Escape = clear
    else if (key === "Escape") {
        clearDisplay();
    }
});