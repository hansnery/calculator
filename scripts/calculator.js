const add = function(number1, number2) {
    return number1 + number2;
}
const subtract = function(number1, number2) {
    return number1 - number2;
}
const multiply = function(number1, number2) {
    return number1 * number2;
}
const divide = function(number1, number2) {
    return number1 / number2;
}
const operate = function(number1, number2, functionName) {
    return functionName(number1, number2);
}

const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');
const numbers = document.querySelectorAll('.number');
const buttonsArray = Array.from(buttons);
const dot = document.getElementById('dot');
let displayedNumbersArray = [];
let tempArray = [];
let firstNumber = 0;
let secondNumber = 0;
let result = 0;
let operatorSelected = false;
let operation = 0;

function hitKey(e) {
    let button = e.target;
    let buttonValue = button.innerHTML;

    function countDecimals(value) {
        if (Math.floor(value) !== value)
            return value.toString().split(".")[1].length || 0;
        return 0;
    }

    function countDigits(value) {
        return value.toString().length;
    }

    function resultIs() {
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
        result = Number(tempResult);
        resultDecimals = countDecimals(result);
        if (resultDecimals > 12) {
            console.log('result: ', result);
            result = result.toFixed(10);
        }
        display.innerHTML = result;
        tempArray = [];
        secondNumber = 0;
        operatorSelected = false;
        tempArray.push(secondNumber);
        tempArray.push(result);
        tempNumber = tempArray.join('');
        firstNumber = tempNumber.replace(/[^0-9.]/g, "");
        firstNumber = Number(firstNumber);
        dot.classList.remove('blocked');
    }
    
    tempArray.push(buttonValue);

    displayLengthMax = 13;
    displayLength = countDigits(firstNumber) + countDigits(secondNumber);

    if (displayLength < displayLengthMax) {
        displayedNumbersArray.push(buttonValue);
        displayNumbers = displayedNumbersArray.join('');
        display.innerHTML = displayNumbers;
        if (operatorSelected === false && countDigits(firstNumber) < displayLengthMax) {
            tempNumber = tempArray.join('');
            firstNumber = tempNumber.replace(/[^0-9.]/g, "");
            firstNumber = Number(firstNumber);
        }   else if (operatorSelected === true && countDigits(secondNumber) < displayLengthMax) {      
            tempNumber = tempArray.join('');
            secondNumber = tempNumber.replace(/[^0-9.]/g, "");
            secondNumber = Number(secondNumber);
            dot.classList.remove('blocked');
        }    
    }

    if (!Number.isInteger(firstNumber) && !Number.isInteger(secondNumber)) {
        dot.classList.add('blocked');
    }

    // console.log('firstNumber: ', firstNumber);
    // console.log('secondNumber: ', secondNumber);
    // console.log('firstNumber length: ' + countDigits(firstNumber));
    // console.log('secondNumber length: ' + countDigits(secondNumber));
    // console.log('displayLength: ', displayLength);

    if (buttonValue === '+') {
        if (firstNumber > 0 && secondNumber > 0) {
            resultIs();
            tempArray.push(result);
            displayedNumbersArray = [];
            displayedNumbersArray.push(result);
            displayedNumbersArray.push('+');
            displayNumbers = displayedNumbersArray.join('');
            display.innerHTML = displayNumbers;
        }
        if (operation !== 'isAdding') {
            displayedNumbersArray = [];
            displayedNumbersArray.push(firstNumber);
            displayedNumbersArray.push('+');
            displayNumbers = displayedNumbersArray.join('');
            display.innerHTML = displayNumbers;
        }
        operation = 'isAdding';
        operatorSelected = true;
        tempArray = [];
        tempNumber = 0;
    }
    if (buttonValue === '-') {
        if (firstNumber > 0 && secondNumber > 0) {
            resultIs();
            tempArray.push(result);
            displayedNumbersArray = [];
            displayedNumbersArray.push(result);
            displayedNumbersArray.push('-');
            displayNumbers = displayedNumbersArray.join('');
            display.innerHTML = displayNumbers;
        }
        if (operation !== 'isSubtracting') {
            displayedNumbersArray = [];
            displayedNumbersArray.push(firstNumber);
            displayedNumbersArray.push('-');
            displayNumbers = displayedNumbersArray.join('');
            display.innerHTML = displayNumbers;
        }
        operation = 'isSubtracting';
        operatorSelected = true;
        tempArray = [];
        tempNumber = 0;
    }
    if (buttonValue === '×') {
        if (firstNumber > 0 && secondNumber > 0) {
            resultIs();
            tempArray.push(result);
            displayedNumbersArray = [];
            displayedNumbersArray.push(result);
            displayedNumbersArray.push('×');
            displayNumbers = displayedNumbersArray.join('');
            display.innerHTML = displayNumbers;
        }
        if (operation !== 'isMultiplying') {
            displayedNumbersArray = [];
            displayedNumbersArray.push(firstNumber);
            displayedNumbersArray.push('×');
            displayNumbers = displayedNumbersArray.join('');
            display.innerHTML = displayNumbers;
        }
        operation = 'isMultiplying';
        operatorSelected = true;
        tempArray = [];
        tempNumber = 0;
    }
    if (buttonValue === '÷') {
        if (firstNumber > 0 && secondNumber > 0) {
            resultIs();
            tempArray.push(result);
            displayedNumbersArray = [];
            displayedNumbersArray.push(result);
            displayedNumbersArray.push('÷');
            displayNumbers = displayedNumbersArray.join('');
            display.innerHTML = displayNumbers;
        }
        if (operation !== 'isDividing') {
            displayedNumbersArray = [];
            displayedNumbersArray.push(firstNumber);
            displayedNumbersArray.push('÷');
            displayNumbers = displayedNumbersArray.join('');
            display.innerHTML = displayNumbers;
        }
        operation = 'isDividing';
        operatorSelected = true;
        tempArray = [];
        tempNumber = 0;
    }
    if (buttonValue === '=') {
        if (operation === 'isDividing' && secondNumber === 0) {
            alert('You can\'t divide a number by 0!');
            displayedNumbersArray.pop();
            displayNumbers = displayedNumbersArray.join('');
            display.innerHTML = displayNumbers;
        }   else {
            resultIs();
            displayedNumbersArray = [];
            displayedNumbersArray.push(result);
            displayNumbers = displayedNumbersArray.join('');
            display.innerHTML = displayNumbers;
        }
    }
    if (buttonValue === 'CE') {
        tempArray = [];
        displayNumbers = firstNumber;
        displayedNumbersArray = [displayNumbers];
        display.innerHTML = displayNumbers;
    }
    if (buttonValue === 'C') {
        tempArray = [];
        displayedNumbersArray = [];
        display.innerHTML = 0;
        firstNumber = 0;
        secondNumber = 0;
        result = 0;
        operatorSelected = false;
        dot.classList.remove('blocked');
    }
    if (buttonValue === '±') {
        displayedNumbersArray = [];
        if (firstNumber > 0 && secondNumber === 0) {
            tempNumber = tempArray.join('');
            firstNumber = tempNumber.replace(/[^0-9.]/g, "");
            firstNumber = Number(firstNumber);
            firstNumber = -firstNumber;
            displayedNumbersArray.push(firstNumber);
            operatorSelected = true;
        }   else if (secondNumber > 0) {
            tempNumber = tempArray.join('');
            secondNumber = tempNumber.replace(/[^0-9.]/g, "");
            secondNumber = Number(secondNumber);
            secondNumber = -secondNumber;
            displayedNumbersArray.push(firstNumber);
            displayedNumbersArray.push(secondNumber);
            console.log(displayedNumbersArray);
            operatorSelected = true;
        }
        displayNumbers = displayedNumbersArray.join('');
        display.innerHTML = displayNumbers;
        operation = 'isSubtracting';
    }
    if (buttonValue === '⌫') {
        displayedNumbersArray = displayNumbers.split('');
        if (displayedNumbersArray.includes('⌫')){
            displayedNumbersArray.pop();
        }
        displayedNumbersArray.pop();
        displayNumbers = displayedNumbersArray.join('');
        display.innerHTML = displayNumbers;
        if (displayedNumbersArray.includes('+')) {
            tempIndex = displayNumbers.indexOf('+');    
        }   else if (displayedNumbersArray.includes('-')) {
            tempIndex = displayNumbers.indexOf('-');    
        }   else if (displayedNumbersArray.includes('×')) {
            tempIndex = displayNumbers.indexOf('×');    
        }   else if (displayedNumbersArray.includes('÷')) {
            tempIndex = displayNumbers.indexOf('÷');    
        }   else {
            firstNumber = displayNumbers;
            firstNumber = Number(firstNumber);
            tempArray = [firstNumber];
        }
        if (displayedNumbersArray.includes('+') || displayedNumbersArray.includes('-') || displayedNumbersArray.includes('×') || displayedNumbersArray.includes('÷')) {
            tempArray = displayedNumbersArray.slice(tempIndex + 1, displayedNumbersArray.length);
            tempNumber = tempArray.join('');
            secondNumber = tempNumber;
            secondNumber = Number(secondNumber);
        }
        console.log('displayNumbers: ', displayNumbers);
        console.log('displayedNumbersArray: ', displayedNumbersArray);
    }
    if (buttonValue === '.') {
        dot.classList.add('blocked');
    }
}

buttonsArray.map((key) => {
    key.addEventListener('click', hitKey);
});