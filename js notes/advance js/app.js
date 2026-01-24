// ────────────────────────────────────────────────
//  Destructuring (Object aur Array se value nikaalna)
// ────────────────────────────────────────────────

/*
  Destructuring ka matlab hai: 
  Ek object ya array se directly values nikaal kar alag-alag variables mein store kar dena.
  
  Pehle tareeka (purana style):
  let name = user.username;
  let age  = user.age;

  Naya tareeka (destructuring):
  let {username, age} = user;

  Faida: Code chhota, clean aur readable ho jata hai.
*/

// ────────────────────────────────────────────────
//  1. Object Destructuring
// ────────────────────────────────────────────────

// /* Example 1 – Purana tareeka (bina destructuring) */
// let user1 = {
//   username: "Ali",
//   age: 10,
//   isLoggedIn: false
// };

// console.log(
//   `User Name: "${user1.username}" Age: "${user1.age}" Is Logged In: "${user1.isLoggedIn}"`
// );
// // Output: User Name: "Ali" Age: "10" Is Logged In: "false"


// /* Example 2 – Destructuring ke saath (modern tareeka) */
// let user2 = {
//   username: "Ali",
//   age: 10,
//   isLoggedIn: false
// };

// let { username, age, isLoggedIn } = user2;

// console.log(`User Name: "${username}" Age: "${age}" Is Logged In: "${isLoggedIn}"`);
// Output: User Name: "Ali" Age: "10" Is Logged In: "false"


/* Note:
   - Variable names object ke keys se match karni chahiye
   - Order matter nahi karta
   - Agar koi key nahi milti to value undefined aayegi
*/

// // Bonus: Different name rakhna chahte ho to colon (:) use karo
// let { username: naam, age: umar } = user2;
// console.log(naam, umar);   // Output: Ali 10


// ────────────────────────────────────────────────
//  2. Array Destructuring
// ────────────────────────────────────────────────

/* Example 1 – Poori list nikaalna */
// const fruits = ["apple", "banana", "orange", "kiwi"];

// const [f1, f2, f3, f4] = fruits;

// console.log(f1, f2, f3, f4);   // apple banana orange kiwi
// console.log(f2);               // banana
// console.log(f4, f2);           // kiwi banana


// /* Example 2 – Sirf pehle 2 chahiye */
// const [first, second] = fruits;
// console.log(second);           // banana


// /* Example 3 – Skip karna (comma se chhod do) */
// const [a, , c] = fruits;       // 2nd position skip
// console.log(c);                // orange   (kiwi nahi aayega)

// /* Example 4 – Last item chahiye to rest use karo */
// const [firstFruit, ...baakiSab] = fruits;
// console.log(firstFruit);       // apple
// console.log(baakiSab);         // ["banana", "orange", "kiwi"]


/* Note:
   - Array mein order bohot matter karta hai
   - Comma (,) se aap values skip kar sakte ho
   - ... (rest) se baaki saare items ek array mein mil jaate hain
*/


// ────────────────────────────────────────────────
//  Real-life useful examples
// ────────────────────────────────────────────────
 
// ────────────────────────────────────────────────
//  Template Literals (Backtick Strings)
// ────────────────────────────────────────────────

/*
  Pehle tareeka (old school):
  "User: " + username + " Age: " + age

  Naya tareeka (modern & readable):
  `User: ${username} Age: ${age}`
*/

/*
let username = "Syed Ali";
let age = 12;
console.log("User Name: " + username + " Age: " + age);
// Output: User Name: Syed Ali Age: 12
console.log(`User Name: ${username} Age: ${age}`);
// Output: User Name: Syed Ali Age: 12
// Bonus: expressions bhi chalte hain
console.log(`Next year age will be ${age + 1}`);
// Output: Next year age will be 13
//  */

// ────────────────────────────────────────────────
//  Default Parameters
// ────────────────────────────────────────────────

/*function greet(name = "Bhai", age = 25) {
  console.log(`Hello ${name}, aapki umar ${age} hai.`);
}
greet(); // Hello Bhai, aapki umar 25 hai.
greet("Ahmed"); // Hello Ahmed, aapki umar 25 hai.
greet("Zain", 19); // Hello Zain, aapki umar 19 hai.
*/

// ────────────────────────────────────────────────
//  Rest Parameter (...)
// ────────────────────────────────────────────────

/*
function printFriends(...friends) {
  console.log("Mere dost:", friends);
  console.log("Total dost:", friends.length);
}
printFriends("Ali", "Abbas", "Ahsan", "Zaki");
// Output:
// Mere dost: ["Ali", "Abbas", "Ahsan", "Zaki"]
// Total dost: 4
*/

/*
// Agar rest na use karo to sirf pehla argument aata hai
function wrongWay(name) {
  console.log(name);
}
wrongWay("Ali", "Abbas", "Zain"); // sirf "Ali" print hoga
*/

// ────────────────────────────────────────────────
//  Spread Operator (...)
// ────────────────────────────────────────────────

/*
const frontend = ["HTML", "CSS", "JS"];
const backend = ["Node.js", "Express"];
const database = ["MongoDB", "PostgreSQL"];

console.log("Example 1 (concat):", frontend.concat(backend, database));
console.log("Example 2 (nested):", [frontend, backend, database]);

// Sabse clean tareeka (spread)
const fullStack = [...frontend, ...backend, ...database, "Git"];
console.log("Full Stack:", fullStack);

// Bonus: object mein bhi spread hota hai
const user = { name: "SyedAli", city: "Quetta" };
const updatedUser = { ...user, age: 25, isCoder: true };
console.log(updatedUser);
 */