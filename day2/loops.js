// Day 2 - Control Flow
// File: loops.js
// Topic: For, While, Do-While Loops

console.log("=== LOOPS IN JAVASCRIPT ===\n");

// 1. FOR LOOP (Traditional)
console.log("1. FOR LOOP - Count 1 to 5");
for (let i = 1; i <= 5; i++) {
    console.log(`Count: ${i}`);
}

console.log("");

// 2. FOR LOOP - Array iteration
console.log("2. FOR LOOP - Array Iteration");
let fruits = ["Apple", "Banana", "Orange", "Mango"];

console.log("My fruits:");
for (let i = 0; i < fruits.length; i++) {
    console.log(`${i + 1}. ${fruits[i]}`);
}

console.log("");

// 3. FOR...OF LOOP (Modern - for arrays)
console.log("3. FOR...OF LOOP");
let scores = [85, 92, 78, 90, 88];
let total = 0;

for (let score of scores) {
    total += score;
    console.log(`Score: ${score}`);
}

let average = total / scores.length;
console.log(`📊 Average score: ${average}`);

console.log("");

// 4. FOR...IN LOOP (for objects)
console.log("4. FOR...IN LOOP - Object Properties");
let person = {
    name: "Iqo",
    age: 20,
    city: "Jakarta",
    hobby: "Coding"
};

console.log("Person details:");
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

console.log("");

// 5. WHILE LOOP
console.log("5. WHILE LOOP - Countdown");
let countdown = 5;

while (countdown > 0) {
    console.log(`🚀 Launch in: ${countdown}`);
    countdown--;
}
console.log("🔥 LIFTOFF!");

console.log("");

// 6. DO...WHILE LOOP (executes at least once)
console.log("6. DO...WHILE LOOP");
let attempts = 0;
const maxAttempts = 3;
let correctPassword = "secret123";
let userInput;

do {
    attempts++;
    // Simulate user input (in real app, this would be from prompt)
    userInput = attempts === 2 ? "secret123" : "wrong";
    
    if (userInput === correctPassword) {
        console.log(`✅ Access granted on attempt ${attempts}!`);
    } else {
        console.log(`❌ Wrong password (attempt ${attempts}/${maxAttempts})`);
    }
} while (attempts < maxAttempts && userInput !== correctPassword);

console.log("");

// 7. LOOP CONTROL: BREAK & CONTINUE
console.log("7. BREAK & CONTINUE");

console.log("Finding first score above 90:");
for (let score of scores) {
    if (score > 90) {
        console.log(`Found: ${score}`);
        break; // Exit loop immediately
    }
    console.log(`Checking: ${score} (not above 90)`);
}

console.log("\nPrinting only odd numbers (1-10):");
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; // Skip even numbers
    }
    console.log(`Odd: ${i}`);
}

console.log("");

// 8. PRACTICAL EXAMPLE: SHOPPING CART
console.log("8. PRACTICAL EXAMPLE: SHOPPING CART");

let cart = [
    { name: "Laptop", price: 10000000, quantity: 1 },
    { name: "Mouse", price: 250000, quantity: 2 },
    { name: "Keyboard", price: 500000, quantity: 1 },
    { name: "Monitor", price: 3000000, quantity: 1 }
];

console.log("🛒 Shopping Cart Items:");
let cartTotal = 0;

for (let item of cart) {
    let itemTotal = item.price * item.quantity;
    cartTotal += itemTotal;
    
    console.log(`${item.name} x${item.quantity}: Rp${itemTotal.toLocaleString()}`);
}

console.log(`\n💰 Total: Rp${cartTotal.toLocaleString()}`);

// Apply discount if total > 5 million
if (cartTotal > 5000000) {
    let discount = cartTotal * 0.1; // 10% discount
    let finalTotal = cartTotal - discount;
    
    console.log(`🎉 Discount (10%): -Rp${discount.toLocaleString()}`);
    console.log(`💵 Final Total: Rp${finalTotal.toLocaleString()}`);
}

console.log("");

// 9. NESTED LOOPS
console.log("9. NESTED LOOPS - Multiplication Table");

console.log("Multiplication Table (1-3):");
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log("---");
}