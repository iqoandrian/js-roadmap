// Day 3 - Arrays & Objects
// File: arrays.js
// Topic: Array Fundamentals & Methods

console.log("=== ARRAYS IN JAVASCRIPT ===\n");

// 1. CREATING ARRAYS (Multiple ways)
console.log("1. CREATING ARRAYS");

// Method 1: Array Literal (most common)
const fruits = ["Apple", "Banana", "Orange"];
console.log("Fruits:", fruits);

// Method 2: Array Constructor
const numbers = new Array(1, 2, 3, 4, 5);
console.log("Numbers:", numbers);

// Method 3: Array.of()
const scores = Array.of(85, 92, 78, 90);
console.log("Scores:", scores);

// Method 4: From string
const nameArray = Array.from("Iqo");
console.log("Name as array:", nameArray);

console.log("");

// 2. ACCESSING & MODIFYING ELEMENTS
console.log("2. ACCESSING & MODIFYING ARRAY ELEMENTS");

const colors = ["Red", "Green", "Blue", "Yellow", "Purple"];

console.log("Original array:", colors);
console.log("First color:", colors[0]); // Red
console.log("Last color:", colors[colors.length - 1]); // Purple
console.log("Array length:", colors.length);

// Modify elements
colors[1] = "Lime Green"; // Change Green to Lime Green
colors.push("Black"); // Add to end
colors.unshift("White"); // Add to beginning

console.log("Modified array:", colors);

console.log("");

// 3. BASIC ARRAY METHODS
console.log("3. BASIC ARRAY METHODS");

const todoList = ["Learn JavaScript", "Practice Git", "Build Project"];

console.log("Original todo:", todoList);

// push() - Add to end
todoList.push("Take a break");
console.log("After push:", todoList);

// pop() - Remove from end
const removedItem = todoList.pop();
console.log(`Removed: "${removedItem}"`);
console.log("After pop:", todoList);

// shift() - Remove from beginning
const firstItem = todoList.shift();
console.log(`Shifted: "${firstItem}"`);
console.log("After shift:", todoList);

// unshift() - Add to beginning
todoList.unshift("Review Day 2");
console.log("After unshift:", todoList);

console.log("");

// 4. ARRAY ITERATION METHODS
console.log("4. ARRAY ITERATION METHODS");

const prices = [10000, 25000, 50000, 150000];

// forEach() - Execute function for each element
console.log("Prices (forEach):");
prices.forEach((price, index) => {
    console.log(`Item ${index + 1}: Rp${price.toLocaleString()}`);
});

// map() - Create new array by transforming each element
console.log("\nPrices with tax (10%):");
const pricesWithTax = prices.map(price => price * 1.1);
console.log(pricesWithTax);

// filter() - Create new array with elements that pass test
console.log("\nPrices above Rp30,000:");
const expensiveItems = prices.filter(price => price > 30000);
console.log(expensiveItems);

// find() - Find first element that passes test
console.log("\nFirst price above Rp20,000:");
const firstExpensive = prices.find(price => price > 20000);
console.log(firstExpensive);

console.log("");

// 5. MORE ARRAY METHODS
console.log("5. MORE ARRAY METHODS");

const data = [23, 45, 12, 67, 89, 34, 56];

// reduce() - Reduce array to single value
const sum = data.reduce((total, num) => total + num, 0);
console.log("Sum of data:", sum);
console.log("Average:", (sum / data.length).toFixed(2));

// sort() - Sort array elements
const sortedAsc = [...data].sort((a, b) => a - b); // Ascending
const sortedDesc = [...data].sort((a, b) => b - a); // Descending
console.log("Sorted ascending:", sortedAsc);
console.log("Sorted descending:", sortedDesc);

// slice() - Extract portion of array
const middlePart = data.slice(2, 5);
console.log("Slice (index 2 to 5):", middlePart);

// splice() - Add/Remove elements at specific position
const months = ["Jan", "Mar", "Apr", "Jun"];
months.splice(1, 0, "Feb"); // Add "Feb" at index 1
console.log("After splice (add):", months);
months.splice(4, 1, "May"); // Replace "Jun" with "May"
console.log("After splice (replace):", months);

console.log("");

// 6. MULTI-DIMENSIONAL ARRAYS
console.log("6. MULTI-DIMENSIONAL ARRAYS");

const ticTacToe = [
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["X", "O", "X"]
];

console.log("Tic Tac Toe Board:");
for (let row of ticTacToe) {
    console.log(row.join(" | "));
}

// Access specific cell
console.log("\nCenter cell:", ticTacToe[1][1]); // X

// Matrix operations
const matrixA = [[1, 2], [3, 4]];
const matrixB = [[5, 6], [7, 8]];

console.log("\nMatrix A:", matrixA);
console.log("Matrix B:", matrixB);

console.log("");

// 7. ARRAY DESTRUCTURING
console.log("7. ARRAY DESTRUCTURING");

const rgb = [255, 128, 64];

// Old way
const red = rgb[0];
const green = rgb[1];
const blue = rgb[2];

// New way (ES6)
const [r, g, b] = rgb;
console.log(`RGB: R=${r}, G=${g}, B=${b}`);

// Skipping elements
const [firstColor, , thirdColor] = colors;
console.log(`First: ${firstColor}, Third: ${thirdColor}`);

// Rest operator with destructuring
const [primary, secondary, ...others] = colors;
console.log(`Primary: ${primary}`);
console.log(`Secondary: ${secondary}`);
console.log(`Others: ${others}`);

console.log("");

// 8. PRACTICAL EXAMPLE: E-COMMERCE CART
console.log("8. PRACTICAL EXAMPLE: E-COMMERCE CART");

const cart = [
    { id: 1, name: "Laptop", price: 10000000, quantity: 1 },
    { id: 2, name: "Mouse", price: 250000, quantity: 2 },
    { id: 3, name: "Keyboard", price: 500000, quantity: 1 },
    { id: 4, name: "Monitor", price: 3000000, quantity: 1 }
];

console.log("🛒 Shopping Cart:");

// Calculate total using reduce
const cartTotal = cart.reduce((total, item) => {
    return total + (item.price * item.quantity);
}, 0);

console.log("Total: Rp" + cartTotal.toLocaleString());

// Find most expensive item
const mostExpensive = cart.reduce((max, item) => {
    return item.price > max.price ? item : max;
}, cart[0]);

console.log("Most expensive: " + mostExpensive.name);

// Filter items above certain price
const bigTicketItems = cart.filter(item => item.price > 1000000);
console.log("Big ticket items (" + bigTicketItems.length + "):");
bigTicketItems.forEach(item => {
    console.log(`  - ${item.name}: Rp${item.price.toLocaleString()}`);
});

// Map to create receipt items
const receiptItems = cart.map(item => ({
    product: item.name,
    subtotal: item.price * item.quantity,
    quantity: item.quantity
}));

console.log("\n🧾 Receipt:");
receiptItems.forEach((item, index) => {
    console.log(`${index + 1}. ${item.product} x${item.quantity}: Rp${item.subtotal.toLocaleString()}`);
});