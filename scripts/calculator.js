const add = function(number1, number2) {
    console.log(number1 + number2);
    return number1 + number2;
}
const subtract = function(number1, number2) {
    console.log(number1 - number2);
    return number1 - number2;
}
const multiply = function(number1, number2) {
    console.log(number1 * number2);
    return number1 * number2;
}
const divide = function(number1, number2) {
    console.log(number1 / number2);
    return number1 / number2;
}
const operate = function(number1, number2, functionName) {
    return functionName(number1, number2);
}

const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');
const plus = document.getElementById('plus');
const buttonsArray = Array.from(buttons);
let displayedNumbersArray = [];
let tempArray = [];
let firstNumber = 0;
let secondNumber = 0;
let result = 0;
// let operation = 0;

function hitKey(e) {
    let button = e.target;
    let buttonValue = button.innerHTML;
    let isAdding = false;
    let isSubtracting = false;
    
    tempArray.push(buttonValue);

    displayedNumbersArray.push(buttonValue);
    let displayNumbers = displayedNumbersArray.join('');
    display.innerHTML = displayNumbers;

    if (buttonValue === '+') {
        operation = 'isAdding';
        let tempNumber = tempArray.join('');
        firstNumber = tempNumber.replace(/[^0-9]/g, "");
        firstNumber = Number(firstNumber);
        tempArray = [];
        tempNumber = 0;
    }
    if (buttonValue === '-') {
        operation = 'isSubtracting';
        let tempNumber = tempArray.join('');
        firstNumber = tempNumber.replace(/[^0-9]/g, "");
        firstNumber = Number(firstNumber);
        tempArray = [];
        tempNumber = 0;
    }
    if (buttonValue === '×') {
        operation = 'isMultiplying';
        let tempNumber = tempArray.join('');
        firstNumber = tempNumber.replace(/[^0-9]/g, "");
        firstNumber = Number(firstNumber);
        tempArray = [];
        tempNumber = 0;
    }
    if (buttonValue === '÷') {
        operation = 'isDividing';
        let tempNumber = tempArray.join('');
        firstNumber = tempNumber.replace(/[^0-9]/g, "");
        firstNumber = Number(firstNumber);
        tempArray = [];
        tempNumber = 0;
    }
    if (buttonValue === '=') {
        tempNumber = tempArray.join('');
        secondNumber = tempNumber.replace(/[^0-9]/g, "");
        secondNumber = Number(secondNumber);
        switch (operation) {
            case 'isAdding':
                tempResult = operate(firstNumber, secondNumber, add); 
                break;
            case 'isSubtracting':
                tempResult = operate(firstNumber, secondNumber, subtract);
                break; 
            case 'isMultiplying':
                tempResult = operate(firstNumber, secondNumber, multiply);
                break;
            case 'isDividing':
                tempResult = operate(firstNumber, secondNumber, divide);
                break;
        }
        let result = Number(tempResult);
        display.innerHTML = result;
        tempArray = [];
        displayedNumbersArray = [];
        tempNumber = 0;
    }
    if (buttonValue === 'C') {
        display.innerHTML = 0;
        tempArray = [];
        displayedNumbersArray = [];
    }
    console.log(buttonValue);
}

buttonsArray.map((key) => {
    key.addEventListener('click', hitKey);
});