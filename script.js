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

const display = document.querySelector('.display');
let numA = '';
let numB = '';
let choseOperator = false;
let operator = '';
let answer = '';

function roundAnswer(number) {
    return Math.round(number*1000) / 1000;
}

function clear() {
    numA = 0;
    numB = 0;
    display.textContent = 0;
    operator = ''
    choseOperator = false;
}

const numButtons = document.querySelectorAll('.numbers');
numButtons.forEach((number) => number.addEventListener('click', () => {
    
    if (!choseOperator) {
        if (display.textContent == '0') {
            display.textContent = '';
        }
        display.textContent += number.textContent;
        numA = parseInt(display.textContent);
        console.log('numA: ' + numA);
    }
    else {
        if (numB == '') {
            display.textContent = '';
        }
        display.textContent += number.textContent;
        numB = parseInt(display.textContent);
        console.log('numB: ' + numB)
    }
}));

const operators = document.querySelectorAll('.operators');
operators.forEach((operation) => operation.addEventListener('click', () => {
    if (numB != '') {
        let tempAnswer = roundAnswer(operate(operator,numA,numB));
        display.textContent = tempAnswer;
        numA = tempAnswer;
    }
    operator = operation.textContent;
    console.log(operator);
    choseOperator = true;
    numB = '';
}));

const equals = document.querySelector(".equal");
equals.addEventListener('click', () => {
    answer = roundAnswer(operate(operator,numA,numB));
    display.textContent = answer;
    console.log('answer: ' + answer)
    numA = answer;
    numB = '';
});

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', clear);