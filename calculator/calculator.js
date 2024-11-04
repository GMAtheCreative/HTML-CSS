const display = document.getElementById('display')

function appendToDisplay(input) {
    // display.value +="0"
    display.value += input;
}
function clearDisplay() {
    display.value = "";
}
function backDisplay() {
    display.value = display.value.slice(0,-1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = "E"
    }
}