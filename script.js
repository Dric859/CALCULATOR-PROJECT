// script.js

// Gets the calculator display element
const display = document.getElementById("display");

/*
    Adds numbers to the display
    Example:
    If display shows "12"
    and user presses 3
    it becomes "123"
*/
function appendNumber(number) {
    display.value += number;
}

/*
    Adds operators (+ - * /)
    to the display
*/
function appendOperator(operator) {
    display.value += operator;
}

/*
    Calculates the math expression

    Example:
    "5+5" becomes 10
*/
function calculate() {

    try {

        /*
            eval() runs the math expression
            entered by the user
        */
        display.value = eval(display.value);

    } catch (error) {

        // Shows error if expression is invalid
        display.value = "Error";
    }
}

/*
    Clears the display screen
*/
function clearDisplay() {
    display.value = "";
}