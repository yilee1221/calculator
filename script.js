function add(a, b) {
    return a + b;
};
  
function subtract(a, b) {
      return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function operate(operator,a,b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a,b);
        case 'x':
            return multiply(a, b);
        case '÷':
            return divide(a, b);
    }
}

let display = document.querySelector('.display');
let numA = '';
let numB = '';
let choseOperator = false;
let operator = '';
let answer = 0;

function roundAnswer(number) {
    return Math.round(number*1000) / 1000;
}

const numButtons = document.querySelectorAll('.numbers');
numButtons.forEach((number) => number.addEventListener('click', () => {
    if (!choseOperator) {
        if (display.textContent == '0') {
            display.textContent = '';
        }
        display.textContent += number.textContent;
        numA = parseInt(display.textContent);
        console.log('numA' + numA);
    }
    else {
        if (numB == '') {
            display.textContent = '';
        }
        display.textContent += number.textContent;
        numB = parseInt(display.textContent);
        console.log('numB' + numB)
    }
}));

const operators = document.querySelectorAll('.operators');
operators.forEach((operation) => operation.addEventListener('click', () => {
    operator = operation.textContent
    choseOperator = true;
}));

const equals = document.querySelector(".equal");
equals.addEventListener('click', () => {
    answer = roundAnswer(operate(operator,numA,numB));
    display.textContent = answer;
    console.log('answer' + answer)
    numA = answer;
});

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    numA = 0;
    numB = 0;
    display.textContent = 0;
    operator = ''
    choseOperator = false;
});