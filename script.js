const display = document.getElementById("display");

// Append value to display
function append(v) {
    display.value += v;
}

// Clear everything
function clearDisplay() {
    display.value = "";
}

// Delete last character (backspace)
function backspace() {
    display.value = display.value.slice(0, -1);
}

/*
--------------------------------------------------
SAFE CALCULATION ENGINE
(avoids direct Function/eval abuse)
--------------------------------------------------
*/
function calculate() {
    try {
        const result = safeCalculate(display.value);
        display.value = result;
    } catch {
        display.value = "Error";
    }
}

/*
Very small safe expression evaluator:
- supports + - * /
- respects order of operations via Function parser fallback is avoided
*/
function safeCalculate(expr) {

    // Only allow valid characters (security + stability)
    if (!/^[0-9+\-*/.() ]+$/.test(expr)) {
        throw new Error("Invalid characters");
    }

    // Convert expression safely
    // (still uses Function internally but now validated first)
    return Function("return " + expr)();
}

/*
--------------------------------------------------
KEYBOARD SUPPORT
--------------------------------------------------
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