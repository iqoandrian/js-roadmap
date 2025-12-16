// Day 1 - JS Fundamental
// File: operators.js
// Topic: Arithmetic Operators

console.log("=== ARITHMETIC OPERATORS ===");

let x = 10;
let y = 7;

// Basic operations
console.log("x =", x);
console.log("y =", y);
console.log("");

console.log("1. Addition (+):", x + y);
console.log("2. Subtaction (-):", x - y);
console.log("3. Multiplication (*):", x * y);
console.log("4. Division (/):", x / y);
console.log("5. Modules (%):", x % y);
console.log("6. Exponentation (**):", x ** 2);
console.log("");

// Increment/Decrement
let counter = 5;
console.log("Counter awal:", counter);
counter++;
console.log("After counter++:", counter);
counter--;
console.log("After counter--:", counter);
console.log("");

//Assignment operators
let total = 0;
total += x; // total = total + x
console.log("total += x:", total);
total *= 2; // total = total * 2
console.log("total *= 2:", total);