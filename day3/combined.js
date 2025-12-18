// Day 3 - Arrays & Objects
// File: combined.js
// Topic: Combining Arrays & Objects

console.log("=== COMBINING ARRAYS & OBJECTS ===\n");

// 1. ARRAY OF OBJECTS (Most common pattern)
console.log("1. ARRAY OF OBJECTS");

const products = [
    {
        id: 1,
        name: "Laptop",
        category: "Electronics",
        price: 10000000,
        stock: 5,
        tags: ["gaming", "portable", "powerful"]
    },
    {
        id: 2,
        name: "Mouse",
        category: "Accessories",
        price: 250000,
        stock: 20,
        tags: ["wireless", "ergonomic"]
    },
    {
        id: 3,
        name: "Keyboard",
        category: "Accessories",
        price: 500000,
        stock: 15,
        tags: ["mechanical", "RGB"]
    },
    {
        id: 4,
        name: "Monitor",
        category: "Electronics",
        price: 3000000,
        stock: 8,
        tags: ["4K", "gaming", "curved"]
    }
];

console.log("📦 Product Catalog:");
products.forEach((product, index) => {
    console.log(`${index + 1}. ${product.name} - Rp${product.price.toLocaleString()}`);
});

console.log("");

// 2. DATA TRANSFORMATION
console.log("2. DATA TRANSFORMATION");

// Transform array of objects
const productSummaries = products.map(product => ({
    name: product.name,
    category: product.category,
    inStock: product.stock > 0,
    expensive: product.price > 5000000
}));

console.log("Product Summaries:", productSummaries);

// Filter by category
const electronics = products.filter(product => product.category === "Electronics");
console.log("\nElectronics:", electronics.map(p => p.name));

// Find by tag
const gamingProducts = products.filter(product => 
    product.tags.includes("gaming")
);
console.log("\nGaming Products:", gamingProducts.map(p => p.name));

// Sort by price (ascending)
const sortedByPrice = [...products].sort((a, b) => a.price - b.price);
console.log("\nSorted by price (cheapest first):");
sortedByPrice.forEach(p => {
    console.log(`  ${p.name}: Rp${p.price.toLocaleString()}`);
});

console.log("");

// 3. AGGREGATION & GROUPING
console.log("3. AGGREGATION & GROUPING");

// Group by category
const groupedByCategory = products.reduce((groups, product) => {
    const category = product.category;
    if (!groups[category]) {
        groups[category] = [];
    }
    groups[category].push(product);
    return groups;
}, {});

console.log("Grouped by category:");
console.log(groupedByCategory);

// Calculate total inventory value
const totalInventoryValue = products.reduce((total, product) => {
    return total + (product.price * product.stock);
}, 0);

console.log("\nTotal inventory value: Rp" + totalInventoryValue.toLocaleString());

// Count products by tag
const tagCounts = products.reduce((counts, product) => {
    product.tags.forEach(tag => {
        counts[tag] = (counts[tag] || 0) + 1;
    });
    return counts;
}, {});

console.log("\nTag counts:", tagCounts);

console.log("");

// 4. COMPLEX DATA STRUCTURES
console.log("4. COMPLEX DATA STRUCTURES");

const ecommerceStore = {
    name: "Tech Haven",
    location: "Jakarta",
    departments: [
        {
            name: "Electronics",
            manager: "Budi Santoso",
            products: [
                { id: "E001", name: "Smartphone", price: 5000000, stock: 50 },
                { id: "E002", name: "Tablet", price: 7000000, stock: 30 }
            ],
            salesTarget: 100000000
        },
        {
            name: "Computers",
            manager: "Sari Wijaya",
            products: [
                { id: "C001", name: "Laptop", price: 15000000, stock: 20 },
                { id: "C002", name: "Desktop", price: 12000000, stock: 15 }
            ],
            salesTarget: 200000000
        }
    ],
    
    // Method to get total store value
    getTotalStoreValue() {
        return this.departments.reduce((total, dept) => {
            const deptValue = dept.products.reduce((deptTotal, product) => {
                return deptTotal + (product.price * product.stock);
            }, 0);
            return total + deptValue;
        }, 0);
    },
    
    // Method to find product by ID
    findProductById(productId) {
        for (let dept of this.departments) {
            const product = dept.products.find(p => p.id === productId);
            if (product) {
                return { ...product, department: dept.name };
            }
        }
        return null;
    },
    
    // Method to get low stock products
    getLowStockProducts(threshold = 10) {
        const lowStock = [];
        this.departments.forEach(dept => {
            dept.products.forEach(product => {
                if (product.stock < threshold) {
                    lowStock.push({
                        ...product,
                        department: dept.name,
                        manager: dept.manager
                    });
                }
            });
        });
        return lowStock;
    }
};

console.log("🏬 E-commerce Store Analysis");
console.log("Store:", ecommerceStore.name);
console.log("Total store value: Rp" + ecommerceStore.getTotalStoreValue().toLocaleString());

const product = ecommerceStore.findProductById("C001");
console.log("\nProduct C001:", product ? `${product.name} in ${product.department}` : "Not found");

console.log("\n⚠️ Low stock products:");
const lowStock = ecommerceStore.getLowStockProducts(20);
if (lowStock.length > 0) {
    lowStock.forEach(item => {
        console.log(`  ${item.name}: ${item.stock} left (${item.department})`);
    });
} else {
    console.log("  All products have sufficient stock!");
}

console.log("");

// 5. PRACTICAL EXAMPLE: STUDENT GRADEBOOK
console.log("5. PRACTICAL EXAMPLE: STUDENT GRADEBOOK");

const gradebook = {
    class: "JavaScript Fundamentals",
    instructor: "Mr. Smith",
    semester: "Fall 2024",
    students: [
        {
            id: "S001",
            name: "Iqo Pratama",
            assignments: [
                { name: "Variables Exercise", score: 95, maxScore: 100 },
                { name: "Functions Project", score: 88, maxScore: 100 },
                { name: "Arrays Challenge", score: 92, maxScore: 100 }
            ]
        },
        {
            id: "S002",
            name: "Budi Santoso",
            assignments: [
                { name: "Variables Exercise", score: 78, maxScore: 100 },
                { name: "Functions Project", score: 85, maxScore: 100 },
                { name: "Arrays Challenge", score: 80, maxScore: 100 }
            ]
        },
        {
            id: "S003",
            name: "Sari Wijaya",
            assignments: [
                { name: "Variables Exercise", score: 100, maxScore: 100 },
                { name: "Functions Project", score: 96, maxScore: 100 },
                { name: "Arrays Challenge", score: 98, maxScore: 100 }
            ]
        }
    ],
    
    // Calculate student averages
    calculateStudentAverages() {
        return this.students.map(student => {
            const totalScore = student.assignments.reduce((sum, assignment) => 
                sum + assignment.score, 0
            );
            const totalMax = student.assignments.reduce((sum, assignment) => 
                sum + assignment.maxScore, 0
            );
            const average = (totalScore / totalMax) * 100;
            
            return {
                name: student.name,
                average: average.toFixed(2),
                letterGrade: this.getLetterGrade(average)
            };
        });
    },
    
    // Get letter grade
    getLetterGrade(percentage) {
        if (percentage >= 90) return "A";
        if (percentage >= 80) return "B";
        if (percentage >= 70) return "C";
        if (percentage >= 60) return "D";
        return "F";
    },
    
    // Get class average
    getClassAverage() {
        const studentAverages = this.calculateStudentAverages();
        const total = studentAverages.reduce((sum, student) => 
            sum + parseFloat(student.average), 0
        );
        return (total / studentAverages.length).toFixed(2);
    },
    
    // Find top student
    getTopStudent() {
        const studentAverages = this.calculateStudentAverages();
        return studentAverages.reduce((top, student) => 
            parseFloat(student.average) > parseFloat(top.average) ? student : top
        );
    },
    
    // Generate report
    generateReport() {
        console.log(`📚 Class: ${this.class}`);
        console.log(`👨‍🏫 Instructor: ${this.instructor}`);
        console.log(`📅 Semester: ${this.semester}`);
        console.log("\n📊 STUDENT PERFORMANCE:\n");
        
        const studentAverages = this.calculateStudentAverages();
        studentAverages.forEach(student => {
            console.log(`${student.name}: ${student.average}% (${student.letterGrade})`);
        });
        
        console.log("\n📈 CLASS STATISTICS:");
        console.log(`Class Average: ${this.getClassAverage()}%`);
        
        const topStudent = this.getTopStudent();
        console.log(`Top Student: ${topStudent.name} (${topStudent.average}%)`);
    }
};

// Generate gradebook report
gradebook.generateReport();