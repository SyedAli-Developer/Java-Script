// Phase 1 :

// (5 == "5") && (5 !== "5")
// true && true
// true

// (10 > 5 || 5 > 10) && !(10 === 10)
// (true || false) && ! (true)
// true && false
// false

// let x = 0; if(x) { console.log("A") } else { console.log("B") }

// yaha per console me B print hoga kiun ke x ki value 0 hay aur 0 naturaly false hay


// Phase 2 :

// let action = prompt("What do you want to do? 'Withdraw' , 'Deposite' , 'Check Balance' ")
// let balance = 1000;
// let Amount;


// console.log(`Balance: ${balance}$`)

// switch (action) {

//     case "Withdraw":
//         console.log(`Action: ${action}`)
//         Amount = +prompt(`How much do you want to ${action} (number only)`)
//         if (Amount > balance) {
//             alert(`Insufficient Balance Please try again`)
//         }
//         else {
//             balance -= Amount
//             alert(`You ${action} ${Amount}$ succesfully`)
//             console.log(`You ${action} ${Amount}$ succesfully`)
//             console.log(`Balance: ${balance}`)
//         }
//         console.log
//         break;
//     case "Deposite":
//         console.log(`Action: ${action}`)
//         Amount = +prompt(`How much do you want to ${action} (number only)`)
//         balance += Amount
//         alert(`You ${action} ${Amount}$ succesfully`)
//         console.log(`You ${action} ${Amount}$ succesfully`)
//         console.log(`Balance: ${balance}`)
//         break;
//         case 'Check Balance':
//             alert(`You have ${balance}$`)
//             console.log(`You have ${balance}$`)
//             break;

//             default:
//                 alert('Invalid Action')
//                 console.log(`Action: Invalid`)
//         break;
// }


// Phase 3: Pattern & filter

// Exercise 2: Prime number finder

// for(let i = 2; i <=50 ; i++){
// let isPrime = true;

//     for (let j = 2 ; j < i; j++){
//     if(i % j === 0)
//     {
//         isPrime = false;
//         break;
//     }else isPrime = true
//     }
//     if(isPrime){
//         console.log(`${i} is Prime number.`)
//     }
// }



// Exercise 3: Skip & Stop

// for(let i = 1; i<=20 ; i++)
// {
//     if(i % 5 == 0) continue;
//     console.log(i)
//     if(i == 18) break;

// }

// Phase 4 : While vs Do-While Challange

// let num = +prompt("Enter number")
// while(num >= 0)
// {
//     console.log(num)

//     num = +prompt("Enter number")
// }

// do{
//     console.log(num)

//     num = +prompt("Enter number")
// }while(num >= 0)

// ===============================================================


// let mark = +prompt("Enter your obtain mark")

// switch (true) {
//     case (mark >= 90):
//         alert(`Garde : A`)
//         break;
//     case (mark >= 80 && mark < 90):

//         alert(`Garde : B`)
//         break;
//     case (mark >= 70 && mark < 80):
//         alert(`Garde : C`)

//         break;
//     case (mark >= 60 && mark < 70):
//         alert(`Garde : D`)

//         break;
//         case (mark < 60):
//         alert(`Garde : F`)

//         break;

//     default:
//         alert('Invalid Mark')
//         break;
// }


// != (Not Equal) aur !== (Strict Not Equal) mein kya farq hai? Ek example code likh kar dikhayein jo dono ka alag result de.

// Not Equal aur Strict Not Equal main farq bas itna hay jo value Equal aur Strict Equal me ata hay us ka opposite Not wale me hota hay jesa ke ye
// console.log(5 === 5) // output: true
// console.log(5 !== 5) // output: false

// console.log(5 == "5") // output: true
// console.log(5 != "5") // output: false


// ____________________________________________________________


// phase 5


// for (let i = 1; i <= 5; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//         row += "*"
//     }
//     console.log(row)
// }

// Phase 6

// ghalat code 

// let isLoggedIn = true;
// let hasSubscription = false;

// if (isLoggedIn = false) {
//     console.log("Please login first");
// } else if (isLoggedIn && hasSubscription) {
//     console.log("Welcome to Premium Content");
// } else (!hasSubscription) {
//     console.log("Please buy a subscription");
// }

// sahih code   

// let isLoggedIn = true;
// let hasSubscription = false;

// if (isLoggedIn && hasSubscription) {
//     console.log("Welcome to Premium Content");
// }else if (isLoggedIn && !hasSubscription){
//     console.log("Please buy a Subscription")
// }else {
//     console.log("Please Login First")
// }

