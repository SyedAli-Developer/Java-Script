// let num1 = +prompt("enter first number")
// let operator = prompt(`enter operator + or -`)
// let num2 = +prompt(`enter second number`)
// switch (operator) {
//     case '+':
//         console.log(num1 + num2)
//         break;
//     case '-':
//         console.log(num1 - num2)
//         break;
//     case 'x':
//         console.log(num1 * num2)
//         break;
//     default:
//         console.log("Nothing")
//         break;
// }


//----------------------------------------------------------
// stone paper scissors
let user ;
let computer;
let result;
const cOut = document.getElementById('cOut')
const uOut = document.getElementById('uOut')
const Wdl = document.getElementById('WDL')
function input(inp) {
    switch (inp) {
        case 'Scissor':
            user = 'Scissor'
            break;
            case 'Stone':
            user = 'Stone'
            break;
            case 'Paper':
            user = 'Paper'
            break;
    
        default:
            break;
    }    
    uOut.textContent = user
    Wdl.textContent = ''
    cOut.textContent = ''
}
function Cmove() {
    let random = Math.round(Math.random() * 2) + 1;
    
    switch (random) {
        case 1:
            computer = 'Paper'
            
            break;
        case 2:
            computer = 'Stone'
            break;
            case 3:
                computer = 'Scissor'
        default:
            // alert('Error with computer response')
            break;
    }
    
        
}
function Game() {
    Cmove()
    
        if (user === computer){
            cOut.textContent = computer
            uOut.textContent = user
            result = 'Draw'
        }

        else if (user === 'Paper' && computer === 'Stone' || user === 'Stone' && computer === 'Scissor' || user === 'Scissor' && computer === 'Paper') {
            cOut.textContent = computer
            uOut.textContent = user
            result = 'You win'
        }
        else{
            cOut.textContent = computer
            uOut.textContent = user
            result = 'You lose'
        }
        Wdl.textContent = result
        return Wdl.textContent = result
        
}



// types of loops 
// while for foreach



