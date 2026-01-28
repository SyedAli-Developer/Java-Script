// =============================================
// Assignment 3: Array Methods (map, filter, reduce)
// =============================================

// 1. Use map() to double each number
const numbers1 = [1, 2, 3, 4, 5];
const doubled = numbers1.map(num => num * 2);
console.log("1. Doubled:", doubled);          // [2, 4, 6, 8, 10]

// 2. Convert strings to uppercase
const fruits = ["apple", "banana", "cherry"];
const upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log("2. Uppercase:", upperFruits);    // ["APPLE", "BANANA", "CHERRY"]

// 3. Extract names from array of objects
const people = [{name: "Alice"}, {name: "Bob"}, {name: "Charlie"}];
const names = people.map(person => person.name);
console.log("3. Names:", names);              // ["Alice", "Bob", "Charlie"]

// 4. Get length of each word
const words = ["dog", "elephant", "tiger"];
const lengths = words.map(word => word.length);
console.log("4. Lengths:", lengths);          // [3, 8, 5]

// 5. Add "-done" suffix to each task
const tasks = ["task1", "task2", "task3"];
const doneTasks = tasks.map(task => task + "-done");
console.log("5. Done tasks:", doneTasks);     // ["task1-done", "task2-done", "task3-done"]

// 6. Square each number
const numbers6 = [2, 4, 6, 8];
const squared = numbers6.map(n => n * n);
console.log("6. Squared:", squared);          // [4, 16, 36, 64]

// 7. Add $ sign to prices (convert to string)
const prices = [99, 149, 299, 49];
const formattedPrices = prices.map(p => "$" + p);
console.log("7. Formatted prices:", formattedPrices);  // ["$99", "$149", "$299", "$49"]

// 8. Format dates (example using toLocaleDateString)
const dates = [new Date(2025, 0, 15), new Date(2025, 3, 22), new Date(2025, 7, 9)];
const readableDates = dates.map(date => date.toLocaleDateString('en-GB'));
console.log("8. Readable dates:", readableDates);
// Output example: ["15/01/2025", "22/04/2025", "09/08/2025"]

// 9. Check if number is even → boolean array
const nums9 = [1, 2, 3, 4, 5, 6];
const isEvenArray = nums9.map(n => n % 2 === 0);
console.log("9. Is even?:", isEvenArray);    // [false, true, false, true, false, true]

// 10. Append index to each string
const letters = ["a", "b", "c"];
const indexed = letters.map((letter, index) => letter + index);
console.log("10. With index:", indexed);      // ["a0", "b1", "c2"]

// ────────────────────────────────────────────────

// 11. Keep only even numbers
const mix = [1, 2, 3, 4, 5, 6];
const evens = mix.filter(n => n % 2 === 0);
console.log("11. Evens:", evens);             // [2, 4, 6]

// 12. Remove negative numbers
const values = [-3, 4, -1, 7, -5];
const positives = values.filter(v => v >= 0);
console.log("12. Positives:", positives);     // [4, 7]

// 13. Names longer than 4 characters
const names13 = ["Joe", "Elizabeth", "Tom", "Anna"];
const longNames = names13.filter(name => name.length > 4);
console.log("13. Long names:", longNames);    // ["Elizabeth"]

// 14. Get active users
const users = [
  {name: "Alice", active: true},
  {name: "Bob", active: false},
  {name: "Charlie", active: true}
];
const activeUsers = users.filter(user => user.active);
console.log("14. Active users:", activeUsers.map(u => u.name));  // ["Alice", "Charlie"]

// 15. Words starting with "a"
const words15 = ["apple", "banana", "ant", "cat", "avocado"];
const startWithA = words15.filter(w => w.startsWith("a"));
console.log("15. Starts with a:", startWithA);  // ["apple", "ant", "avocado"]

// 16. Numbers greater than 10
const numbers16 = [5, 12, 8, 19, 3, 15];
const above10 = numbers16.filter(n => n > 10);
console.log("16. >10:", above10);             // [12, 19, 15]

// 17. Remove falsy values
const mixed = [0, "hello", false, "", 42, null, "world", undefined, true];
const truthy = mixed.filter(Boolean);  // Boolean() removes falsy values
console.log("17. Truthy values:", truthy);   // ["hello", 42, "world", true]

// 18. Strings that include "code"
const phrases = ["javascript code", "hello world", "code is fun", "python"];
const hasCode = phrases.filter(str => str.includes("code"));
console.log("18. Contains 'code':", hasCode);  // ["javascript code", "code is fun"]

// 19. Exclude null/undefined
const data = [10, null, 20, undefined, 30, "test", null];
const cleanData = data.filter(item => item != null);
console.log("19. Clean data:", cleanData);    // [10, 20, 30, "test"]

// 20. Products cheaper than 100
const products = [
  {name: "Phone", price: 99},
  {name: "Tablet", price: 120},
  {name: "Charger", price: 45},
  {name: "Laptop", price: 850}
];
const cheap = products.filter(p => p.price < 100);
console.log("20. Cheap products:", cheap.map(p => p.name));  // ["Phone", "Charger"]

// ────────────────────────────────────────────────

// 21. Sum of all numbers
const nums21 = [1, 2, 3, 4];
const sum = nums21.reduce((acc, curr) => acc + curr, 0);
console.log("21. Sum:", sum);                 // 10

// 22. Find maximum number
const numbers22 = [45, 12, 89, 3, 67, 102, 34];
const max = numbers22.reduce((max, curr) => curr > max ? curr : max, numbers22[0]);
console.log("22. Maximum:", max);             // 102

// 23. Count frequency of each element
const fruits23 = ["apple", "banana", "apple", "orange", "banana"];
const frequency = fruits23.reduce((count, fruit) => {
  count[fruit] = (count[fruit] || 0) + 1;
  return count;
}, {});
console.log("23. Frequency:", frequency);
// Output: { apple: 2, banana: 2, orange: 1 }