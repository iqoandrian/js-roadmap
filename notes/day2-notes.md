# Personal Learning Notes - Day 2

## 📅 Date: [Today's Date]
## ⏰ Study Time: 3 hours
## 🎯 Topic: Control Flow & Functions

## 🧠 What I Learned Today
1. **Conditional Statements**
   - if/else/else if chains
   - switch statements for multiple conditions
   - ternary operator for quick decisions

2. **Loops**
   - Different types: for, while, do-while
   - for...of for arrays
   - for...in for objects
   - break & continue to control loop flow

3. **Functions**
   - Three ways to declare functions
   - Arrow functions (my favorite! 🎯)
   - Default and rest parameters
   - Callback functions
   - Recursive functions

## 💡 Aha Moments
1. **Ternary operator** is like shorthand if/else
2. **for...of** is much cleaner than traditional for loops for arrays
3. **Arrow functions** automatically return if it's one line
4. **Default parameters** prevent undefined errors

## 🏗️ Code I'm Proud Of
```javascript
// Student grading system combining all concepts
function calculateStudentGrade(name, scores) {
    let total = 0;
    for (let score of scores) total += score;
    const average = total / scores.length;
    
    let grade = average >= 90 ? "A" :
                average >= 80 ? "B" :
                average >= 70 ? "C" :
                average >= 60 ? "D" : "F";
    
    return { name, average, grade };
}