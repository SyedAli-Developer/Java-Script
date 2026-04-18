
let action = prompt("What do you want to do? 'Withdraw' , 'Deposite' , 'Check Balance' ")
let balance = 1000;
let Amount;


console.log(`Balance: ${balance}$`)

switch (action) {

    case "Withdraw":
        console.log(`Action: ${action}`)
        Amount = +prompt(`How much do you want to ${action} (number only)`)
        if (Amount > balance) {
            alert(`Insufficient Balance Please try again`)
        }
        else {
            balance -= Amount
            alert(`You ${action} ${Amount}$ succesfully`)
            console.log(`You ${action} ${Amount}$ succesfully`)
            console.log(`Balance: ${balance}`)
        }
        console.log
        break;
    case "Deposite":
        console.log(`Action: ${action}`)
        Amount = +prompt(`How much do you want to ${action} (number only)`)
        balance += Amount
        alert(`You ${action} ${Amount}$ succesfully`)
        console.log(`You ${action} ${Amount}$ succesfully`)
        console.log(`Balance: ${balance}`)
        break;
        case 'Check Balance':
            alert(`You have ${balance}$`)
            console.log(`You have ${balance}$`)
            break;
            
            default:
                alert('Invalid Action')
                console.log(`Action: Invalid`)
        break;
}