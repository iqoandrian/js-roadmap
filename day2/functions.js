// Day 2 - Control Flow
// File: functions.js
// Topic: Functions in JavaScript

console.log("=== FUNCTIONS IN JAVASCRIPT ===\n");

// 1. FUNCTION DECLARATION (Hoisted - can be called before declaration)
console.log("1. FUNCTION DECLARATION");

function greet(name) {
    return `Hello, ${name}! 👋`;
}

console.log(greet("Iqo"));
console.log(greet("JavaScript"));

console.log("");

// 2. FUNCTION EXPRESSION (Not hoisted)
console.log("2. FUNCTION EXPRESSION");

const calculateArea = function(width, height) {
    return width * height;
};

console.log(`Rectangle area (5 x 10): ${calculateArea(5, 10)}`);
console.log(`Rectangle area (7 x 3): ${calculateArea(7, 3)}`);

console.log("");

// 3. ARROW FUNCTION (ES6+ Modern)
console.log("3. ARROW FUNCTION");

const add = (a, b) => a + b;
const square = x => x * x;
const sayHello = () => "Hello World!";

console.log(`Add 5 + 3: ${add(5, 3)}`);
console.log(`Square of 4: ${square(4)}`);
console.log(sayHello());

console.log("");

// 4. DEFAULT PARAMETERS
console.log("4. DEFAULT PARAMETERS");

function createUser(name, age = 18, isActive = true) {
    return {
        name,
        age,
        isActive,
        createdAt: new Date().toLocaleDateString()
    };
}

console.log("User with defaults:", createUser("Iqo"));
console.log("User with custom age:", createUser("Budi", 25));
console.log("User with all params:", createUser("Sari", 30, false));

console.log("");

// 5. REST PARAMETERS (...args)
console.log("5. REST PARAMETERS");

function sumAll(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

console.log(`Sum: ${sumAll(1, 2, 3)}`);
console.log(`Sum: ${sumAll(10, 20, 30, 40, 50)}`);

console.log("");

// 6. HIGHER-ORDER FUNCTIONS (Functions that take/return functions)
console.log("6. HIGHER-ORDER FUNCTIONS");

function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(`Double 5: ${double(5)}`);
console.log(`Triple 5: ${triple(5)}`);

console.log("");

// 7. PRACTICAL EXAMPLE: CALCULATOR FUNCTIONS
console.log("7. PRACTICAL EXAMPLE: CALCULATOR");

const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => b !== 0 ? a / b : "Error: Division by zero",
    power: (base, exp) => base ** exp,
    
    calculate: function(operation, a, b) {
        switch(operation) {
            case '+': return this.add(a, b);
            case '-': return this.subtract(a, b);
            case '*': return this.multiply(a, b);
            case '/': return this.divide(a, b);
            case '^': return this.power(a, b);
            default: return "Invalid operation";
        }
    }
};

console.log(`5 + 3 = ${calculator.calculate('+', 5, 3)}`);
console.log(`10 - 4 = ${calculator.calculate('-', 10, 4)}`);
console.log(`6 * 7 = ${calculator.calculate('*', 6, 7)}`);
console.log(`20 / 5 = ${calculator.calculate('/', 20, 5)}`);
console.log(`2 ^ 8 = ${calculator.calculate('^', 2, 8)}`);

console.log("");

// 8. RECURSIVE FUNCTIONS
console.log("8. RECURSIVE FUNCTIONS");

function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(`Factorial of 5: ${factorial(5)}`);
console.log(`Fibonacci(6): ${fibonacci(6)}`);

console.log("");

// 9. CALLBACK FUNCTIONS
console.log("9. CALLBACK FUNCTIONS");

function processUserInput(name, callback) {
    console.log(`Processing: ${name}`);
    callback(name);
}

function greetUser(name) {
    console.log(`Welcome, ${name}!`);
}

function logUser(name) {
    console.log(`User ${name} logged at ${new Date().toLocaleTimeString()}`);
}

processUserInput("Iqo", greetUser);
processUserInput("Budi", logUser);

console.log("");

// 10. REAL-WORLD EXAMPLE: E-COMMERCE CHECKOUT
console.log("10. REAL-WORLD EXAMPLE: E-COMMERCE CHECKOUT");

function calculateTotal(items, discount = 0) {
    let subtotal = 0;
    
    for (let item of items) {
        subtotal += item.price * item.quantity;
    }
    
    const tax = subtotal * 0.11; // 11% tax
    const discountAmount = subtotal * (discount / 100);
    const total = subtotal + tax - discountAmount;
    
    return {
        subtotal: Math.round(subtotal),
        tax: Math.round(tax),
        discount: Math.round(discountAmount),
        total: Math.round(total)
    };
}

const orderItems = [
    { name: "T-shirt", price: 150000, quantity: 2 },
    { name: "Jeans", price: 350000, quantity: 1 },
    { name: "Shoes", price: 500000, quantity: 1 }
];

const receipt = calculateTotal(orderItems, 10); // 10% discount

console.log("🧾 RECEIPT:");
console.log(`Subtotal: Rp${receipt.subtotal.toLocaleString()}`);
console.log(`Tax (11%): Rp${receipt.tax.toLocaleString()}`);
console.log(`Discount: -Rp${receipt.discount.toLocaleString()}`);
console.log(`TOTAL: Rp${receipt.total.toLocaleString()}`);