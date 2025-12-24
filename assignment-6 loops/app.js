
// _-_-______________________________________________________----_-_-_-____-__-----_______________________________________________________--

//  JavaScript Loops Assignments

// _-_-_-_---__--_-_--_-_-_---__-_--_--_---_------_------_---_-____----_-_-_-____-__-----____---_--_------_____-__-_--_-___--___--___------_____----__--

// 1. Create an array of fruits like ["apple", "banana", "cherry"] and use a loop to log each fruit
// in the console.

// let fruits = ["apple" , "banana" , "cherry"]
// for (let i = 0; i < fruits.length; i++)
// {
//     console.log(fruits[i])
// }

// _-_-_-_---__--_-_--_-_-_---__-_--_--_---_------_------_---_-____----_-_-_-____-__-----____---_--_------_____-__-_--_-___--___--___------_____----__--

// 2. Given an array of colors ["red", "green", "blue"], use a loop to add all the color names to
// a paragraph with the ID output using document.querySelector.

// const colors = ["red", "green", "blue"];
// const Paragraph = document.querySelector("#para");
// Paragraph.textContent = colors.join(", ");

// _-_-_-_---__--_-_--_-_-_---__-_--_--_---_------_------_---_-____----_-_-_-____-__-----____---_--_------_____-__-_--_-___--___--___------_____----__--

// 3. Use a for loop to print numbers from 1 to 10 in the browser console.

// for(let i = 0; i <= 10; i++)
// {
//     console.log(i)
// }

// _-_-_-_---__--_-_--_-_-_---__-_--_--_---_------_------_---_-____----_-_-_-____-__-----____---_--_------_____-__-_--_-___--___--___------_____----__--

// 4. Use a while loop to print numbers from 5 to 1 in the console.

// let num = 5;
// while (num >= 1) {
//   console.log(num);
//   num--;  
// }

// _-_-_-_---__--_-_--_-_-_---__-_--_--_---_------_------_---_-____----_-_-_-____-__-----____---_--_------_____-__-_--_-___--___--___------_____----__--

// 5. Given an array of names ["Ali", "Sara", "Ahmed"], use a loop to change the text of a div
// with ID names to show all names separated by commas.

// let names= ["Ali", "Sara", "Ahmed"]
// let div = document.querySelector("#names");
// div.textContent = "";
// for (let i = 0 ; i <names.length; i++ )
// {
//     div.textContent = names.join(", ");

// }

// _-_-_-_---__--_-_--_-_-_---__-_--_--_---_------_------_---_-____----_-_-_-____-__-----____---_--_------_____-__-_--_-___--___--___------_____----__--

// 6. Change the text of a paragraph with ID status to "Loading..." using
// document.querySelector.

// const paragraph = document.querySelector("#para").textContent = "Louding..."

// _-_-_-_---__--_-_--_-_-_---__-_--_--_---_------_------_---_-____----_-_-_-____-__-----____---_--_------_____-__-_--_-___--___--___------_____----__--

// 7. Use a loop to calculate the sum of numbers in an array [5, 10, 15] and display the total in
// a paragraph with ID sum.

// let sum = [5,10,18];
// let total = 0;
// for (let i = 0; i < sum.length; i++)
// {
//     total = total + sum[i];
// }
// let paragraph = document.querySelector("#para")
// paragraph.textContent=total;

// _-_-_-_---__--_-_--_-_-_---__-_--_--_---_------_------_---_-____----_-_-_-____-__-----____---_--_------_____-__-_--_-___--___--___------_____----__--

// 8. Loop through an array of cities ["Karachi", "Lahore", "Quetta"] and display them as a
// single string in a div with ID cities.

// let city = ["karachi" , "quetta" , "lahore"]
// let div = document.querySelector("#names")
// for(let i =0;i<city.length;i++)
// {
//     div.textContent = city.join(", ")
// }

// _-_-_-_---__--_-_--_-_-_---__-_--_--_---_------_------_---_-____----_-_-_-____-__-----____---_--_------_____-__-_--_-___--___--___------_____----__--

// 9. Write a loop that counts from 1 to 20 and logs only the even numbers in the console.

// for (let i =2;i<=20;i++)
// {
//     // console.log(i)

//     if(i % 3 )
//     {
//         console.log(i + "this number is even")
//     }
// }

// _-_-_-_---__--_-_--_-_-_---__-_--_--_---_------_------_---_-____----_-_-_-____-__-----____---_--_------_____-__-_--_-___--___--___------_____----__--

// 10. Create an array of numbers [45, 22, 89, 100], and use a loop to find and display the
// largest number in a paragraph with ID max.

// let number = [34,5,234,55]
// let theHighest = 0;
// for (let i=0;i<number.length;i++)
// {
//     if(number[i] > theHighest)
//     {
//         theHighest = number[i];
//     }
// }
// const div = document.querySelector("#names")
// div.textContent=theHighest;

// _-_-_-_---__--_-_--_-_-_---__-_--_--_---_------_------_---_-____----_-_-_-____-__-----____---_--_------_____-__-_--_-___--___--___------_____----__--

// 11. Use document.querySelector to select a div with ID result and change its text to "Task
// Complete".

// const result = document.querySelector("#names").textContent="tast completed"

// _-_-_-_---__--_-_--_-_-_---__-_--_--_---_------_------_---_-____----_-_-_-____-__-----____---_--_------_____-__-_--_-___--___--___------_____----__--

// 12. Given an array of temperatures [30, 35, 32, 40], use a loop to calculate the average and
// display it inside an element with ID averageTemp.

// let temp = [30, 35, 32, 40];
// let total = 0;
// for (let i = 0; i < temp.length; i++) {
//     total = total + temp[i];
// }
// let average = total / temp.length;
// document.querySelector('#names').textContent = average;

// _-_-_-_---__--_-_--_-_-_---__-_--_--_---_------_------_---_-____----_-_-_-____-__-----____---_--_------_____-__-_--_-___--___--___------_____----__--

// 13. Create a loop that adds all the numbers from 1 to 100 and shows the total inside a
// paragraph with ID totalSum.

// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     sum += i;
//     let paragraph = document.querySelector("#para").textContent=sum;
// }

// _-_-_-_---__--_-_--_-_-_---__-_--_--_---_------_------_---_-____----_-_-_-____-__-----____---_--_------_____-__-_--_-___--___--___------_____----__--

// 14. Use a loop to print all values of the array ["dog", "cat", "bird"] into a single paragraph with
// ID animals.

// const animals = ["dog", "cat", "bird"];
// let output = "";
// for (let i = 0; i < animals.length; i++) {
//     output += animals[i] + " ";
// }
// const out = document.querySelector("#para").textContent=output

// _-_-_-_---__--_-_--_-_-_---__-_--_--_---_------_------_---_-____----_-_-_-____-__-----____---_--_------_____-__-_--_-___--___--___------_____----__--

// 15. Use document.querySelector to select a heading with ID title and change its text to
// "Welcome to JavaScript!".

// const heading = document.querySelector("#para").textContent=("Well to jaca script")

// _-_-_-_---__--_-_--_-_-_---__-_--_--_---_------_------_---_-____----_-_-_-____-__-----____---_--_------_____-__-_--_-___--___--___------_____----__--

// 16. Create a loop that prints all numbers between 1 and 50 that are divisible by 5, and log
// them to the console.

// for (let i=0; i<=50;i++)
// {
//     if(i % 5 == 0)
//     {
//         console.log(i)
//     }
// }

// _-_-_-_---__--_-_--_-_-_---__-_--_--_---_------_------_---_-____----_-_-_-____-__-----____---_--_------_____-__-_--_-___--___--___------_____----__--

// 17. Given an array of scores [80, 60, 90, 70], calculate how many scores are above 75 and
// display the count in a div with ID highScores.

// let score = [80, 60, 90, 70,88,50,60,70,101]
// let count = 0;
// let highscore = [];
// for (let i = 0; i < score.length; i++){
//     if(score[i]>75)
//     {
//         count++;
//         highscore.push(score[i])
//     }
// }
// const div = document.querySelector("#names")
// div.textContent = "This numbers are greater than 75 = " + highscore  
// console.log(highscore)
// console.log(count)



// _-_-_-_---__--_-_--_-_-_---__-_--_--_---_------_------_---_-____----_-_-_-____-__-----____---_--_------_____-__-_--_-___--___--___------_____----__--

// 18. Select an element with ID message and change its text to "Updated successfully" using
// document.querySelector.

// const text = document.querySelector("#para").textContent="Updated succesfully."


// _-_-_-_---__--_-_--_-_-_---__-_--_--_---_------_------_---_-____----_-_-_-____-__-----____---_--_------_____-__-_--_-___--___--___------_____----__--

// 19. Create an array of subjects like ["Math", "Science", "English"], and use a loop to show
// them in a paragraph with ID subjectsList.

// let subjects = ["Math", "Science", "English"];
// const show = document.querySelector("#para").textContent=subjects;

// _-_-_-_---__--_-_--_-_-_---__-_--_--_---_------_------_---_-____----_-_-_-____-__-----____---_--_------_____-__-_--_-___--___--___------_____----__--

// 20. Write a loop that prints numbers from 10 down to 1 and shows the result inside a Given
// an array of numbers [5, 10, 15, 20], use a loop to calculate and print the sum of all
// elements.

// let number = [5, 10, 15, 20];
// let sum = 0;
// for(let i = 10; i >= 1; i--)
// {
//     console.log(i)
// }
// for(let i = 0; i < number.length; i++) {
//     sum += number[i];
// }
// console.log("Sum of the array  =", sum);

// _-_-_-_---__--_-_--_-_-_---__-_--_--_---_------_------_---_-____----_-_-_-____-__-----____---_--_------_____-__-_--_-___--___--___------_____----__--

// 21. Create a loop that finds the largest number in an array [45, 67, 12, 89, 34].

// let number = [45,67,12,89,34,100,101,50,60,102]
// let high = 0;
// for(let i = 0; i < number.length;i++)
// {
//     if(number[i]>high)
//     {
//         high = number[i]
//     }
// }
// console.log("This number is the highest: "+ high)

// _-_-_-_---__--_-_--_-_-_---__-_--_--_---_------_------_---_-____----_-_-_-____-__-----____---_--_------_____-__-_--_-___--___--___------_____----__--

// 22. Use a loop to count how many numbers in an array [3, 8, 6, 1, 9, 2] are even.

// let number=[3, 8, 6, 1, 9, 2 , 1 , 4 , 6 , 5 ,12];
// let even = [];
// for(let i = 0 ; i < number.length; i++)
// {
//     if(number[i] % 2 == 0)
//     {
//         even.push(number[i])
//     }
// }
// console.log("These number are even: ")
// console.log(even)
// _-_-_-_---__--_-_--_-_-_---__-_--_--_---_------_------_---_-____----_-_-_-____-__-----____---_--_------_____-__-_--_-___--___--___------_____----__--

// 23. Write a loop that calculates the average of numbers in an array [20, 30, 40, 50].

// let num = [20, 30, 40, 50];
// let total = 0;
// for (let i = 0 ; i < num.length;i++)
// {
//     total += num[i]
// }
// console.log("The total is : "+total)
// const average = total / num.length
// console.log("The average is : "+average)

// _-_-_-_---__--_-_--_-_-_---__-_--_--_---_------_------_---_-____----_-_-_-____-__-----____---_--_------_____-__-_--_-___--___--___------_____----__--

// 24. Given an array [2, 4, 6, 8, 10], use a loop to create a new array where each value is
// multiplied by 3.

// let array =[2, 4, 6, 8, 10];
// let array2 = [];
// for(let i = 0; i <array.length;i++)
// {
//     array2.push(array[i]*3)
// }
// console.log("This is array 1: "+ array)
// console.log("This is array 2: "+ array2)

// _-_-_-_---__--_-_--_-_-_---__-_--_--_---_------_------_---_-____----_-_-_-____-__-----____---_--_------_____-__-_--_-___--___--___------_____----__--

// 25. Loop through an array [1, 3, 5, 7, 9] and count how many elements are greater than 4.

// let array = [1, 3, 5, 7, 9 ,4 ,6,7,1,2]
// let greater = 0;
// for(let i = 0; i <array.length;i++)
// {
//     if(array[i]>4)
//     {
//         greater++;
//     }
// }
// console.log(greater)



// _-_-_-_---__--_-_--_-_-_---__-_--_--_---_------_------_---_-____----_-_-_-____-__-----____---_--_------_____-__-_--_-___--___--___------_____----__--

// 26. Given an array [10, 15, 20, 25, 30], use a loop to add only the numbers divisible by 5.

// _-_-_-_---__--_-_--_-_-_---__-_--_--_---_------_------_---_-____----_-_-_-____-__-----____---_--_------_____-__-_--_-___--___--___------_____----__--

// 27. Write a loop that checks if a number 25 exists in the array [10, 20, 30, 40, 25].

// _-_-_-_---__--_-_--_-_-_---__-_--_--_---_------_------_---_-____----_-_-_-____-__-----____---_--_------_____-__-_--_-___--___--___------_____----__--

// 28. Given two arrays [1, 2, 3] and [4, 5, 6], use a loop to create a third array containing the
// sum of corresponding elements.

// _-_-_-_---__--_-_--_-_-_---__-_--_--_---_------_------_---_-____----_-_-_-____-__-----____---_--_------_____-__-_--_-___--___--___------_____----__--

// 29. Use a loop to find the second-largest number in an array [10, 99, 23, 87, 56].

// _-_-_-_---__--_-_--_-_-_---__-_--_--_---_------_------_---_-____----_-_-_-____-__-----____---_--_------_____-__-_--_-___--___--___------_____----__--

// 30. Given an array [1, 2, 3, 4, 5], reverse the array manually using a loop (don’t use
// .reverse()).

// _-_-_-_---__--_-_--_-_-_---__-_--_--_---_------_------_---_-____----_-_-_-____-__-----____---_--_------_____-__-_--_-___--___--___------_____----__--

// 31. Write a loop that finds and prints all the prime numbers between 1 and 50.

// _-_-_-_---__--_-_--_-_-_---__-_--_--_---_------_------_---_-____----_-_-_-____-__-----____---_--_------_____-__-_--_-___--___--___------_____----__--

// 32. Create a loop that finds the difference between the largest and smallest numbers in an
// array [11, 4, 99, 2, 47].

// _-_-_-_---__--_-_--_-_-_---__-_--_--_---_------_------_---_-____----_-_-_-____-__-----____---_--_------_____-__-_--_-___--___--___------_____----__--

// 33. Given an array [0, -1, -5, 6, 8, -3], count how many negative numbers are in the array.

// _-_-_-_---__--_-_--_-_-_---__-_--_--_---_------_------_---_-____----_-_-_-____-__-----____---_--_------_____-__-_--_-___--___--___------_____----__--

// 34. Loop through an array of numbers and create a new array that only contains odd
// numbers.

// _-_-_-_---__--_-_--_-_-_---__-_--_--_---_------_------_---_-____----_-_-_-____-__-----____---_--_------_____-__-_--_-___--___--___------_____----__--

// 35. Use a loop to remove all zeroes from an array [0, 1, 0, 3, 0, 5] and store the non-zero
// elements in a new array.

// _-_-_-_---__--_-_--_-_-_---__-_--_--_---_------_------_---_-____----_-_-_-____-__-----____---_--_------_____-__-_--_-___--___--___------_____----__--

// 36. Given an array [1, 2, 3, 4, 5, 6], use a loop to swap the first and last elements.

// _-_-_-_---__--_-_--_-_-_---__-_--_--_---_------_------_---_-____----_-_-_-____-__-----____---_--_------_____-__-_--_-___--___--___------_____----__--

// 37. Write a loop that checks whether all numbers in an array [2, 4, 6, 8] are even.

// _-_-_-_---__--_-_--_-_-_---__-_--_--_---_------_------_---_-____----_-_-_-____-__-----____---_--_------_____-__-_--_-___--___--___------_____----__--

// 38. Create a loop that counts how many numbers in [5, 10, 15, 20, 25] are greater than or
// equal to the average of the array.

// _-_-_-_---__--_-_--_-_-_---__-_--_--_---_------_------_---_-____----_-_-_-____-__-----____---_--_------_____-__-_--_-___--___--___------_____----__--

// 39. Given an array [2, 2, 2, 2, 2], use a loop to check whether all elements are equal.

// _-_-_-_---__--_-_--_-_-_---__-_--_--_---_------_------_---_-____----_-_-_-____-__-----____---_--_------_____-__-_--_-___--___--___------_____----__--
