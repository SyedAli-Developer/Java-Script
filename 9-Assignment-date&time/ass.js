// JavaScript Date & Time
// =====================================================================================

// 1. Custom Date Formatter
// Write a function that takes a Date object and returns a formatted string like:
// "Saturday, 9 August 2025".


// -------------------------------------------------------------------------------------

// 2. Elapsed Time in Minutes
// Given two timestamps, calculate how many minutes have passed between them.   

//  function minutesBetween(startTime, endTime) {
//     const start = new Date(startTime);
//     const end = new Date(endTime);
//     const calc = end - start; 
//     const time = Math.floor(calc / (1000 * 60));
//     return time;
// }
// console.log(minutesBetween("2025-01-17 10:30", "2025-01-17 11:45"));     

// -------------------------------------------------------------------------------------

// 3. Age Calculator from Full Birthdate
// Create a function that accepts a full birthdate (YYYY-MM-DD) and calculates the age in
// years, months, and days.
// let yy = prompt("Birth year:");
// let mm = prompt("Birth month (1-12):");
// let dd = prompt("Birth day:");
// let birth = new Date(yy, mm-1, dd);
// let now   = new Date();
// let y = now.getFullYear() - birth.getFullYear();
// let m = now.getMonth() - birth.getMonth();
// let d = now.getDate() - birth.getDate();

// if (d < 0) {
//     m--;
//     d += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
// }
// if (m < 0) {
//     y--;
//     m += 12;
// }
// alert(`${y} saal, ${m} mahina, ${d} din`);
// -------------------------------------------------------------------------------------

// 4. Get First Day of Current Month
// Return the date of the first day of the current month.
// const first = new Date();
// first.setDate(1);
// first.setHours(0, 0, 0, 0);
// console.log(first);   

// -------------------------------------------------------------------------------------

// 5. Get Last Day of Current Month
// Write a function that returns the last date (e.g., 31, 30, or 28/29) of the current month.
// function lastday() {
//     return new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
// }
// console.log(lastday());  
// -------------------------------------------------------------------------------------


// 6. Human-Friendly "Time Ago"
// Create a function that returns strings like:
// ○ "Just now"
// ○ "5 minutes ago"
// ○ "2 hours ago"
// ○ "1 day ago" based on a past timestamp.

function timeAgoSimple(ts) {
  const sec = Math.floor((Date.now() - new Date(ts)) / 1000);

  if (sec < 60)    return "Just now";
  if (sec < 3600)  return Math.floor(sec/60) + " min ago";
  if (sec < 86400) return Math.floor(sec/3600) + " hr ago";
  return Math.floor(sec/86400) + " day ago";
}
// -------------------------------------------------------------------------------------
// 7. Countdown Timer
// Create a simple countdown function to a future date (e.g., New Year), showing days,
// hours, minutes, seconds remaining.
// -------------------------------------------------------------------------------------
// 8. Time Difference in Hours and Minutes
// Given two dates, return the difference in hours and minutes, like: "3 hours 25
// minutes".

// -------------------------------------------------------------------------------------
// 9. Check if Date is Weekend or Weekday
// Write a function that returns "Weekend" or "Weekday" based on a given date string.
// -------------------------------------------------------------------------------------
// 10. Compare Birthdays
// Ask for two people’s birthdates and return who is older and by how many years/days.
// -------------------------------------------------------------------------------------
// 11. Recurring Alarm Checker
// Given a day and time (e.g., "Monday 08:00"), check if the current date/time matches
// that schedule.
// -------------------------------------------------------------------------------------
// 12. Date Validator
// Write a function that checks whether a given date string is a valid date (e.g., using
// Date.parse() or new Date()).
// -------------------------------------------------------------------------------------
// 13. Custom Relative Date Formatter
// Given a timestamp, format it as:
// ● "Today at 3:45 PM"
// ● "Yesterday at 11:00 AM"
// ● "4 days ago"
// depending on how recent it is.
// -------------------------------------------------------------------------------------
// 14. Generate Dates for the Next 7 Days
// Return an array of dates (in DD-MM-YYYY format) for the next 7 days from today.
// -------------------------------------------------------------------------------------
// 15. Time Slot Generator
// Create a function that generates available 30-minute time slots between 9 AM to 5 PM
// for a specific date.
// -------------------------------------------------------------------------------------
// 16. Monthly Calendar Dates
// Return an array of all dates in the current month (e.g., ['01-08-2025',
// '02-08-2025', ...]).
// -------------------------------------------------------------------------------------
// 17. Convert UTC Date to Local Time
// Given a UTC date string, convert it to local date/time format.
// -------------------------------------------------------------------------------------
// 18. Measure Function Execution Time
// Use Date.now() to measure how long a loop/function takes to execute.

// -------------------------------------------------------------------------------------
// 19. Format Date as ISO String Without Time
// Format the current date as YYYY-MM-DD (without time), using a custom formatter.
// -------------------------------------------------------------------------------------
// 20. Get the Number of Days in Any Month
// Write a function that takes a month and year, and returns how many days are in that
// month (handle leap years too).
// --------------------------------The-End----------------------------------------------

