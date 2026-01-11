// 1. Lowercase Name
// Write a function that takes a name as input and returns it all in lowercase.
// function lowercase(){
//     const int = document.querySelector("#input");
//     const result = document.querySelector("#result");
//     result.innerText = int.value.toLowerCase();
// }
// ---------------------------------------------------------------------------
// 2. Uppercase Shouting
// Convert a given string into uppercase to simulate shouting. Example: "hello" →
// "HELLO".
// function uppercase(){
//     const int = document.querySelector("#input");
//     const result = document.querySelector("#result");
//     result.innerText = int.value.toUpperCase();
// }
// ---------------------------------------------------------------------------
// 3. Count Characters
// Given a string, return the number of characters in it.
// function countletter(alphabet){
//     console.log(alphabet.length);
//     return alphabet.length;
// }
// countletter("hello");
// ---------------------------------------------------------------------------
// 4. First Character
// Write a function that returns the first character of a string using charAt().
// function firstletter(str) {
//   return str.charAt(0);
// }
// console.log(firstletter("hello how are you doing today"));
// ---------------------------------------------------------------------------
// 5. Last Character
// Return the last character of any string using .charAt() and .length.
// function lastletter(str) {
//   return str.charAt(str.length - 1);
// }
// console.log(lastletter("Hello"));
// ---------------------------------------------------------------------------
// 6. Find Position of Word
// Given a sentence, find the position (index) of the word "apple" using indexOf.
// function appleindex(letter){
//     return letter.indexOf("apple");
// }
// console.log(appleindex("muje apple kana acha lagta hai "));
// ---------------------------------------------------------------------------
// 7. Extract First Word
// Use slice() and indexOf() to extract the first word from a sentence.
// function firstword(str){
//     return str.slice(0, str.indexOf(" "));
// }
// console.log(firstword("Hello world, how are you?"));
// ---------------------------------------------------------------------------
// 8. Replace a Word
// Replace the word "bad" with "good" in a given sentence using replace().
// function replace(string){
//     return string.replace("bad", "good");
// }
// console.log(replace("This is a bad idea."));
// ---------------------------------------------------------------------------
// 9. Replace All Vowels
// Replace all occurrences of vowels in a string with "*" using replaceAll().
// function replace(string){
//     return string.replaceAll("a", "*").replaceAll("e", "*").replaceAll("i", "*").replaceAll("o", "*").replaceAll("u", "*");
// }
// console.log(replace("hello bahi kase ho ap log"));
// ---------------------------------------------------------------------------
// 10. Split Sentence into Words
// Convert a sentence into an array of words using split(" ").
// function split(str){
//     return str.split(" ");
// }
// console.log(split("Hello world, how are you"));
// ---------------------------------------------------------------------------
// 11. Capitalize First Letter
// Capitalize only the first letter of a given word.
// function capitalize(word){
//     return word.charAt(0).toUpperCase() + word.slice(1);
// }
// console.log(capitalize("hello  kase ho "));
// ---------------------------------------------------------------------------
// 12. Find Second Word
// Write a function that returns the second word of a sentence using split().
// function second(str){
//     return str.split(" ")[1];
// }
// console.log(second("Hello world, how are you?"));
// ---------------------------------------------------------------------------
// 13. Censor a Word
// Replace all instances of a bad word like "dumb" in a string with "****".
// function censor(str){
//     return str.replaceAll("dumb", "****");
// }
// console.log(censor("You are so dumb man"));
// ---------------------------------------------------------------------------
// 14. Count Words in Sentence
// Use .split() and .length to count how many words are in a sentence.
// function count(str){
//     return str.split(" ").length;
// }
// console.log(count("Hello world, how are you"));
// ---------------------------------------------------------------------------
// 15. Check if Word Exists
// Return true if a specific word (e.g., "cat") exists in a string using indexOf.
// function check(str){
//     return str.indexOf("cat");
// }  
// console.log(check("The cat is on the roof."));
// ---------------------------------------------------------------------------
// 16. Extract Domain from Email
// Given an email address, extract and return the domain name (everything after @).
// function email(str){
//     return str.slice(str.indexOf("@gmail.com"));
// }
// console.log(email("abbas.ghulam.hack"));
// ---------------------------------------------------------------------------
// 17. Reverse Words in Sentence
// Given a sentence, split it into words, reverse the array, and join it back into a string.
// function reverse(str){
//     return str.split(" ").reverse().join(" ");
// }
// console.log(reverse("Hello student, how are you"));
// ---------------------------------------------------------------------------
// 18. Check Palindrome (Basic)
// Write a function that checks if a word is the same when reversed (ignore case).


// ----------------------------------------------------------------------------
// 19. Count Vowels
// Count how many vowels are in a given string using a loop and charAt.
// function count(str){
//     for (let i = 0; i < str.length; i++) {
//         if (
//           str.charAt(i) === "a" ||
//           str.charAt(i) === "e" ||
//           str.charAt(i) === "i" ||
//           str.charAt(i) === "o" ||
//           str.charAt(i) === "u"
//         ) {
//           console.log(str.charAt(i));
//         }
// }
// }
// console.log(count("hello bahi kase ho ap log"));
// ---------------------------------------------------------------------------
// 20. Alternate Case Converter
// Convert a string to alternating case (e.g., "hello" → "HeLlO").
// function alternate(str){

// }


// ---------------------------------------------------------------------------
// 21. Title Casing a Sentence
// Convert a full sentence so that the first letter of each word is capitalized.
// function capitalize(str){


// }


// ---------------------------------------------------------------------------
// 22. Remove Duplicate Words
// Given a sentence, remove any repeated words (case-insensitive).
// function remove(str){
//     str = str.toLowerCase().split(" ");
//     let result = [];
//     for(let i=0; i<str.length; i++){
//         if(!result.includes(str[i])){
//             result.push(str[i]);
//         }
//     }
//     return result.join(" ");    

// }
// console.log(remove("This is is a test Test"));
// ---------------------------------------------------------------------------
// 23. Mask Email Address
// Convert an email like john.doe@example.com to j***@example.com.
// function email(str){
//     let sentence = str.split("@");
//     let name = sentence[0];
//     let domain = sentence[1];
//     let maskedName = name.charAt(0) + "***";
//     return maskedName + "@" + domain;
// }
// console.log(email("abbas.ghulam.hack@gmail.com"));
// ---------------------------------------------------------------------------
// 24. Find Most Frequent Word
// Return the word that appears most frequently in a paragraph.
// function word(str){
//     let words = str.toLowerCase().split(" ");

// }
// console.log(word("This is a test. This test is only a test."));
// ---------------------------------------------------------------------------
// 25. Abbreviate a Full Name
// Given John Ronald Reuel Tolkien, return J.R.R.T. using split, charAt, and
// toUpperCase.
// function short(str){
//     const words = str.split(" ");
//     let over = "";
//     for (let i = 0; i < words.length; i++) {
//         over += words[i].charAt(0).toUpperCase() + ".";
//     }  
//     return initials;
// }
// console.log(short("John Ronald Reuel Tolkien"));
// ---------------------------------------------------------------------------
// 26. Check if Anagram
// Write a function that checks whether two strings are anagrams (same letters, different
// function equal(str1, str2){
//     let a = str1.toLowerCase().split("").sort().join("");
//     let b = str2.toLowerCase().split("").sort().join("");
//     return a === b;

// }
// console.log(equal("listen", "silent"));
// ---------------------------------------------------------------------------
// 27. Find All Word Positions
// Return all indices where a specific word occurs in a string (case-insensitive).
// function find(str, word) {
//     let array = [];
//     let text = str.toLowerCase();
//     let searchWord = word.toLowerCase();
    
//     let index = 0;
    
//     for (let i = 0; i < text.length; i++) {
//         index = text.indexOf(searchWord, index);
        
//         if (index === -1) {
//             break;
//         }
        
//         array.push(index); 
//         index = index + 1; 
//     }
//     return array;
// }

// console.log(find("This is a test. This test is only a test.", "test"));
// ---------------------------------------------------------------------------
// 28. Reverse Each Word
// Given a sentence, reverse each word individually but keep them in the same order.
// function reverse(str){
//     let words = str.split(" ");
//     let reversedWords = words.map(word => word.split("").reverse().join(""));
//     return reversedWords.join(" ");

// }
// console.log(reverse("Hello student, how are you"));
// ---------------------------------------------------------------------------
// 29. Smart Word Wrap
// Break a sentence into lines of a given character limit, wrapping on spaces (not in the
// middle of a word).
function wrap(str){

}
// ---------------------------------------------------------------------------
// 30. Find Longest Word
// Find and return the longest word in a sentence.
// function longest(str){
//     let words = str.split(" ");
//     let longestWord = "";
//     for (let i = 0; i < words.length; i++) {
//         if (words[i].length > longestWord.length) {
//             longestWord = words[i];
//         }
//     }
//     return longestWord;
// }
// console.log(longest("Find the longest word in this sentence"));
// ---------------------------------------------------------------------------
// 31. Censor Multiple Bad Words
// Given a list of bad words, replace each with "***" in a paragraph using replaceAll
// and a loop.
// function censor(str){
//     let bad = ["dumb", "ugly", "stupid"];
//     for(let i =0;i<bad.length;i++){
//         str = str.replaceAll(bad[i], "***");
//     }
//     return str
// }
// console.log(censor("you are so dumb and ugly and stupid man"));
// ---------------------------------------------------------------------------
// 32. Detect Repeated Characters
// Return all characters that appear more than once in a string.
// function repeated(str){
//     let Count = {};
//     let count1 = [];
//     for(let i=0;i<str.length;i++){
//         let char = str.charAt(i);
//         if(Count[char]){
//             Count[char]++;
//         }
//         else{
//             Count[char] = 1;
//         }
//     }
//     for(let char in Count){
//         if(Count[char] > 1){
//             count1.push(char);
//         }
//     }
//     return count1;
// }
// console.log(repeated("programming"));
// ---------------------------------------------------------------------------
// 33. Compress Repeating Characters
// Convert "aaabbbcc" to "a3b3c2".
// function change(str){
//     let compressed = "";
//     let count = 1;
//     for(let i=0;i<str.length;i++){
//         if(str.charAt(i) === str.charAt(i+1)){}
//         else{
//             compressed += str.charAt(i) + count;
//             count = 1;
//         }
//         count++;
//     }
//     return compressed;

// }
// console.log(change("aaabbbcc"));
// ---------------------------------------------------------------------------
// 34. Check Password Strength
// Create a function that checks if a password string meets criteria (min 8 chars, contains
// number, uppercase, lowercase).
// function password(str){
//     let pass= "";
//     if(str.length <= 8){
//         console.log("weak password");
//     }
//     else if(str.length <= 16 ){
//         console.log("strong password");
//     }
//     else if(str.length <= 24 ){
//         console.log("very strong password");
//     }
//     else {
//         console.log("password is not strong Change the password");
//     }
//     return pass.test(str);
// }
// console.log(password("Abbasghulam123Askjdah"));
// ---------------------------------------------------------------------------
// 35. Extract Hashtags
// From a social media post, extract all words starting with #.
// function hashtag(str){
//     let words = str.split(" ");
//     let hashtags = [];
//     for(let i=0;i<words.length;i++){
//         if(words[i].charAt(0) === "#"){
//             hashtags.push(words[i]);
//         }
//     }
//     return hashtags;
// }
// console.log(hashtag("Apple # "));
// ---------------------------------------------------------------------------
// 36. CamelCase Converter
// Convert a sentence like "make this camel case" to "makeThisCamelCase".
// function remove(str){
//     let words = str.split(" ");
//     let array = [];
//     array.push(words[0].toLowerCase());
//     for(let i=0;i<words.length;i++){
//         array.push(words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase());
//     }
//     return array.join("");
// }
// console.log(remove("make this camel case"));
// ---------------------------------------------------------------------------
// 37. Parse CSV Line
// Given a CSV string like "name,age,email", return an array of values.
// function saperate(str){
//     let array = str.split(",");
//     return array;
// }
// console.log(saperate("name,age,email"));
// ---------------------------------------------------------------------------
// 38. Custom Split Without Using split()
// Write a function that splits a string by a space character without using .split().
// function custom(str){
//     let result = [];
//     let cur = "";
//     for(let i= 0;i<str.length;i++){
//         if(str.charAt(i) === " "){
//             result.push(cur);
//             cur = "";
//         }
//         else{
//             cur += str.charAt(i);
//         }
//     }
//     result.push(cur);
//     return result;
// }
// console.log(custom("Hello world, how are you"));
// ---------------------------------------------------------------------------
// 39. Format Phone Number
// Given a 10-digit string like "1234567890", return it in the format (123) 456-7890.
// function number(str){
//     let arry1 = str.slice(0, 3);
//     let arry2 = str.slice(3, 6);
//     let arry3 = str.slice(6, 10);
//     return `(${arry1}) ${arry2}-${arry3}`;

// }
// console.log(number("1234567890"));
// ---------------------------------------------------------------------------
// 40. Detect Palindromes in Sentence
// Return all palindromic words in a sentence (e.g., "madam is at civic center" →
// ["madam", "civic"]).
// function sentence(str){
//     let words = str.split(" ");
//     let poem = [];
//     for(let i=0;i<words.length;i++){
//         let rev = words[i].split("").reverse().join("");
//         if(words[i].toLowerCase() === rev.toLowerCase()){
//             poem.push(words[i]);
//         }   
//     }
//     return poem;
// }
// console.log(sentence("madam is at civic center"));