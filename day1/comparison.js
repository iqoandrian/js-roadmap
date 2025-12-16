// Day 1 - JS Fundamental
// File: comparison.js
// Topic: Comparison & Logical Operators

console.log("=== COMPARISON OPERATORS ===");

let a = 10;
let b = 7;
let c = "10";

console.log("a =", a, "(number)");
console.log("b =", b, "(number)");
console.log("c =", c, "(string)");
console.log("");

// Equality comparisons
console.log("1. a == c  (loose equality):", a == c);
console.log("2. a === c (strict equality):", a === c);
console.log("3. a != c  (loose inequality):", a != c);
console.log("4. a !== c (strict inequality):", a !== c);
console.log("");

// Relational comparisons
console.log("5. a > b:", a > b);
console.log("6. a < b:", a < b);
console.log("7. a >= b:", a >= b);
console.log("8. a <= b:", a <= b);
console.log("");

console.log("=== LOGICAL OPERATORS ===");

let isAdult = true;
let hasLicense = false;

console.log("isAdult:", isAdult);
console.log("hasLicense:", hasLicense);
console.log("");

console.log("AND (&&): isAdult && hasLicense =", isAdult && hasLicense);
console.log("OR (||): isAdult || hasLicense =", isAdult || hasLicense);
console.log("NOT (!): !isAdult =", !isAdult);
console.log("");

// Real example
let canDrive = isAdult && hasLicense;
console.log("Can drive?", canDrive ? "Yes" : "No");