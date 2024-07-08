let currentNumber = '';
let previousNumber = '';
let operation = '';
let result = '';

function appendNumber(number) {
    currentNumber += number;
    updateScreen();
}

function setOperation(op) {
    if (currentNumber === '') return;
    if (previousNumber !== '') {
        calculate();
    }
    operation = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

function calculate() {
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        case '%':
            result = prev % current;
            break;
        case 'sqrt':
            result = Math.sqrt(current);
            break;
        default:
            return;
    }
    currentNumber = result;
    operation = '';
    previousNumber = '';
    updateScreen();
}

function clearScreen() {
    currentNumber = '';
    previousNumber = '';
    operation = '';
    updateScreen();
}

function deleteLast() {
    currentNumber = currentNumber.slice(0, -1);
    updateScreen();
}

function answer() {
    currentNumber = result.toString();
    updateScreen();
}

function updateScreen() {
    document.getElementById('screen').value = currentNumber;
}
