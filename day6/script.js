// Day 6 - Modern JavaScript (ES6+)
// Fitur-fitur keren yang bikin coding lebih mudah!

console.log("⚡ Day 6 - Modern JavaScript Features!");

// ============================================
// 1. LET & CONST (Gantikan VAR)
// ============================================

function demoLetConst() {
    const output = document.getElementById('output1');
    output.innerHTML = '';
    
    // MASALAH dengan var (hoisting & function scope)
    output.innerHTML += '=== MASALAH dengan VAR ===\n';
    
    if (true) {
        var oldVar = "Saya var (function scope)";
        let modernLet = "Saya let (block scope)";
        const modernConst = "Saya const (block scope)";
    }
    
    output.innerHTML += `Di luar block: ${oldVar}\n`; // MASIH ADA
    output.innerHTML += `Di luar block: ${typeof modernLet}\n`; // undefined
    output.innerHTML += `Di luar block: ${typeof modernConst}\n\n`; // undefined
    
    // KEUNTUNGAN let & const
    output.innerHTML += '=== KEUNTUNGAN let & const ===\n';
    
    let counter = 0;
    counter = 1; // Bisa di-reassign
    output.innerHTML += `Counter: ${counter}\n`;
    
    const PI = 3.14;
    // PI = 3.15; // ERROR! const tidak bisa di-reassign
    output.innerHTML += `PI: ${PI} (tidak bisa diubah)\n`;
    
    // const untuk object/array (reference tetap, content bisa diubah)
    const person = { name: "Iqo", age: 20 };
    person.age = 21; // BISA! karena reference sama
    // person = { name: "Budi" }; // ERROR! reference berubah
    output.innerHTML += `Person: ${JSON.stringify(person)}\n`;
    
    output.innerHTML += '\n💡 Gunakan: const > let > var';
}

// ============================================
// 2. TEMPLATE LITERALS
// ============================================

function demoTemplateLiterals() {
    const output = document.getElementById('output2');
    output.innerHTML = '';
    
    const name = "Iqo";
    const age = 20;
    const city = "Jakarta";
    
    // OLD WAY: String concatenation
    const oldWay = "Nama: " + name + ", Umur: " + age + ", Kota: " + city;
    
    // MODERN WAY: Template Literals
    const modernWay = `Nama: ${name}, Umur: ${age}, Kota: ${city}`;
    
    output.innerHTML += '=== OLD WAY (concatenation) ===\n';
    output.innerHTML += oldWay + '\n\n';
    
    output.innerHTML += '=== MODERN WAY (template literals) ===\n';
    output.innerHTML += modernWay + '\n\n';
    
    // FITUR TAMBAHAN template literals
    output.innerHTML += '=== FITUR LAINNYA ===\n';
    
    // Multi-line strings
    const multiLine = `
    Ini string
    dengan multiple
    lines tanpa perlu
    escape characters!
    `;
    output.innerHTML += multiLine + '\n';
    
    // Expressions dalam template
    const price = 10000;
    const quantity = 5;
    const total = `Total: Rp${price * quantity}`;
    output.innerHTML += total + '\n';
    
    // Function calls
    const greeting = `Halo, ${getName().toUpperCase()}!`;
    output.innerHTML += greeting + '\n';
}

function getName() {
    return "iqo pratama";
}

// ============================================
// 3. DESTRUCTURING
// ============================================

function demoDestructuring() {
    const output = document.getElementById('output3');
    output.innerHTML = '';
    
    // OBJECT DESTRUCTURING
    const user = {
        id: 1,
        username: "iqo123",
        email: "iqo@example.com",
        profile: {
            fullName: "Iqo Pratama",
            age: 20,
            city: "Jakarta"
        }
    };
    
    // OLD WAY
    const oldUsername = user.username;
    const oldEmail = user.email;
    
    // MODERN WAY
    const { username, email, profile: { fullName } } = user;
    
    output.innerHTML += '=== OBJECT DESTRUCTURING ===\n';
    output.innerHTML += `Username: ${username}\n`;
    output.innerHTML += `Email: ${email}\n`;
    output.innerHTML += `Full Name: ${fullName}\n\n`;
    
    // ARRAY DESTRUCTURING
    const fruits = ["Apple", "Banana", "Orange", "Mango"];
    
    // OLD WAY
    const firstOld = fruits[0];
    const secondOld = fruits[1];
    
    // MODERN WAY
    const [first, second, ...rest] = fruits;
    
    output.innerHTML += '=== ARRAY DESTRUCTURING ===\n';
    output.innerHTML += `First: ${first}\n`;
    output.innerHTML += `Second: ${second}\n`;
    output.innerHTML += `Rest: ${rest.join(', ')}\n\n`;
    
    // DESTRUCTURING FUNCTION PARAMETERS
    function displayUser({ username, email, profile: { age } }) {
        return `${username} (${email}) - ${age} tahun`;
    }
    
    output.innerHTML += '=== DESTRUCTURING PARAMETERS ===\n';
    output.innerHTML += displayUser(user);
}

// ============================================
// 4. SPREAD & REST OPERATORS
// ============================================

function demoSpreadRest() {
    const output = document.getElementById('output4');
    output.innerHTML = '';
    
    // SPREAD OPERATOR (...)
    output.innerHTML += '=== SPREAD OPERATOR ===\n';
    
    // Copy array
    const original = [1, 2, 3];
    const copy = [...original];
    copy.push(4);
    output.innerHTML += `Original: ${original}\n`;
    output.innerHTML += `Copy: ${copy}\n`;
    
    // Merge arrays
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const merged = [...arr1, ...arr2];
    output.innerHTML += `Merged: ${merged}\n`;
    
    // Copy object
    const obj1 = { a: 1, b: 2 };
    const obj2 = { ...obj1, c: 3 };
    output.innerHTML += `Obj2: ${JSON.stringify(obj2)}\n\n`;
    
    // REST OPERATOR (...)
    output.innerHTML += '=== REST OPERATOR ===\n';
    
    // Rest parameters
    function sum(...numbers) {
        return numbers.reduce((total, num) => total + num, 0);
    }
    
    output.innerHTML += `Sum: ${sum(1, 2, 3, 4, 5)}\n`;
    
    // Rest dalam destructuring
    const [first, second, ...others] = [10, 20, 30, 40, 50];
    output.innerHTML += `First: ${first}, Second: ${second}, Others: ${others}\n`;
    
    const { a, ...restProps } = { a: 1, b: 2, c: 3 };
    output.innerHTML += `A: ${a}, Rest: ${JSON.stringify(restProps)}`;
}

// ============================================
// 5. DEFAULT PARAMETERS
// ============================================

function demoDefaultParams() {
    const output = document.getElementById('output5');
    output.innerHTML = '';
    
    // OLD WAY
    function greetOld(name) {
        name = name || "Guest"; // Jika name falsy, pakai "Guest"
        return `Hello, ${name}!`;
    }
    
    // MODERN WAY
    function greetNew(name = "Guest", greeting = "Hello") {
        return `${greeting}, ${name}!`;
    }
    
    output.innerHTML += '=== OLD WAY (logical OR) ===\n';
    output.innerHTML += greetOld() + '\n';
    output.innerHTML += greetOld("Iqo") + '\n';
    output.innerHTML += greetOld("") + '\n\n'; // Masih "Guest"
    
    output.innerHTML += '=== MODERN WAY (default params) ===\n';
    output.innerHTML += greetNew() + '\n';
    output.innerHTML += greetNew("Iqo") + '\n';
    output.innerHTML += greetNew("Iqo", "Halo") + '\n';
    output.innerHTML += greetNew(undefined, "Hi") + '\n'; // Masih pakai default name
    
    // DEFAULT PARAMS dengan expressions
    function createUser(name, id = generateId(), createdAt = new Date()) {
        return {
            name,
            id,
            createdAt: createdAt.toLocaleDateString()
        };
    }
    
    function generateId() {
        return 'USER_' + Math.random().toString(36).substr(2, 9);
    }
    
    output.innerHTML += '\n=== DEFAULT DENGAN EXPRESSION ===\n';
    output.innerHTML += JSON.stringify(createUser("Iqo"), null, 2);
}

// ============================================
// 6. ARROW FUNCTIONS
// ============================================

function demoArrowFunctions() {
    const output = document.getElementById('output6');
    output.innerHTML = '';
    
    // PERBANDINGAN: Regular function vs Arrow function
    
    // 1. Basic syntax
    output.innerHTML += '=== BASIC SYNTAX ===\n';
    
    // Regular function
    function addRegular(a, b) {
        return a + b;
    }
    
    // Arrow function
    const addArrow = (a, b) => {
        return a + b;
    };
    
    // Arrow function (implicit return - satu line)
    const addArrowShort = (a, b) => a + b;
    
    output.innerHTML += `Regular: ${addRegular(5, 3)}\n`;
    output.innerHTML += `Arrow: ${addArrow(5, 3)}\n`;
    output.innerHTML += `Arrow Short: ${addArrowShort(5, 3)}\n\n`;
    
    // 2. 'this' keyword behavior
    output.innerHTML += '=== THIS KEYWORD BEHAVIOR ===\n';
    
    const person = {
        name: "Iqo",
        regularFunction: function() {
            return `Regular: ${this.name}`;
        },
        arrowFunction: () => {
            return `Arrow: ${this.name}`; // 'this' mengacu ke window/global
        }
    };
    
    output.innerHTML += person.regularFunction() + '\n';
    output.innerHTML += person.arrowFunction() + '\n\n';
    
    // 3. Callback functions
    output.innerHTML += '=== CALLBACK FUNCTIONS ===\n';
    
    const numbers = [1, 2, 3, 4, 5];
    
    // Regular function dalam map
    const doubledRegular = numbers.map(function(num) {
        return num * 2;
    });
    
    // Arrow function dalam map
    const doubledArrow = numbers.map(num => num * 2);
    
    output.innerHTML += `Regular: ${doubledRegular}\n`;
    output.innerHTML += `Arrow: ${doubledArrow}\n\n`;
    
    // 4. Short syntax untuk satu parameter
    output.innerHTML += '=== SINGLE PARAMETER ===\n';
    
    const square = x => x * x;
    const greet = name => `Hello, ${name}!`;
    
    output.innerHTML += `Square 5: ${square(5)}\n`;
    output.innerHTML += `Greet: ${greet("Iqo")}\n`;
}

// ============================================
// 7. ARRAY METHODS (MODERN)
// ============================================

function demoArrayMethods() {
    const output = document.getElementById('output7');
    output.innerHTML = '';
    
    const products = [
        { id: 1, name: "Laptop", price: 10000000, category: "electronics", stock: 5 },
        { id: 2, name: "Mouse", price: 250000, category: "accessories", stock: 20 },
        { id: 3, name: "Keyboard", price: 500000, category: "accessories", stock: 15 },
        { id: 4, name: "Monitor", price: 3000000, category: "electronics", stock: 8 },
        { id: 5, name: "Headphone", price: 800000, category: "audio", stock: 12 }
    ];
    
    output.innerHTML += '=== ORIGINAL PRODUCTS ===\n';
    output.innerHTML += JSON.stringify(products, null, 2) + '\n\n';
    
    // 1. MAP - Transform array
    output.innerHTML += '=== MAP (Transform) ===\n';
    const productNames = products.map(p => p.name);
    const productSummaries = products.map(({ name, price }) => ({ name, price }));
    output.innerHTML += `Names: ${productNames}\n`;
    output.innerHTML += JSON.stringify(productSummaries, null, 2) + '\n\n';
    
    // 2. FILTER - Filter array
    output.innerHTML += '=== FILTER (Filter) ===\n';
    const expensiveProducts = products.filter(p => p.price > 1000000);
    const lowStock = products.filter(p => p.stock < 10);
    output.innerHTML += `Expensive: ${expensiveProducts.map(p => p.name)}\n`;
    output.innerHTML += `Low Stock: ${lowStock.map(p => p.name)}\n\n`;
    
    // 3. REDUCE - Aggregate array
    output.innerHTML += '=== REDUCE (Aggregate) ===\n';
    const totalValue = products.reduce((sum, product) => sum + (product.price * product.stock), 0);
    const categoryCount = products.reduce((acc, product) => {
        acc[product.category] = (acc[product.category] || 0) + 1;
        return acc;
    }, {});
    output.innerHTML += `Total Inventory Value: Rp${totalValue.toLocaleString()}\n`;
    output.innerHTML += `Category Count: ${JSON.stringify(categoryCount)}\n\n`;
    
    // 4. FIND & FINDINDEX
    output.innerHTML += '=== FIND & FINDINDEX ===\n';
    const laptop = products.find(p => p.name === "Laptop");
    const audioIndex = products.findIndex(p => p.category === "audio");
    output.innerHTML += `Laptop: ${JSON.stringify(laptop)}\n`;
    output.innerHTML += `Audio Index: ${audioIndex}\n\n`;
    
    // 5. SOME & EVERY
    output.innerHTML += '=== SOME & EVERY ===\n';
    const hasExpensive = products.some(p => p.price > 5000000);
    const allInStock = products.every(p => p.stock > 0);
    output.innerHTML += `Has expensive product? ${hasExpensive}\n`;
    output.innerHTML += `All in stock? ${allInStock}\n`;
}

// ============================================
// 8. OPTIONAL CHAINING (?.)
// ============================================

function demoOptionalChaining() {
    const output = document.getElementById('output8');
    output.innerHTML = '';
    
    // Data yang mungkin incomplete
    const users = [
        { id: 1, name: "Iqo", profile: { email: "iqo@example.com", address: { city: "Jakarta" } } },
        { id: 2, name: "Budi" }, // Tidak ada profile
        { id: 3, name: "Sari", profile: { email: "sari@example.com" } } // Tidak ada address
    ];
    
    output.innerHTML += '=== TANPA OPTIONAL CHAINING ===\n';
    
    // Old way - manual checking
    users.forEach(user => {
        let city = "Unknown";
        if (user.profile && user.profile.address && user.profile.address.city) {
            city = user.profile.address.city;
        }
        output.innerHTML += `${user.name}: ${city}\n`;
    });
    
    output.innerHTML += '\n=== DENGAN OPTIONAL CHAINING (?.) ===\n';
    
    // Modern way - optional chaining
    users.forEach(user => {
        const city = user.profile?.address?.city ?? "Unknown";
        output.innerHTML += `${user.name}: ${city}\n`;
    });
    
    output.innerHTML += '\n=== LAINNYA ===\n';
    
    // Optional chaining dengan function calls
    const apiResponse = {
        data: {
            getUser: () => ({ name: "Iqo" })
        }
    };
    
    const userName = apiResponse.data?.getUser?.().name;
    output.innerHTML += `Username: ${userName}\n`;
    
    // Array optional chaining
    const firstCity = users[0]?.profile?.address?.city;
    const thirdCity = users[2]?.profile?.address?.city;
    output.innerHTML += `First user city: ${firstCity}\n`;
    output.innerHTML += `Third user city: ${thirdCity}\n`;
}

// ============================================
// 9. NULLISH COALESCING (??)
// ============================================

function demoNullishCoalescing() {
    const output = document.getElementById('output9');
    output.innerHTML = '';
    
    output.innerHTML += '=== PERBANDINGAN || vs ?? ===\n\n';
    
    // Contoh values
    const values = [
        { name: "null", value: null },
        { name: "undefined", value: undefined },
        { name: "0", value: 0 },
        { name: "false", value: false },
        { name: "empty string", value: "" },
        { name: "NaN", value: NaN }
    ];
    
    output.innerHTML += 'Value      || "default"     ?? "default"\n';
    output.innerHTML += '----------------------------------------\n';
    
    values.forEach(({ name, value }) => {
        const orResult = value || "default";
        const nullishResult = value ?? "default";
        output.innerHTML += `${name.padEnd(12)} ${orResult.toString().padEnd(14)} ${nullishResult}\n`;
    });
    
    output.innerHTML += '\n=== CONTOH REAL ===\n';
    
    // Contoh 1: User settings
    const userSettings = {
        theme: null,
        fontSize: 0, // User memang memilih 0
        notifications: false // User matikan notifications
    };
    
    const theme = userSettings.theme || "dark"; // ❌ Akan "dark" padahal user null (belum set)
    const themeCorrect = userSettings.theme ?? "dark"; // ✅ Akan "dark" karena null
    
    const fontSize = userSettings.fontSize || 14; // ❌ Akan 14 padahal user pilih 0!
    const fontSizeCorrect = userSettings.fontSize ?? 14; // ✅ Akan 0 karena 0 bukan null/undefined
    
    output.innerHTML += `Theme (||): ${theme} ❌\n`;
    output.innerHTML += `Theme (??): ${themeCorrect} ✅\n`;
    output.innerHTML += `Font Size (||): ${fontSize} ❌\n`;
    output.innerHTML += `Font Size (??): ${fontSizeCorrect} ✅\n`;
    
    // Contoh 2: Function parameter
    function calculatePrice(price, discount) {
        // discount || 0 akan salah jika discount = 0 (free)
        // discount ?? 0 akan benar
        const finalDiscount = discount ?? 0;
        return price - (price * finalDiscount);
    }
    
    output.innerHTML += `\nPrice with 0 discount: ${calculatePrice(100000, 0)}`;
}

// ============================================
// 10. PROMISE.ALL
// ============================================

async function demoPromiseAll() {
    const output = document.getElementById('output10');
    output.innerHTML = '⏳ Loading...\n';
    
    // Simulasi multiple API calls
    const userIds = [1, 2, 3];
    
    // OLD WAY: Sequential (lambat)
    output.innerHTML += '=== OLD WAY (Sequential) ===\n';
    
    try {
        const startTime = Date.now();
        
        const user1 = await fetchUser(1);
        const user2 = await fetchUser(2);
        const user3 = await fetchUser(3);
        
        const endTime = Date.now();
        const timeTaken = endTime - startTime;
        
        output.innerHTML += `User 1: ${user1.name}\n`;
        output.innerHTML += `User 2: ${user2.name}\n`;
        output.innerHTML += `User 3: ${user3.name}\n`;
        output.innerHTML += `Time: ${timeTaken}ms ⚠️\n\n`;
        
    } catch (error) {
        output.innerHTML += `Error: ${error}\n\n`;
    }
    
    // MODERN WAY: Promise.all (parallel)
    output.innerHTML += '=== MODERN WAY (Promise.all) ===\n';
    
    try {
        const startTime = Date.now();
        
        // Jalankan semua promises bersamaan
        const [user1, user2, user3] = await Promise.all([
            fetchUser(1),
            fetchUser(2),
            fetchUser(3)
        ]);
        
        const endTime = Date.now();
        const timeTaken = endTime - startTime;
        
        output.innerHTML += `User 1: ${user1.name}\n`;
        output.innerHTML += `User 2: ${user2.name}\n`;
        output.innerHTML += `User 3: ${user3.name}\n`;
        output.innerHTML += `Time: ${timeTaken}ms ✅\n\n`;
        
        output.innerHTML += '💡 Promise.all lebih cepat karena parallel!\n';
        
    } catch (error) {
        output.innerHTML += `Error: ${error}\n`;
    }
}

// Helper function untuk fetchUser
function fetchUser(id) {
    return new Promise((resolve) => {
        // Simulasi API call delay (1-2 detik)
        const delay = 1000 + Math.random() * 1000;
        
        setTimeout(() => {
            const users = {
                1: { id: 1, name: "Iqo Pratama", email: "iqo@example.com" },
                2: { id: 2, name: "Budi Santoso", email: "budi@example.com" },
                3: { id: 3, name: "Sari Wijaya", email: "sari@example.com" }
            };
            resolve(users[id] || { id, name: "Unknown User" });
        }, delay);
    });
}

// ============================================
// REAL-WORLD EXAMPLE (GABUNGIN SEMUA)
// ============================================

async function realWorldExample() {
    const output = document.getElementById('realWorldOutput');
    output.innerHTML = '🚀 Running Real-World Example...\n\n';
    
    // Simulasi: E-commerce cart processing dengan semua fitur modern
    
    // 1. Data menggunakan const & let
    const cartItems = [
        { id: 1, name: "Laptop", price: 10000000, quantity: 1, category: "electronics" },
        { id: 2, name: "Mouse", price: 250000, quantity: 2, category: "accessories" },
        { id: 3, name: "Keyboard", price: 500000, quantity: 1, category: "accessories" }
    ];
    
    // 2. Destructuring untuk user
    const user = {
        id: 1,
        name: "Iqo Pratama",
        email: "iqo@example.com",
        preferences: {
            theme: "dark",
            currency: "IDR"
        }
    };
    
    const { name: userName, preferences: { currency } } = user;
    
    // 3. Arrow functions & template literals
    const formatPrice = (price) => `Rp${price.toLocaleString()}`;
    
    output.innerHTML += `🛒 Processing order for ${userName}\n`;
    output.innerHTML += `Currency: ${currency}\n\n`;
    
    // 4. Array methods untuk kalkulasi
    const subtotal = cartItems.reduce((sum, item) => 
        sum + (item.price * item.quantity), 0
    );
    
    const tax = subtotal * 0.11;
    const shipping = 20000;
    const total = subtotal + tax + shipping;
    
    // 5. Optional chaining & nullish coalescing
    const discount = user.preferences?.discountPercentage ?? 0;
    const discountAmount = subtotal * (discount / 100);
    const finalTotal = total - discountAmount;
    
    // 6. Display dengan template literals
    output.innerHTML += '=== ORDER SUMMARY ===\n';
    output.innerHTML += `Items: ${cartItems.map(item => item.name).join(', ')}\n\n`;
    
    cartItems.forEach((item, index) => {
        const { name, price, quantity } = item;
        const itemTotal = price * quantity;
        output.innerHTML += `${index + 1}. ${name} x${quantity}: ${formatPrice(itemTotal)}\n`;
    });
    
    output.innerHTML += '\n=== CALCULATION ===\n';
    output.innerHTML += `Subtotal: ${formatPrice(subtotal)}\n`;
    output.innerHTML += `Tax (11%): ${formatPrice(tax)}\n`;
    output.innerHTML += `Shipping: ${formatPrice(shipping)}\n`;
    output.innerHTML += `Discount: -${formatPrice(discountAmount)}\n`;
    output.innerHTML += `Total: ${formatPrice(finalTotal)}\n\n`;
    
    // 7. Async operation dengan Promise.all
    output.innerHTML += '⏳ Processing payment & shipping...\n';
    
    try {
        const [paymentResult, shippingEstimate] = await Promise.all([
            processPayment(finalTotal),
            calculateShipping(cartItems)
        ]);
        
        // 8. Spread operator untuk merge results
        const orderSummary = {
            user: { ...user, name: userName },
            items: [...cartItems],
            payment: paymentResult,
            shipping: shippingEstimate,
            totals: {
                subtotal,
                tax,
                shipping,
                discount: discountAmount,
                total: finalTotal
            },
            orderId: `ORD_${Date.now()}`
        };
        
        output.innerHTML += `✅ Payment: ${paymentResult.status}\n`;
        output.innerHTML += `🚚 Shipping: ${shippingEstimate.estimate}\n\n`;
        output.innerHTML += '=== ORDER COMPLETE ===\n';
        output.innerHTML += `Order ID: ${orderSummary.orderId}\n`;
        output.innerHTML += `Thank you, ${userName}! 🎉\n`;
        
        // Simpan ke localStorage
        localStorage.setItem('lastOrder', JSON.stringify(orderSummary));
        
    } catch (error) {
        output.innerHTML += `❌ Error: ${error.message}\n`;
    }
}

// Helper functions untuk real-world example
function processPayment(amount) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                status: "SUCCESS",
                transactionId: `TXN_${Math.random().toString(36).substr(2, 9)}`,
                amount: amount,
                timestamp: new Date().toISOString()
            });
        }, 1500);
    });
}

function calculateShipping(items) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const hasElectronics = items.some(item => item.category === "electronics");
            const estimate = hasElectronics ? "2-3 business days" : "1-2 business days";
            
            resolve({
                estimate: estimate,
                cost: 20000,
                carrier: "JNE Express"
            });
        }, 1000);
    });
}

console.log("✅ Day 6 Modern JavaScript ready!");