// ==================================================================
// 1. Custom Date Formatter
// Returns: "Saturday, 9 August 2025"
// ==================================================================
function formatDate(date) {
    const options = { 
        weekday: 'long', 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
    };
    return date.toLocaleDateString('en-GB', options);
}

// Example:
// console.log(formatDate(new Date()));          // e.g. Saturday, 28 January 2026


// ==================================================================
// 2. Elapsed Time in Minutes Between Two Dates
// ==================================================================
function getMinutesBetween(startTime, endTime) {
    const start = new Date(startTime);
    const end   = new Date(endTime);
    
    if (isNaN(start) || isNaN(end)) return "Invalid date";
    
    const diffMs = end - start;
    const minutes = Math.floor(diffMs / (1000 * 60));
    
    return minutes;
}

// Example:
// console.log(getMinutesBetween("2023-10-01T10:00:00", "2023-10-01T12:30:00")); // 150


// ==================================================================
// 3. Age Calculator (years, months, days)
// ==================================================================
function calculateAge(birthDay, birthMonth, birthYear) {
    const today = new Date();
    const birthDate = new Date(birthYear, birthMonth - 1, birthDay);
    
    if (isNaN(birthDate.getTime())) return "Invalid birth date";
    
    let years  = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days   = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    return `${years} years, ${months} months, ${days} days`;
}

// Example:
// console.log(calculateAge(10, 8, 2007));


// ==================================================================
// 4. First Day of Current Month
// ==================================================================
function getFirstDayOfCurrentMonth() {
    const today = new Date();
    return new Date(today.getFullYear(), today.getMonth(), 1).getDate();
}

// console.log(getFirstDayOfCurrentMonth());


// ==================================================================
// 5. Last Day of Current Month
// ==================================================================
function getLastDayOfCurrentMonth() {
    const today = new Date();
    return new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
}

// console.log(getLastDayOfCurrentMonth());


// ==================================================================
// 6. Human-Friendly "Time Ago"
// ==================================================================
function timeAgo(pastTimestamp) {
    const now = Date.now();
    const past = new Date(pastTimestamp).getTime();
    const seconds = Math.floor((now - past) / 1000);

    if (seconds < 45)               return "Just now";
    if (seconds < 90)               return "1 minute ago";
    
    const minutes = Math.floor(seconds / 60);
    if (minutes < 45)               return `${minutes} minutes ago`;
    
    const hours = Math.floor(minutes / 60);
    if (hours < 24)                 return `${hours} hour${hours === 1 ? '' : 's'} ago`;
    
    const days = Math.floor(hours / 24);
    if (days < 30)                  return `${days} day${days === 1 ? '' : 's'} ago`;
    
    return new Date(past).toLocaleDateString('en-GB');
}

// Example:
// console.log(timeAgo("2026-01-20T10:00:00"));


// ==================================================================
// 8. Time Difference in Hours and Minutes
// ==================================================================
function getTimeDifference(start, end) {
    const diffMs = new Date(end) - new Date(start);
    if (isNaN(diffMs)) return "Invalid dates";
    
    const totalMinutes = Math.floor(diffMs / 60000);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    let result = '';
    if (hours > 0)   result += `${hours} hour${hours > 1 ? 's' : ''} `;
    if (minutes > 0) result += `${minutes} minute${minutes > 1 ? 's' : ''}`;
    
    return result.trim() || '0 minutes';
}

// Example:
// console.log(getTimeDifference("2026-01-25 10:00:00", "2026-01-25 13:25:00"));


// ==================================================================
// 9. Check if Date is Weekend or Weekday
// ==================================================================
function getDayType(dateString) {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "Invalid date";
    
    const day = date.getDay();
    return (day === 0 || day === 6) ? "Weekend" : "Weekday";
}

// console.log(getDayType("2026-01-25"));  // Sunday → Weekend


// ==================================================================
// 12. Date Validator
// ==================================================================
function isValidDate(dateString) {
    const date = new Date(dateString);
    return !isNaN(date.getTime());
}

// console.log(isValidDate("2026-01-25"));     // true
// console.log(isValidDate("2026-13-45"));     // false


// ==================================================================
// 14. Generate Dates for the Next 7 Days (DD-MM-YYYY)
// ==================================================================
function getNextSevenDays() {
    const dates = [];
    const today = new Date();

    for (let i = 1; i <= 7; i++) {
        const d = new Date(today);
        d.setDate(today.getDate() + i);

        const day   = String(d.getDate()).padStart(2, '0');
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const year  = d.getFullYear();

        dates.push(`${day}-${month}-${year}`);
    }
    return dates;
}

// console.log(getNextSevenDays());


// ==================================================================
// 19. Current Date as ISO String (YYYY-MM-DD)
// ==================================================================
function getCurrentISODate() {
    const d = new Date();
    const year  = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day   = String(d.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
}

// console.log(getCurrentISODate());   // e.g. 2026-01-28


// ==================================================================
// 20. Get Number of Days in Any Month (handles leap years)
// ==================================================================
function getDaysInMonth(month, year) {
    // month: 1–12
    if (month < 1 || month > 12) return "Invalid month";
    
    return new Date(year, month, 0).getDate();
}

// Examples:
// console.log(getDaysInMonth(2, 2024));   // 29  (leap year)
// console.log(getDaysInMonth(2, 2025));   // 28
// console.log(getDaysInMonth(4, 2026));   // 30