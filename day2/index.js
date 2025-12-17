// Day 2 - Control Flow & Functions
// File: index.js
// Topic: Combining all concepts

console.log("🎯 DAY 2 - CONTROL FLOW & FUNCTIONS 🎯\n");
console.log("=".repeat(50) + "\n");

// Import all modules
console.log("📘 PART 1: CONDITIONAL STATEMENTS");
console.log("-".repeat(40));
require('./conditionals.js');

console.log("\n" + "=".repeat(50) + "\n");

console.log("🔄 PART 2: LOOPS");
console.log("-".repeat(40));
require('./loops.js');

console.log("\n" + "=".repeat(50) + "\n");

console.log("⚡ PART 3: FUNCTIONS");
console.log("-".repeat(40));
require('./functions.js');

console.log("\n" + "=".repeat(50) + "\n");

// FINAL INTEGRATED EXAMPLE
console.log("🚀 FINAL INTEGRATED EXAMPLE: STUDENT GRADING SYSTEM\n");

function calculateStudentGrade(name, scores) {
    // Calculate average using loop
    let total = 0;
    for (let score of scores) {
        total += score;
    }
    const average = total / scores.length;
    
    // Determine grade using conditionals
    let grade;
    if (average >= 90) grade = "A";
    else if (average >= 80) grade = "B";
    else if (average >= 70) grade = "C";
    else if (average >= 60) grade = "D";
    else grade = "F";
    
    // Determine status using switch
    let status;
    switch(grade) {
        case 'A': status = "Excellent! 🎉"; break;
        case 'B': status = "Good job! 👍"; break;
        case 'C': status = "Fair. Keep trying! 💪"; break;
        case 'D': status = "Needs improvement ⚠️"; break;
        default: status = "Failed 😔";
    }
    
    return {
        name,
        scores,
        average: average.toFixed(2),
        grade,
        status
    };
}

// Process multiple students
const students = [
    { name: "Iqo", scores: [85, 92, 88, 90] },
    { name: "Budi", scores: [70, 65, 75, 68] },
    { name: "Sari", scores: [95, 98, 92, 96] },
    { name: "Rina", scores: [55, 60, 58, 52] }
];

console.log("📊 STUDENT REPORT CARD\n");

for (let student of students) {
    const result = calculateStudentGrade(student.name, student.scores);
    
    console.log(`👤 Name: ${result.name}`);
    console.log(`📝 Scores: ${result.scores.join(', ')}`);
    console.log(`📈 Average: ${result.average}`);
    console.log(`🎓 Grade: ${result.grade}`);
    console.log(`📌 Status: ${result.status}`);
    console.log("-".repeat(30));
}

console.log("\n✅ Day 2 Learning Objectives Completed!");
console.log("🎯 Next: Day 3 - Arrays & Objects!");