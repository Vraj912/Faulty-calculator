/* 
Create a faulty calculator using javascript

This faulty calculator does following:
1. It takes two number as input from the user
2. It performs wrong operation as follows:

if input is + then does -
if input is - then does +
if input is * then does /
if input is / then does **

It performs wrong operation 10% of the times

*/
console.log("I am a Calculator, Use me!")

let random = Math.random()
console.log(random)

function trueoperation(num1, num2, operator) {
    if (operator == '+') {
        return num1 + num2;
    }
    else if (operator == '-') {
        return num1 - num2;
    }
    else if (operator == '*') {
        return num1 * num2;
    }
    else if (operator == '/') {
        return num1 / num2;
    }
}
function falseoperation(num1, num2, operator) {
    if (operator == '+') {
        return num1 - num2;
    }
    else if (operator == '-') {
        return num1 + num2;
    }
    else if (operator == '*') {
        return num1 / num2;
    }
    else if (operator == '/') {
        return num1 ** num2;
    }
}
function fc(num1, num2, operator) {
    if (random < 0.1) {
        return falseoperation(num1, num2, operator);
    }
    else {
        return trueoperation(num1, num2, operator);
    }
    
}


let num1 = prompt("Enter first number:");
let num2 = prompt("Enter second number:");
let operator = prompt("Enter operator (+, -, *, /):");
let result = fc(num1, num2, operator);
console.log(`Result: ${result}`);
