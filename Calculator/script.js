let screen = document.querySelector('#screenText');
let equals = document.querySelector('#equals')
let clear = document.querySelector('#clear');
let digits = document.querySelectorAll('button');

function operate (num1, num2, operators) {
    let total = 0;
    let result = 0;
    let intNum1;
    let intNum2;
    let strnum1 = JSON.stringify(num1[0]).replace(/[^0-9.-]/g, '');
    let strnum2 = JSON.stringify(num2[0]).replace(/[^0-9.]/g, '');


    if (strnum1.includes('.') || strnum2.includes('.')){
        intNum1 = parseFloat(strnum1);
        intNum2 = parseFloat(strnum2);
    }
    else {
        intNum1 = parseInt(strnum1);
        intNum2 = parseInt(strnum2);
    }

    if (operators.length == 0) {
        screen.textContent = `${result}`;
    }
    else {
        for (i = 0; i < operators.length; i++) {
            let next_num = parseInt(num2[i + 1]);
            const operator = operators[i];
            switch(operator){
                case '+':
                    result = addition(intNum1, intNum2);
                    total += result;
                    intNum1 = total;
                    intNum2 = next_num;
                    break;
                case '-':
                    result = subtraction(intNum1, intNum2);
                    total += result;
                    intNum1 = total;
                    intNum2 = next_num;
                    break;
                case '/':
                    result = division(intNum1, intNum2);
                    total += result;
                    intNum1 = total;
                    intNum2 = next_num;
                    break;
                case '*':
                    result = multiplication(intNum1, intNum2);
                    total += result;
                    intNum1 = total;
                    intNum2 = next_num;
                    break;        
            }
        }
    }
    screen.textContent = `${result}`;
}

function addNode(event) {
    let sign = ['+','-','/','*'];
    const buttonText = event.target.textContent;
    let screenText = screen.textContent.replace(/[^0-9\+\-\/\*]/g, '').split('');
    if (sign.includes(screenText[screenText.length-1]) && sign.includes(buttonText.replace(/\s/g, ''))){
        screen.textContent = screen.textContent;
    }
    else{
        screen.textContent += buttonText;
    }
}

function equalsNode() {
    let screenText = screen.textContent.replace(/[^0-9\+\-\/\*.]/g, '');
    let first_num = screenText.match(/^-?(.*?)(?=[\+\-\*\/])/g);
    let second_num = screenText.match(/(?<=[+\-/*])(\d+(\.\d+)?)(?=[+\-/*])|(?<=[+\-/*])(\d+(\.\d+)?)/g);
    let operator = screenText.replace(/[^\+\-\/\*]/g, '');
    
    if (second_num.length > 1){
        second_num.splice(0,1);
        operator = operator.replace(/^./, '');
    }
    operate(first_num, second_num, operator);
}

function addition (num1, num2) {
    if (Number.isInteger(num1) && Number.isInteger(num2)){
        return num1 + num2;
    }
    return (num1 / 1.0) + (num2 / 1.0);
}

function subtraction (num1, num2) {
    if (Number.isInteger(num1) && Number.isInteger(num2)){
        return num1 - num2;
    }
    return (num1 / 1.0) - (num2 / 1.0);
}

function multiplication (num1, num2) {
    if (Number.isInteger(num1) && Number.isInteger(num2)){
        return num1 * num2;
    }
    return (num1 / 1.0) * (num2 / 1.0);
}

function division (num1, num2) {
    if (Number.isInteger(num1) && Number.isInteger(num2)){
        return num1 / num2;
    }
    return (num1 / 1.0) / (num2 / 1.0);
}

digits.forEach( (node) => {
    node.addEventListener('click', addNode);
});

clear.addEventListener('click', () => screen.textContent = '');
equals.removeEventListener('click', addNode);
equals.addEventListener('click', equalsNode);
