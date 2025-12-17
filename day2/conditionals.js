// Day 2 - Control Flow
// File: conditionals.js
// Topic: If/Else, Switch, Ternary

console.log("=== CONDITIONAL STATEMENTS ===");

// 1. BASIC IF/ELSE
console.log("1. BASIC IF/ELSE");
let temprature = 25;

if (temprature > 30) {
    console.log("Panas Banget! Stay Hydrated!");
} else if(temprature > 20) {
    console.log("Cuaca Nyaman!");
} else if(temprature > 10) {
    console.log("Sedikit Dingin, Pakai jaket!");
} else {
    console.log("dingin banget! Stay Warm!");
}

console.log("");

// 2. TERNARY OPERATOR (Shorthand If/Else)
console.log("2. TERNARY OPERATOR");
let age = 20;
let canVote = age >= 17 ? "Bisa milih!" : "Belum cukup umur!";
console.log(`Umur ${age}: ${canVote}`);

// Multiply ternary (not recommended, but good to know)
let score = 85;
let grade = score >= 90 ? "A" :
score >= 80 ? "B":
score >= 70 ? "C":
score >= 60 ? "D":
"F";
console.log(`Score ${score}: Grade ${grade}`);
console.log("");

// 3. SWITCH CASE
console.log("3. SWITCH CASE");
let day = "Monday";
let mood;

switch (day) {
    case "Monday":
        mood = "Ugh, Monday..";
        break;
    case "Friday":
        mood = "Finally, Friday!";
        break;
    case "Saturday":
    case "Sunday":
        mood = "Weekend vibes";
        break;
    default:
        mood = "Regular day";
}

console.log(`Hari ${day}: ${mood}`);
console.log("");

// 4. PRACTICAL EXAMPLE: LOGIN SYSTEM
console.log("4. PRACTICAL EXAMPLE: LOGIN SYSTEM");

let username = "iqo";
let password = "password123";
let isLoggedIn = false;

if (username && password) {
    if (username === "iqo" && password === "password123"){
        isLoggedIn = true;
        console.log("Login successfully, Welcome back, " + username + "!");
    } else {
        console.log("Invalid Credentials!");
    }
} else {
    console.log("Please enter username and password!");
}

// Check access level
let = userRole = "Admin";
let hasAccess = false;

if (isLoggedIn) {
    switch(userRole) {
        case "admin":
            hasAccess = true;
            console.log("Admin access Granted");
            break;
        case "moderator":
            hasAccess = true;
            console.log("Moderator access Granted");
            break;
        case "user":
            hasAccess = true;
            console.log("User access Granted");
            break;
        default:
            console.log("Unknown role!");
    }
} else {
    console.log("Please Login first!");
}

console.log("");

// 5. NESTED CONDITIONALS
console.log("5. NESTED CONDITIONALS");

let hasAccount = true;
let accountBalance = 15000;
let itemPrice = 200000;

if (hasAccount) {
    if (accountBalance >= itemPrice) {
        console.log("Purchase successfull!");
        accountBalance -= itemPrice;
        console.log(`Remaining balance: Rp${accountBalance.toLocaleString()}`);
    } else {
        let shortage = itemPrice - accountBalance;
        console.log(`Insufficent balance! Short: Rp${shortage.toLocaleString()}`);
    }
} else {
    console.log("Please create an account first!");
}