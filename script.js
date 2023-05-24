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
display.textContent = '';
let numA;
let numB;
let choseOperator = false;
let operator = '';
let answer = 0;

const numButtons = document.querySelectorAll('.numbers');
numButtons.forEach((number) => number.addEventListener('click', () => {
    if (!choseOperator) {
        display.textContent += number.textContent;
        numA = parseInt(display.textContent);
        console.log('numA' + numA);
    }
    else {
        display.textContent += number.textContent;
        numB = parseInt(display.textContent);
        console.log('numB' + numB)
        //display.textContent = '';
        //choseOperator = false;
    }
}));

const operators = document.querySelectorAll('.operators');
operators.forEach((operation) => operation.addEventListener('click', () => {
    operator = operation.textContent
    choseOperator = true;
    display.textContent = '';
}));

const equals = document.querySelector(".equal");
equals.addEventListener('click', () => {
    answer = operate(operator,numA,numB);
    display.textContent = answer;
    console.log('answer' + answer)
    numA = answer;
});

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    numA = 0;
    numB = 0;
    display.textContent = '';
    operator = ''
    choseOperator = false;
});