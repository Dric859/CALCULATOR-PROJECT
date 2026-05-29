// Get display element
const display = document.getElementById("display");

// Add value to display
function appendValue(value) {
    display.value += value;
}

// Clear display
function clearDisplay() {
    display.value = "";
}

// Calculate result safely
function calculate() {
    try {
        display.value = Function("return " + display.value)();
    } catch (e) {
        display.value = "Error";
    }
}