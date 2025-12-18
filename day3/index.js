// Day 3 - Arrays & Objects
// File: index.js
// Topic: Final Project - Task Manager Application

console.log("🎯 DAY 3 - ARRAYS & OBJECTS FINAL PROJECT 🎯\n");
console.log("=".repeat(60) + "\n");

console.log("📋 TASK MANAGER APPLICATION\n");

// Import modules
console.log("📘 PART 1: ARRAYS FUNDAMENTALS");
console.log("-".repeat(40));
require('./arrays.js');

console.log("\n" + "=".repeat(60) + "\n");

console.log("📘 PART 2: OBJECTS FUNDAMENTALS");
console.log("-".repeat(40));
require('./objects.js');

console.log("\n" + "=".repeat(60) + "\n");

console.log("📘 PART 3: COMBINING ARRAYS & OBJECTS");
console.log("-".repeat(40));
require('./combined.js');

console.log("\n" + "=".repeat(60) + "\n");

// FINAL PROJECT: TASK MANAGER APPLICATION
console.log("🚀 FINAL PROJECT: TASK MANAGER APPLICATION\n");

const taskManager = {
    name: "My Task Manager",
    version: "1.0.0",
    createdBy: "Iqo",
    
    tasks: [
        {
            id: 1,
            title: "Learn JavaScript Arrays",
            description: "Study array methods and practice examples",
            category: "Learning",
            priority: "High",
            status: "completed",
            dueDate: "2024-01-10",
            tags: ["javascript", "study", "fundamentals"],
            timeSpent: 120 // minutes
        },
        {
            id: 2,
            title: "Build Git Portfolio",
            description: "Create GitHub repository with projects",
            category: "Portfolio",
            priority: "High",
            status: "in-progress",
            dueDate: "2024-01-15",
            tags: ["git", "github", "portfolio"],
            timeSpent: 45
        },
        {
            id: 3,
            title: "Grocery Shopping",
            description: "Buy vegetables and fruits",
            category: "Personal",
            priority: "Medium",
            status: "pending",
            dueDate: "2024-01-12",
            tags: ["shopping", "personal"],
            timeSpent: 0
        },
        {
            id: 4,
            title: "Workout Session",
            description: "Gym workout for 1 hour",
            category: "Health",
            priority: "Medium",
            status: "pending",
            dueDate: "2024-01-11",
            tags: ["health", "fitness"],
            timeSpent: 0
        },
        {
            id: 5,
            title: "Read Programming Book",
            description: "Read Chapter 5 of JavaScript book",
            category: "Learning",
            priority: "Low",
            status: "in-progress",
            dueDate: "2024-01-20",
            tags: ["reading", "javascript", "book"],
            timeSpent: 30
        }
    ],
    
    // 1. GET ALL TASKS
    getAllTasks() {
        return this.tasks;
    },
    
    // 2. GET TASK BY ID
    getTaskById(id) {
        return this.tasks.find(task => task.id === id);
    },
    
    // 3. ADD NEW TASK
    addTask(newTask) {
        const id = this.tasks.length > 0 
            ? Math.max(...this.tasks.map(t => t.id)) + 1 
            : 1;
        
        const taskWithId = {
            id,
            status: "pending",
            timeSpent: 0,
            ...newTask
        };
        
        this.tasks.push(taskWithId);
        return taskWithId;
    },
    
    // 4. UPDATE TASK
    updateTask(id, updates) {
        const taskIndex = this.tasks.findIndex(task => task.id === id);
        if (taskIndex !== -1) {
            this.tasks[taskIndex] = {
                ...this.tasks[taskIndex],
                ...updates
            };
            return true;
        }
        return false;
    },
    
    // 5. DELETE TASK
    deleteTask(id) {
        const initialLength = this.tasks.length;
        this.tasks = this.tasks.filter(task => task.id !== id);
        return this.tasks.length < initialLength;
    },
    
    // 6. FILTER TASKS
    filterTasks(criteria) {
        return this.tasks.filter(task => {
            for (let key in criteria) {
                if (task[key] !== criteria[key]) {
                    return false;
                }
            }
            return true;
        });
    },
    
    // 7. GET TASKS BY STATUS
    getTasksByStatus(status) {
        return this.tasks.filter(task => task.status === status);
    },
    
    // 8. GET TASKS BY PRIORITY
    getTasksByPriority(priority) {
        return this.tasks.filter(task => task.priority === priority);
    },
    
    // 9. GET TASKS BY CATEGORY
    getTasksByCategory(category) {
        return this.tasks.filter(task => task.category === category);
    },
    
    // 10. SEARCH TASKS
    searchTasks(query) {
        const searchLower = query.toLowerCase();
        return this.tasks.filter(task => 
            task.title.toLowerCase().includes(searchLower) ||
            task.description.toLowerCase().includes(searchLower) ||
            task.tags.some(tag => tag.toLowerCase().includes(searchLower))
        );
    },
    
    // 11. GET STATISTICS
    getStatistics() {
        const totalTasks = this.tasks.length;
        const completedTasks = this.getTasksByStatus("completed").length;
        const inProgressTasks = this.getTasksByStatus("in-progress").length;
        const pendingTasks = this.getTasksByStatus("pending").length;
        
        const totalTimeSpent = this.tasks.reduce((sum, task) => 
            sum + task.timeSpent, 0
        );
        
        const tasksByPriority = this.tasks.reduce((acc, task) => {
            acc[task.priority] = (acc[task.priority] || 0) + 1;
            return acc;
        }, {});
        
        const tasksByCategory = this.tasks.reduce((acc, task) => {
            acc[task.category] = (acc[task.category] || 0) + 1;
            return acc;
        }, {});
        
        return {
            totalTasks,
            completedTasks,
            inProgressTasks,
            pendingTasks,
            completionRate: totalTasks > 0 
                ? ((completedTasks / totalTasks) * 100).toFixed(1) + "%" 
                : "0%",
            totalTimeSpent: totalTimeSpent + " minutes",
            tasksByPriority,
            tasksByCategory
        };
    },
    
    // 12. GET OVERDUE TASKS (assuming today is 2024-01-12)
    getOverdueTasks(today = "2024-01-12") {
        return this.tasks.filter(task => 
            task.status !== "completed" && 
            task.dueDate < today
        );
    },
    
    // 13. GENERATE REPORT
    generateReport() {
        const stats = this.getStatistics();
        const overdueTasks = this.getOverdueTasks();
        
        console.log("📊 TASK MANAGER REPORT");
        console.log("=".repeat(40));
        console.log(`Manager: ${this.name} v${this.version}`);
        console.log(`Created by: ${this.createdBy}`);
        console.log("");
        
        console.log("📈 STATISTICS:");
        console.log(`Total Tasks: ${stats.totalTasks}`);
        console.log(`Completed: ${stats.completedTasks}`);
        console.log(`In Progress: ${stats.inProgressTasks}`);
        console.log(`Pending: ${stats.pendingTasks}`);
        console.log(`Completion Rate: ${stats.completionRate}`);
        console.log(`Total Time Spent: ${stats.totalTimeSpent}`);
        
        console.log("\n🎯 BY PRIORITY:");
        for (let priority in stats.tasksByPriority) {
            console.log(`  ${priority}: ${stats.tasksByPriority[priority]} tasks`);
        }
        
        console.log("\n🏷️ BY CATEGORY:");
        for (let category in stats.tasksByCategory) {
            console.log(`  ${category}: ${stats.tasksByCategory[category]} tasks`);
        }
        
        if (overdueTasks.length > 0) {
            console.log("\n⚠️ OVERDUE TASKS:");
            overdueTasks.forEach(task => {
                console.log(`  ${task.title} (Due: ${task.dueDate})`);
            });
        }
        
        console.log("\n🏆 RECOMMENDATIONS:");
        const pendingHighPriority = this.tasks.filter(task => 
            task.priority === "High" && task.status === "pending"
        );
        
        if (pendingHighPriority.length > 0) {
            console.log("  Focus on high priority tasks:");
            pendingHighPriority.forEach(task => {
                console.log(`    • ${task.title}`);
            });
        } else {
            console.log("  Great job! No high priority tasks pending.");
        }
    },
    
    // 14. DISPLAY TASKS IN TABLE FORMAT
    displayTasksTable() {
        console.log("\n📋 ALL TASKS:");
        console.log("-".repeat(80));
        console.log("ID  | Title                     | Category   | Priority | Status      | Due Date");
        console.log("-".repeat(80));
        
        this.tasks.forEach(task => {
            const id = task.id.toString().padEnd(3);
            const title = task.title.padEnd(25).substring(0, 25);
            const category = task.category.padEnd(10);
            const priority = task.priority.padEnd(8);
            const status = task.status.padEnd(11);
            const dueDate = task.dueDate;
            
            console.log(`${id} | ${title} | ${category} | ${priority} | ${status} | ${dueDate}`);
        });
    }
};

// DEMO THE TASK MANAGER
console.log("🚀 DEMONSTRATING TASK MANAGER FEATURES\n");

// 1. Display all tasks
taskManager.displayTasksTable();

// 2. Show statistics
console.log("\n");
taskManager.generateReport();

// 3. Demonstrate adding a task
console.log("\n➕ ADDING NEW TASK:");
const newTask = {
    title: "Practice Array Methods",
    description: "Complete array method exercises",
    category: "Practice",
    priority: "Medium",
    dueDate: "2024-01-14",
    tags: ["practice", "arrays", "javascript"]
};

const addedTask = taskManager.addTask(newTask);
console.log(`Added task: ${addedTask.title} (ID: ${addedTask.id})`);

// 4. Demonstrate updating a task
console.log("\n✏️ UPDATING TASK:");
const updated = taskManager.updateTask(3, { 
    status: "completed", 
    timeSpent: 60 
});
console.log(updated ? "Task 3 updated successfully!" : "Task not found");

// 5. Demonstrate searching
console.log("\n🔍 SEARCHING TASKS:");
const searchResults = taskManager.searchTasks("javascript");
console.log(`Found ${searchResults.length} tasks with "javascript":`);
searchResults.forEach(task => console.log(`  • ${task.title}`));

// 6. Demonstrate filtering
console.log("\n🎯 HIGH PRIORITY TASKS:");
const highPriorityTasks = taskManager.getTasksByPriority("High");
highPriorityTasks.forEach(task => {
    console.log(`  • ${task.title} (${task.status})`);
});

// 7. Show updated statistics
console.log("\n📊 UPDATED STATISTICS:");
const updatedStats = taskManager.getStatistics();
console.log(`Total tasks: ${updatedStats.totalTasks}`);
console.log(`Completion rate: ${updatedStats.completionRate}`);

console.log("\n" + "=".repeat(60));
console.log("✅ DAY 3 LEARNING OBJECTIVES COMPLETED!");
console.log("🎯 Next: Day 4 - DOM Manipulation & Events!");