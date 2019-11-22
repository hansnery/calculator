const add = function(number1, number2) {
    // console.log(number1 + number2);
    return number1 + number2;
}
const subtract = function(number1, number2) {
    // console.log(number1 - number2);
    return number1 - number2;
}
const multiply = function(number1, number2) {
    // console.log(number1 * number2);
    return number1 * number2;
}
const divide = function(number1, number2) {
    // console.log(number1 / number2);
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
let operatorSelected = false;

function hitKey(e) {
    let button = e.target;
    let buttonValue = button.innerHTML;
    
    tempArray.push(buttonValue);

    displayedNumbersArray.push(buttonValue);
    displayNumbers = displayedNumbersArray.join('');
    display.innerHTML = displayNumbers;

    if (operatorSelected === false) {
        tempNumber = tempArray.join('');
        firstNumber = tempNumber.replace(/[^0-9]/g, "");
        firstNumber = Number(firstNumber);
    }   else {
        tempNumber = tempArray.join('');
        secondNumber = tempNumber.replace(/[^0-9]/g, "");
        secondNumber = Number(secondNumber);
    }

    console.log('firstNumber: ', firstNumber);
    console.log('secondNumber: ', secondNumber);

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
        display.innerHTML = result;
        tempArray = [];
        secondNumber = 0;
        operatorSelected = false;
        tempArray.push(secondNumber);
        tempArray.push(result);
        tempNumber = tempArray.join('');
        firstNumber = tempNumber.replace(/[^0-9]/g, "");
        firstNumber = Number(firstNumber);
        console.log('result: ', result);
    }

    // function changeSigns() {
    //     if (displayedNumbersArray.includes('+')) {
    //         if (buttonValue === '-') {
    //             displayedNumbersArray.replace('+', '-');
    //             console.log('Changed + to -');
    //         }   else if (buttonValue === '×') {
    //             displayedNumbersArray.replace('+', '×');
    //         }   else if (buttonValue === '÷') {
    //             displayedNumbersArray.replace('+', '÷');
    //         }   else {
    //             displayedNumbersArray.push('+');
    //         }
    //     }
    //     if (displayedNumbersArray.includes("-")) {
    //         if (buttonValue === '+') {
    //             displayedNumbersArray.replace('-', '+');
    //         }   else if (buttonValue === '×') {
    //             displayedNumbersArray.replace('-', '×');
    //         }   else if (buttonValue === '÷') {
    //             displayedNumbersArray.replace('-', '÷');
    //         }   else {
    //             displayedNumbersArray.push('-');
    //         }   
    //     }   
    //     if (displayedNumbersArray.includes("×")) {
    //         if (buttonValue === '+') {
    //             displayedNumbersArray.replace('×', '+');
    //         }   else if (buttonValue === '-') {
    //             displayedNumbersArray.replace('×', '-');
    //         }   else if (buttonValue === '÷') {
    //             displayedNumbersArray.replace('×', '÷');
    //         }   else {
    //             displayedNumbersArray.push('×');
    //         }
    //     }   
        
    //     if (displayedNumbersArray.includes("÷")) {
    //         if (buttonValue === '+') {
    //             displayedNumbersArray.replace('÷', '+');
    //         }   else if (buttonValue === '-') {
    //             displayedNumbersArray.replace('÷', '-');
    //         }   else if (buttonValue === '×') {
    //             displayedNumbersArray.replace('×', '×');
    //         }   else {
    //             displayedNumbersArray.push('÷');
    //         }
    //     }
    // }

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
        if (displayedNumbersArray.includes('+')) {
            displayedNumbersArray.replace('+', '-');
        }
        console.log(typeof displayedNumbersArray);
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
        operation = 'isDividing';
        operatorSelected = true;
        tempArray = [];
        tempNumber = 0;
    }
    if (buttonValue === '=') {
        resultIs();
        displayedNumbersArray = [];
        displayedNumbersArray.push(result);
        displayNumbers = displayedNumbersArray.join('');
        display.innerHTML = displayNumbers;
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
    }
}

buttonsArray.map((key) => {
    key.addEventListener('click', hitKey);
});