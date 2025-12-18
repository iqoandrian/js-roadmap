// Day 3 - Arrays & Objects
// File: objects.js
// Topic: Object Fundamentals & Methods

console.log("=== OBJECTS IN JAVASCRIPT ===\n");

// 1. CREATING OBJECTS (Multiple ways)
console.log("1. CREATING OBJECTS");

// Method 1: Object Literal (most common)
const person = {
    name: "Iqo",
    age: 20,
    city: "Jakarta",
    isStudent: true,
    hobbies: ["Coding", "Gaming", "Reading"]
};
console.log("Person object:", person);

// Method 2: Object Constructor
const car = new Object();
car.brand = "Toyota";
car.model = "Camry";
car.year = 2022;
console.log("Car object:", car);

// Method 3: Object.create()
const studentPrototype = {
    study: function() {
        return `${this.name} is studying!`;
    }
};
const student = Object.create(studentPrototype);
student.name = "Budi";
student.major = "Computer Science";
console.log("Student object:", student);
console.log(student.study());

console.log("");

// 2. ACCESSING OBJECT PROPERTIES
console.log("2. ACCESSING OBJECT PROPERTIES");

const product = {
    id: 101,
    name: "Laptop Gaming",
    price: 15000000,
    inStock: true,
    specifications: {
        processor: "Intel i7",
        ram: "16GB",
        storage: "512GB SSD"
    }
};

// Dot notation
console.log("Product name:", product.name);
console.log("Processor:", product.specifications.processor);

// Bracket notation (useful for dynamic keys)
const key = "price";
console.log("Price:", product[key]);

// Bracket notation with special characters
const user = {
    "first-name": "Iqo", // Property with dash
    "last-name": "Pratama"
};
console.log("First name:", user["first-name"]);

console.log("");

// 3. MODIFYING OBJECTS
console.log("3. MODIFYING OBJECTS");

const account = {
    username: "iqo123",
    email: "iqo@example.com"
};

// Add new properties
account.balance = 500000;
account.isActive = true;
console.log("After adding properties:", account);

// Modify existing properties
account.balance += 250000;
console.log("After depositing:", account);

// Delete properties
delete account.isActive;
console.log("After deleting isActive:", account);

// Check if property exists
console.log("Has balance?", "balance" in account);
console.log("Has isActive?", account.hasOwnProperty("isActive"));

console.log("");

// 4. OBJECT METHODS
console.log("4. OBJECT METHODS");

const calculator = {
    // Properties
    brand: "Casio",
    model: "FX-991EX",
    
    // Methods (functions inside objects)
    add: function(a, b) {
        return a + b;
    },
    
    // Shorthand method syntax (ES6)
    subtract(a, b) {
        return a - b;
    },
    
    // Arrow function as method (be careful with 'this')
    multiply: (a, b) => a * b,
    
    // Method using 'this' keyword
    getInfo() {
        return `${this.brand} ${this.model}`;
    },
    
    // Complex method
    calculate(operation, a, b) {
        switch(operation) {
            case '+': return this.add(a, b);
            case '-': return this.subtract(a, b);
            case '*': return this.multiply(a, b);
            case '/': return b !== 0 ? a / b : "Error";
            default: return "Invalid operation";
        }
    }
};

console.log("Calculator:", calculator.getInfo());
console.log("5 + 3 =", calculator.add(5, 3));
console.log("10 - 4 =", calculator.subtract(10, 4));
console.log("6 * 7 =", calculator.calculate('*', 6, 7));

console.log("");

// 5. OBJECT ITERATION
console.log("5. OBJECT ITERATION");

const employee = {
    id: "E001",
    name: "Sarah",
    position: "Frontend Developer",
    salary: 15000000,
    skills: ["JavaScript", "React", "Git"]
};

console.log("Employee Properties:");
// for...in loop
for (let key in employee) {
    console.log(`${key}: ${employee[key]}`);
}

console.log("\nObject.keys():", Object.keys(employee));
console.log("Object.values():", Object.values(employee));
console.log("Object.entries():", Object.entries(employee));

// Iterate using Object.entries()
console.log("\nUsing Object.entries():");
Object.entries(employee).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});

console.log("");

// 6. OBJECT DESTRUCTURING
console.log("6. OBJECT DESTRUCTURING");

const game = {
    title: "The Legend of Zelda",
    developer: "Nintendo",
    year: 2023,
    platforms: ["Switch"],
    price: 699000
};

// Basic destructuring
const { title, developer, year } = game;
console.log(`Game: ${title} by ${developer} (${year})`);

// Destructuring with new variable names
const { title: gameTitle, price: gamePrice } = game;
console.log(`${gameTitle} costs Rp${gamePrice.toLocaleString()}`);

// Destructuring with default values
const { rating = 5, genre = "Adventure" } = game;
console.log(`Rating: ${rating}/5, Genre: ${genre}`);

// Nested destructuring
const { platforms: [mainPlatform] } = game;
console.log(`Main platform: ${mainPlatform}`);

console.log("");

// 7. SPREAD & REST OPERATORS WITH OBJECTS
console.log("7. SPREAD & REST OPERATORS WITH OBJECTS");

// Spread operator (...) - Copying and merging objects
const defaultSettings = {
    theme: "light",
    notifications: true,
    language: "en"
};

const userSettings = {
    ...defaultSettings, // Copy default settings
    theme: "dark",      // Override theme
    fontSize: "large"   // Add new property
};

console.log("Default settings:", defaultSettings);
console.log("User settings:", userSettings);

// Merging multiple objects
const personalInfo = { name: "Iqo", age: 20 };
const contactInfo = { email: "iqo@example.com", phone: "0812345678" };
const completeProfile = { ...personalInfo, ...contactInfo };
console.log("Complete profile:", completeProfile);

// Rest operator in destructuring
const { theme, ...otherSettings } = userSettings;
console.log(`Theme: ${theme}`);
console.log("Other settings:", otherSettings);

console.log("");

// 8. PRACTICAL EXAMPLE: USER MANAGEMENT SYSTEM
console.log("8. PRACTICAL EXAMPLE: USER MANAGEMENT SYSTEM");

const userDatabase = {
    users: [
        {
            id: 1,
            username: "iqo_pratama",
            email: "iqo@example.com",
            profile: {
                fullName: "Iqo Pratama",
                age: 20,
                city: "Jakarta"
            },
            preferences: {
                theme: "dark",
                language: "id",
                notifications: true
            }
        },
        {
            id: 2,
            username: "budi_santoso",
            email: "budi@example.com",
            profile: {
                fullName: "Budi Santoso",
                age: 25,
                city: "Bandung"
            },
            preferences: {
                theme: "light",
                language: "en",
                notifications: false
            }
        }
    ],
    
    // Method to find user by ID
    findUserById(id) {
        return this.users.find(user => user.id === id);
    },
    
    // Method to add new user
    addUser(newUser) {
        const id = this.users.length + 1;
        this.users.push({ id, ...newUser });
        return id;
    },
    
    // Method to update user
    updateUser(id, updates) {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex !== -1) {
            this.users[userIndex] = { ...this.users[userIndex], ...updates };
            return true;
        }
        return false;
    },
    
    // Method to get all usernames
    getAllUsernames() {
        return this.users.map(user => user.username);
    },
    
    // Method to get statistics
    getStats() {
        return {
            totalUsers: this.users.length,
            cities: [...new Set(this.users.map(user => user.profile.city))],
            themes: this.users.reduce((acc, user) => {
                acc[user.preferences.theme] = (acc[user.preferences.theme] || 0) + 1;
                return acc;
            }, {})
        };
    }
};

// Test the user management system
console.log("👥 User Management System");
console.log("All usernames:", userDatabase.getAllUsernames());

// Find user
const user1 = userDatabase.findUserById(1);
console.log("\nUser 1:", user1);

// Add new user
const newUserId = userDatabase.addUser({
    username: "sari_wijaya",
    email: "sari@example.com",
    profile: {
        fullName: "Sari Wijaya",
        age: 22,
        city: "Surabaya"
    },
    preferences: {
        theme: "light",
        language: "id",
        notifications: true
    }
});

console.log("\nAdded user with ID:", newUserId);
console.log("Total users:", userDatabase.getStats().totalUsers);

// Update user
userDatabase.updateUser(1, {
    profile: {
        ...user1.profile,
        age: 21 // Birthday!
    }
});

console.log("\nUpdated User 1:", userDatabase.findUserById(1));

// Get statistics
console.log("\n📊 Statistics:");
console.log(userDatabase.getStats());