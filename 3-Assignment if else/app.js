

// ---------------------------advance javascript if else statements----------------------------------

// ---------------------------------------1------------------------------------------Age-Based Grade Check

// let obtainmarks = +prompt("Enter your full obtained marks:")
// if (obtainmarks >= 80 && obtainmarks <=100) {
//     alert("You got high marks in exam.")
// }
// else if (obtainmarks >= 50 && obtainmarks <80) {
//     alert("You are pass.")
// }
// else if (obtainmarks >= 0 && obtainmarks <50) {
//     alert("You are fail.")
// }
// else {
//     alert("You entered invalid marks.")
//     alert("Please enter valid marks.")
// }

// ---------------------------------------2-------------------------Discount Eligibility Based on Age and Membership

// let age = +prompt("Enter your age:");
// let premium = prompt("Are you a Premium Member? (yes/no)");
// if (age >= 60 && premium == "yes" || premium == "Yes") {
//     discount = "Senior Premium Discount";
//     alert(discount)
// }
// else if (age >= 60) {
//     discount = "Senior Discount";
//     alert(discount)
// }
// else if (premium == "yes" || premium == "Yes") {
//     discount = "Premium Discount";
//     alert(discount)
// }
// else {
//     discount = "No Discount";
//     alert(discount)
// }

// -----------------------------------------3---------------Login and Email Verification

// let login = prompt("Are you logged in your email? (type yes or no)")
// let Verify = prompt("Is your email verified? (type yes or no)")
// 
// let loggedin
// let verified
// 
// if(login == "yes" || login == "Yes")
// {
    // loggedin = true
// }
// else{
    // loggedin = false
// }
// 
// if(Verify == "yes" || Verify == "Yes")
// {
    // verified = true
// }
// else{
    // verified = false
// }
// 
// if(loggedin == true && verified == true)
// {
    // alert("Access granted.")
// }
// else if (loggedin == true && verified == false)
// {
    // alert("Please, Verify your email.")
// }
// else{
    // alert("Please, log in.")
// }


//------------------------------------4------------------------Contest Eligibility

// let name = prompt("Enter you name:")
// let age = +prompt("Enter your age:")
// let country = prompt("Enter your country name:")
// if (age >=18 && age <=35 && country == "Pakistan" || country == "India"){
//     alert("Wellcome " + name + " You are eligible")
// }
// else{
//     alert("You are banned")
// }

// _____-----------------------------5------------------------Subscription Access Check


// let login = prompt("are you logged in. Answer in | yes or no |")
// let plan = prompt("are you on Premium plan or free plan.")
// let loggedin
// let premium

// if(login == "yes" || login == "Yes"){
//     loggedin = true
// }
// else {
//     loggedin = false
// }
// if(plan == "premium" || plan == "Premium"){
//     premium = true
// }
// else{
//     premium = false
// }
// if(loggedin == true && premium == true){
//     alert("Welcome Premium User")

// }
// else if(loggedin == true && premium == false){
//     alert("Welcome Free User")
// }
// else if(loggedin == false){
//     alert("Please log in to continue")
// }
// else{
//     alert("Invalid subscription")
// }   


// ___---___-----------------6------------------------Product Purchase Validation


// let price = +prompt("Enter product price:")
// let stock = +prompt("How many product quantity you have?")
// let member = prompt("Are you a member? (yes/no)")
// let ismember
// if(member == "yes" || member == "Yes"){
//     ismember = true
// }
// else{
//     ismember = false
// }
// if(price >= 1000 && stock > 0 && ismember == true){
//     alert("Buy now with discount")
// }
// else if(price < 1000 && stock > 0){
//     alert("Buy now")
// }
// else if(stock === 0){
//     alert("Out of stock")
// }   
// else{
//     alert("Invalid product")
// }

// -----------------------------------------7---------------Work Hours Check


// let worked = +prompt("Enter hours worked in this week:")
// let weekend = prompt("Is it weekend? (yes/no)")
// let isweekend
// if(weekend == "yes" || weekend == "Yes"){
//     isweekend = true
// }
// else{
//     isweekend = false
// }
// if(worked > 40 && isweekend == false){
//     alert("Overtime")
// }
// else if(worked > 0 && isweekend == true){
//     alert("Weekend work")
// }
// else if(worked <= 40){
//     alert("Regular hours")
// }
// else if(worked === 0){
//     alert("No work")
// }
// else{
//     alert("Invalid input")
// }


// ------------------8-----------------------Age and Gender Classification


// let age = +prompt("How old are you?")
// let gender = prompt("What is your gender? (male/female)")
// if(age >= 13 && age <= 19 && gender == "male")
// {
//     alert("Teen Male")
// }
// else if(age >= 13 && age <= 19 && gender == "female"){
//     alert("Teen Female")
// }
// else if(age >= 20){
//     alert("Adult")
// }
// else if(age < 13){
//     alert("Child")
// }
// else{
//     alert("Invalid input")
// }

// -------------------------------------9------------------------Weather Warning System


// let temperature = +prompt("Enter the temperature in centigrade:")
// let humidity = +prompt("Enter the humidity percentage:")
// if(temperature >= 40 && humidity >= 60){
//     alert("Heatwave Alert")
// }   
// else if(temperature >= 40 && humidity < 60){
//     alert("Hot and Dry")
// }
// else if(temperature <= 20){
//     alert("Cool Weather")
// }
// else{
//     alert("Moderate")
// }

// ------------------------------------10------------------------Score Grading System


// let score = +prompt("Enter your score (0-100):")
// if(score >= 90 && score <= 100){
//     alert("Excellent")
// }
// else if(score >= 70 && score < 90){
//     alert("Good")
// }
// else if(score >= 50 && score < 70){
//     alert("Average")
// }
// else if(score >= 30 && score < 50){
//     alert("Poor")
// }
// else if(score >= 0 && score < 30){
//     alert("Fail")
// }
// else{
//     alert("Invalid Score")
// }


// -------------------------------------11------------------------Course Access Control


// let loggedIn = prompt("Are you logged in? (yes/no)")
// let enrolled = prompt("Are you enrolled in the course? (yes/no)")
// let banned = prompt("Are you banned? (yes/no)")
// if(banned == "yes" || banned == "Yes"){
//     alert("User is banned")
// }
// else if(loggedIn == "yes" || loggedIn == "Yes"){
//     if(enrolled == "yes" || enrolled == "Yes"){
//         alert("Access granted")
//     }
//     else{
//         alert("Enroll in course first")
//     }
// }
// else{
//     alert("Please log in")
// }

// -------------------------------------12------------------------Driving Conditions


// let speed = +prompt("Enter your speed (km/h):")
// let license = prompt("Do you have a valid driving license? (yes/no)")
// if(speed > 120){
//     alert("License suspended")
// }
// else if(speed > 100 && speed <= 120){
//     alert("Warning")
// }
// else if(speed <= 100 && (license == "yes" || license == "Yes")){
//     alert("Normal driving")
// }
// else{
//     alert("Driving without license")
// }


// -------------------------------------13------------------------Order Processing Status


// let payment = prompt("Enter payment status (complete/pending/failed):")
// let shipped = prompt("Is the order shipped? (yes/no):")
// if(payment == "complete" || payment == "Complete"){
//     if(shipped == "yes" || shipped == "Yes"){
//         alert("Order on the way")
//     }
//     else{
//         alert("Preparing your order")
//     }
// }
// else if(payment == "pending" || payment == "Pending"){
//     alert("Awaiting payment")
// }
// else if(payment == "failed" || payment == "Failed"){
//     alert("Payment failed")
// }
// else{
//     alert("Invalid payment status")
// }

// -------------------------------------14------------------------Battery Status Checker


// let batteryLevel = +prompt("Enter battery level (0-100):")
// let isCharging = prompt("Is the device charging? (yes/no):")
// if(batteryLevel === 100){
//     alert("Fully Charged")
// }
// else if(batteryLevel < 100 && (isCharging == "yes" || isCharging == "Yes")){
//     alert("Charging...")
// }
// else if(batteryLevel < 20 && (isCharging == "no" || isCharging == "No")){
//     alert("Low Battery")
// }
// else{
//     alert("Battery OK")
// }


// -------------------------------------15------------------------Browser and Device Compatibility Check

// let browser = prompt("Enter your browser name (Chrome/Firefox/Safari/Edge):")
// let device = prompt("Enter your device type (Desktop/Mobile):")
// if(browser == "Chrome" || browser == "chrome"){
//     if(device == "Desktop" || device == "desktop"){
//         alert("Full features enabled")
//     }
//     else if(device == "Mobile" || device == "mobile"){
//         alert("Limited mobile features")
//     }
//     else{
//         alert("Unknown device type")
//     }
// }
// else{
//     alert("Please switch to Chrome")
// }