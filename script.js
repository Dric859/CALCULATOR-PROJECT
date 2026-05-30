const display = document.getElementById("display");

// Add input
function append(v) {
    display.value += v;
}

// Clear all
function clearDisplay() {
    display.value = "";
}

// Backspace
function backspace() {
    display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate() {
    try {
        display.value = Function("return " + display.value)();
    } catch {
        display.value = "Error";
    }
}

// Keyboard support (optional but included)
document.addEventListener("keydown", (e) => {

    if (!isNaN(e.key) || "+-*/.".includes(e.key)) {
        append(e.key);
    }

    if (e.key === "Enter") {
        calculate();
    }

    if (e.key === "Backspace") {
        backspace();
    }

    if (e.key === "Escape") {
        clearDisplay();
    }
});