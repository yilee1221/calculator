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

function roundAnswer(num) {
    return Math.round(num*100000) / 100000;
}

function clear() {
    numA = 0;
    numB = 0;
    display.textContent = 0;
    operator = ''
    choseOperator = false;
}

function updateNumber(num) {
    if (display.textContent == "") {
        clear();
    }
    if (!choseOperator) {
        if (display.textContent == '0') {
            display.textContent = '';
        }
        display.textContent += num;
        numA = parseFloat(display.textContent);
        console.log('numA: ' + numA);
    }
    else {
        if (numB == '') {
            display.textContent = '';
        }
        display.textContent += num; 
        numB = parseFloat(display.textContent);
        console.log('numB: ' + numB)
    }
}

function updateOperator(oper) {
    if (numB != '') {
        let tempAnswer = roundAnswer(operate(operator,numA,numB));
        display.textContent = tempAnswer;
        numA = tempAnswer;
    }
    operator = oper;
    console.log(operator);
    choseOperator = true;
    numB = '';
}

function updateAnswer() {
    if (numA == '' || numB == '' || operator == '') {
        alert("Not a valid calculation. Try again.");
        answer = 0;
        clear();
    }
    else if (operator == '÷' && numB == 0) {
        alert("You can't divide by 0!");
        answer = 0;
        clear();
    }
    else {
        answer = roundAnswer(operate(operator,numA,numB));
        display.textContent = answer;
        console.log('answer: ' + answer)
        numA = answer;
        numB = '';
    }
}

function deleteNumber() {
    if (display.textContent == numA) {
        numA = display.textContent.toString().slice(0, -1);
        display.textContent = numA;
    }
    if (display.textContent == numB) {
        numB = display.textContent.toString().slice(0, -1);
        display.textContent = numB;
    }
}

function putDecimal() {
    if (display.textContent.includes('.')) return
    if (display.textContent == numA) {
        numA = display.textContent += '.';
        display.textContent = numA;
    }
    if (display.textContent == numB) {
        numB = display.textContent += '.';
        display.textContent = numB;
    }
}
//const allButtons = document.querySelectorAll('button');
const numButtons = document.querySelectorAll('.numbers');
numButtons.forEach(number => number.addEventListener('click', () => updateNumber(number.textContent)));

const operators = document.querySelectorAll('.operators');
operators.forEach(operation => operation.addEventListener('click', () => updateOperator(operation.textContent)));

const equals = document.querySelector(".equal");
equals.addEventListener('click', updateAnswer);

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', clear);

const deleteButton = document.querySelector('.delete');
deleteButton.addEventListener('click', deleteNumber);

const decimalButton = document.querySelector('.decimal');
decimalButton.addEventListener('click', putDecimal);

function keyboardOperator(oper) {
    if (oper === '+') return '+';
    else if (oper === '-') return '-';
    else if (oper === '*') return 'x';
    else if (oper === '/') return '÷';
}
const keys = window.addEventListener('keydown', keySupport);
function keySupport(event) {
    
    if (event.key >= 0 && event.key <= 9) {
        updateNumber(event.key);
    }
    if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
        updateOperator(keyboardOperator(event.key));
    }
    if (event.key === '=' || event.key === "Enter") updateAnswer();
    
    if (event.key === 'c' || event.key === "Backspace") deleteNumber();
    
    if (event.key === '.') putDecimal();
    if (event.key === "Escape") clear();
}

