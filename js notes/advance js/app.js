
// ────────────────────────────────────────────────
//  Advance JAVASCRIPT
// ────────────────────────────────────────────────
/*
  Wellcome to Advance js..
  yaha per jitna topics lika hay ap in ko Advance js me padenge.
*/
/*
1.Variable Scoping 
2.Closure x
3.lexical scoping x
4.IIFE 
5.Object Methods (keys,values,freez,entries)  
6.Exponentiation Operator 
7.Optional chaining 
8.Destructuring 
9.Template literals x
10.Destructuring x
11.Default parameters x
12.Rest parameter x
13.Spread Operator x
14.Arrow functions x
15.Enhanced object literals x
16.Iterators & For..of x
17.Map x
18.Array methods x
19.Higher-order function x
20.CallBack x
21.Promises x
22.Ternary Operator x
23.modules // firebase ma prhaing3 x

*/

// ────────────────────────────────────────────────
//  Variable Scoping ()
// ────────────────────────────────────────────────

/*We have two types of Variable 
1. Global Variable --------------------
2. Local Variable --------------------

Global Variable wo hota hay jo funtion , if else , 
Condition se bahar banta hay Aur ye js ke har jage per call kar sakte hay.

Local Variable wo hota hay jo function , if else , 
Condition ke andar banta hay Aur ye variable us Block se bahar call nahi ho sakta. 

*/
/*
let parentAge = 20; // <-- This is Global Variable.

function greating() {
  let childAge = 5; // <-- This is Local Variable.
  console.log(parentAge);
  console.log(childAge);
}
greating()
greating()

// Note: kisi bhi local variable ko ek Block se dusre Block me call nahi kar sakte.

function Hello() {
  console.log(parentAge) // <-- Ap yaha per dek sakte hay ke Global variable yaha per call hota hay 
  console.log(childAge); // <-- Lekin yaha per ap dek sakte hay ke yaha per error ata hay. Yani Yaha per call nahi ho sakta
}
Hello()

// Note: var and let Variable difference.
// Is me ap dek sakte hay ke var ko johe condition
//  se bahar call kar sakte hay lekin let ko nahi kar sakte.

if(true){
  var a = 10; // Condition scope
  let b = 20; // block scope
}

console.log(b);
// Note: ye method sirf Condition me kam karta hay function me nahi 
*/

// ────────────────────────────────────────────────
//  lexical scoping   ()
// ────────────────────────────────────────────────


// ────────────────────────────────────────────────
//  Closure ()
// ────────────────────────────────────────────────

// ────────────────────────────────────────────────
//  IIFE (ye ek self-executing function)
// ────────────────────────────────────────────────

/*
  ye ek isa function hay jis ko call karne ki zaroorat nahi ye khod khood ko call karega.
  is ko banane kelie normal function ko ek braket () ke andar banate hay aur is braket () ki bad bi ek dusra braket banate hay.
  like this ()().
  niche example ko deke.
*/

/*
// Example: 
(function game() {
  console.log("I am a self excuting function");
})();
*/

// ────────────────────────────────────────────────
//  Objects Methods (Keys, Values, freaze, entries)
// ────────────────────────────────────────────────
/*
object.keys()	<-- is ko use karke ap object ke andar jitne bi keys hau un ka name le sakte ho. for example:	['name', 'age']
object.values()	<-- is ko use karke ap object ke andar jitne bi keys ka value hu un ko ap le sakte hay. for example	['ali', 20 , 'Quetta']
object.entries()	<-- is ko use kar ke ap object ke andar se keys aur us keys ka value dono ko ek array me le sakte hay. for example: [['name', 'ali'], ['age', '20'], ['city', 'Quetta']]
object.freeze()	<-- is ko ap use karke kisi bi object ko ap lock karsakte ho take us me update na ho.	Object read-only ho jata hai.

*/

/*
const user = { name: "Ali", age: 20, city: "Quetta"};

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
console.log(Object.freeze(user));
user.age = 25; // ye update nahi hoga kyun ke object freeze ho chuka hay.
console.log(user);
*/
// ────────────────────────────────────────────────
//  Exponentiation Operator ()
// ────────────────────────────────────────────────
/*

Exponentiation operator ko ham number ki power dene me is temal karte hay.
is ka sign ye hay " ** " 'do star' 
*/

/*
// Example: ham agar kahe 4 ki power 2 yani ye 4x4x4x4 = 16
console.log(4**2) // Output = 16
//Yani 4 ki power 2 ko ham js me 4**2 likte hay dono ki answer 16 hoga.
*/

// ────────────────────────────────────────────────
//  Optional chaining ()
// ────────────────────────────────────────────────
/*
// purana tension wala scene
const data = { user: { profile: { name: "Ali" } } };

console.log(data.user.profile.name);          // "Ali" — theek
console.log(data.user.settings.theme);        // 💥 ERROR! undefined pe crash

// ab hero aa gaya → optional chaining (?.)
console.log(data?.user?.profile?.name);       // "Ali"
console.log(data?.user?.settings?.theme);     // undefined (no crash, no tension)
console.log(data?.user?.wife?.name);          // undefined 😂 chill bro

// function call bhi safe
user?.greet?.();          // agar greet function hai to chalao, warna ignore

// array style bhi
console.log(post?.comments?.[0]?.text);       // pehla comment safe access
*/

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
