let num1 = +prompt("enter first number")
let operator = prompt(`enter operator + or -`)
let num2 = +prompt(`enter second number`)
switch (operator) {
    case '+':
        console.log(num1 + num2)
        break;
    case '-':
        console.log(num1 - num2)
        break;
    case 'x':
        console.log(num1 * num2)
        break;
    default:
        console.log("Nothing")
        break;
}