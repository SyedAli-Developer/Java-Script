/*----------------------------------------------------------------*/

// ----- Default parameters
/* default parameter ka matlab hay agar argument empty hay to jo default me value parameter keliye set kia ta wo value aye ga take function run ho gaye.
is ko ham is tarah se use kar sakte hay:
function functionName(user = 'Khan Baba'){}
*/

// function fun(user = 'Khan Baba', age = 23) {
//     console.log(`Hello ${user} your age is ${age}.`);
// }
// fun()

/*----------------------------------------------------------------*/

// ----- Rest parameter

/*rest parameter = "..." is ko parameter se pehle likte hay.
is ko ham is liye use karte hay ta ke agar perameter ek hay aur arguments multiple hay pir rest parameter ko use kar ke tamam arguments ki data ko ham array ki form me le sakte hay.
Note: agar rest parameter ko ham use nakare kisi multiple arguments me to multiple arguments mese sirf pehla argument ki data run hoga baqi tamam run nahi hoga.*/

// function fun(...user) {
//     console.log(user);
// }
// fun("ALi" , "Abass" , "Ahsan")

// function fun(user) {
//     console.log(user);
// }
// fun("muhammed" , "ahmad" ,"zaki")

/*----------------------------------------------------------------*/


// ----- Spread Operator
/*niche diye gaye 3 examples ko review karo ye in sab me 3 array ko ek array me data store karne ka tariqa hay lekin example no.3 spread operator ke zariye se banaya gaya newarray hay us me kia hota hay ke ap her wo variable jo ap add karna chahte ho us ke name se pehle "..." lagate hay pir wo concat method jesa output deta hay. 
Note: is ko is tarah lik te hay.
newarr = [...num1, ...num2, ...num3]
*/

/*
let num1 = [1, 2, 3];
let num2 = [4, 5, 6];
let num3 = [7, 8, 9];
let newarr = [];

example 1:
newarr = num1.concat(num2.concat(num3))
console.log(newarr)

example 2:
newarr = [num1, num2, num3];
console.log(newarr)

example 3:
newarr = [...num1, ...num2, ...num3];
console.log(newarr);
*/

/*----------------------------------------------------------------*/