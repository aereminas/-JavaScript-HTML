let currentInput = '';
let operator = '';
let firstNumber = null;

function appendToInput(value) {
    const inputField = document.getElementById('inputField');

    if (['+', '-', '*', '/'].includes(value)) {
        if (firstNumber === null) {
            firstNumber = parseFloat(currentInput);
            operator = value;
            currentInput = '';
        }
    } else {
        currentInput += value;
    }
    
    inputField.value = (firstNumber !== null ? firstNumber + ' ' + operator + ' ' : '') + currentInput;
}

function clearInput() {
    currentInput = '';
    operator = '';
    firstNumber = null;
    document.getElementById('inputField').value = '';
}

function calculate() {
    const inputField = document.getElementById('inputField');
    let secondNumber = parseFloat(currentInput);

    if (firstNumber !== null && operator && !isNaN(secondNumber)) {
        let result;

        switch (operator) {
            case '+':
                result = firstNumber + secondNumber;
                break;
            case '-':
                result = firstNumber - secondNumber;
                break;
            case '*':
                result = firstNumber * secondNumber;
                break;
            case '/':
                result = secondNumber !== 0 ? firstNumber / secondNumber : 'Ошибка (деление на 0)';
                break;
            default:
                result = 'Ошибка';
        }

        addToHistory(`${firstNumber} ${operator} ${secondNumber} = ${result}`);
        inputField.value = result;

        // Сброс для новых вычислений
        currentInput = '';
        operator = '';
        firstNumber = null;
    } else {
        alert('Некорректное выражение!');
    }
}

function addToHistory(record) {
    const historyDiv = document.getElementById('history');
    const newRecord = document.createElement('div');
    newRecord.textContent = record;
    historyDiv.appendChild(newRecord);
}
