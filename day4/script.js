// Day 4 - DOM Manipulation & Events
// File: script.js
// Complete JavaScript for all interactive features

console.log("🎯 DAY 4 - DOM MANIPULATION & EVENTS 🎯");

// ============================================
// PART 1: TAB SYSTEM
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log("📄 DOM fully loaded and parsed!");
    
    // Initialize tab system
    initTabSystem();
    
    // Initialize all event listeners
    initEventListeners();
    
    // Initialize projects
    initProjects();
    
    // Update timestamp
    updateTimestamp();
});

// Tab System
function initTabSystem() {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
            
            // Log tab change
            logEvent(`Switched to ${tabId} tab`);
        });
    });
}

// ============================================
// PART 2: DOM SELECTORS DEMO
// ============================================

// Select by ID
function selectById() {
    const element = document.getElementById('uniqueElement');
    highlightElement(element, 'Selected by ID: getElementById("uniqueElement")');
}

// Select by Class
function selectByClass() {
    const elements = document.getElementsByClassName('element');
    highlightElements(Array.from(elements), 'Selected by Class: getElementsByClassName("element")');
}

// Select by Tag
function selectByTag() {
    const elements = document.getElementsByTagName('div');
    // Filter only elements in the element-list
    const elementList = document.querySelector('.element-list');
    const filteredElements = Array.from(elements).filter(el => 
        elementList.contains(el) && el.classList.contains('element')
    );
    highlightElements(filteredElements, 'Selected by Tag: getElementsByTagName("div")');
}

// Select by Query
function selectByQuery() {
    const element = document.querySelector('.element.special');
    highlightElement(element, 'Selected by Query: querySelector(".element.special")');
}

// Select All
function selectAll() {
    const elements = document.querySelectorAll('.element');
    highlightElements(Array.from(elements), 'Selected All: querySelectorAll(".element")');
}

// Helper function to highlight single element
function highlightElement(element, message) {
    // Clear previous highlights
    clearHighlights();
    
    if (element) {
        element.classList.add('highlight');
        displayOutput([element], message);
        logEvent(`Selected element: ${element.textContent}`);
    } else {
        displayOutput([], 'No element found!');
    }
}

// Helper function to highlight multiple elements
function highlightElements(elements, message) {
    clearHighlights();
    
    if (elements.length > 0) {
        elements.forEach(el => el.classList.add('highlight'));
        displayOutput(elements, message);
        logEvent(`Selected ${elements.length} elements`);
    } else {
        displayOutput([], 'No elements found!');
    }
}

// Clear all highlights
function clearHighlights() {
    document.querySelectorAll('.highlight').forEach(el => {
        el.classList.remove('highlight');
    });
}

// Display output in selector panel
function displayOutput(elements, message) {
    const outputDiv = document.getElementById('selectorOutput');
    outputDiv.innerHTML = `<strong>${message}</strong><br><br>`;
    
    if (elements.length === 0) {
        outputDiv.innerHTML += 'No elements selected.';
        return;
    }
    
    elements.forEach((el, index) => {
        outputDiv.innerHTML += `
            <div style="margin: 5px 0; padding: 10px; background: #334155; border-radius: 5px;">
                <strong>Element ${index + 1}:</strong> ${el.outerHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;')}
                <br><small>Text: "${el.textContent}"</small>
            </div>
        `;
    });
}

// ============================================
// PART 3: DOM MANIPULATION DEMO
// ============================================

// Change content of selected box
function changeContent() {
    const content = document.getElementById('contentInput').value;
    if (!content) {
        alert('Please enter some content!');
        return;
    }
    
    const selectedBox = getSelectedBox();
    if (selectedBox) {
        selectedBox.textContent = content;
        logEvent(`Changed content of ${selectedBox.id} to: "${content}"`);
    } else {
        alert('Please select a box first by clicking on it!');
    }
}

// Apply style to selected box
function applyStyle() {
    const styleSelect = document.getElementById('styleSelect');
    const style = styleSelect.value;
    
    const selectedBox = getSelectedBox();
    if (selectedBox) {
        selectedBox.style.cssText = style;
        logEvent(`Applied style to ${selectedBox.id}: ${style}`);
    } else {
        alert('Please select a box first!');
    }
}

// Add highlight class
function addClass() {
    const selectedBox = getSelectedBox();
    if (selectedBox) {
        selectedBox.classList.add('highlight');
        logEvent(`Added 'highlight' class to ${selectedBox.id}`);
    }
}

// Remove highlight class
function removeClass() {
    const selectedBox = getSelectedBox();
    if (selectedBox) {
        selectedBox.classList.remove('highlight');
        logEvent(`Removed 'highlight' class from ${selectedBox.id}`);
    }
}

// Toggle highlight class
function toggleClass() {
    const selectedBox = getSelectedBox();
    if (selectedBox) {
        selectedBox.classList.toggle('highlight');
        const hasClass = selectedBox.classList.contains('highlight');
        logEvent(`${hasClass ? 'Added' : 'Removed'} 'highlight' class from ${selectedBox.id}`);
    }
}

// Create new element
function createElement() {
    const playground = document.getElementById('manipulationPlayground');
    const newId = 'box' + (playground.children.length + 1);
    
    const newBox = document.createElement('div');
    newBox.id = newId;
    newBox.className = 'box';
    newBox.textContent = `Box ${playground.children.length + 1}`;
    newBox.onclick = function() { selectBox(this); };
    
    playground.appendChild(newBox);
    logEvent(`Created new element: ${newId}`);
}

// Remove element
function removeElement() {
    const selectedBox = getSelectedBox();
    if (selectedBox) {
        const boxId = selectedBox.id;
        selectedBox.remove();
        clearSelectedBox();
        logEvent(`Removed element: ${boxId}`);
    } else {
        alert('Please select a box to remove!');
    }
}

// Clone element
function cloneElement() {
    const selectedBox = getSelectedBox();
    if (selectedBox) {
        const clone = selectedBox.cloneNode(true);
        clone.id = selectedBox.id + '-clone';
        clone.textContent += ' (Clone)';
        clone.onclick = function() { selectBox(this); };
        
        selectedBox.after(clone);
        logEvent(`Cloned element: ${selectedBox.id}`);
    }
}

// Get currently selected box
let selectedBox = null;

function selectBox(box) {
    // Clear previous selection
    if (selectedBox) {
        selectedBox.style.outline = '';
    }
    
    // Set new selection
    selectedBox = box;
    selectedBox.style.outline = '3px solid #10b981';
    logEvent(`Selected box: ${box.id}`);
}

function getSelectedBox() {
    return selectedBox;
}

function clearSelectedBox() {
    if (selectedBox) {
        selectedBox.style.outline = '';
        selectedBox = null;
    }
}

// ============================================
// PART 4: EVENT HANDLING DEMO
// ============================================

function initEventListeners() {
    // Click Event
    const clickBox = document.getElementById('clickBox');
    let clickCount = 0;
    
    clickBox.addEventListener('click', function(e) {
        clickCount++;
        this.querySelector('span').textContent = clickCount;
        logEvent(`Clicked on Click Box! Total clicks: ${clickCount}`);
        
        // Visual feedback
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
    
    // Mouse Events
    const mouseBox = document.getElementById('mouseBox');
    let hoverCount = 0;
    
    mouseBox.addEventListener('mouseenter', function() {
        hoverCount++;
        this.querySelector('span').textContent = hoverCount;
        logEvent('Mouse entered Hover Box');
        this.style.backgroundColor = '#f5576c';
    });
    
    mouseBox.addEventListener('mouseleave', function() {
        logEvent('Mouse left Hover Box');
        this.style.backgroundColor = '';
    });
    
    mouseBox.addEventListener('mousemove', function(e) {
        const x = e.offsetX;
        const y = e.offsetY;
        this.style.background = `radial-gradient(circle at ${x}px ${y}px, #f093fb, #f5576c)`;
    });
    
    // Keyboard Events
    const keyInput = document.querySelector('#keyBox input');
    let keyCount = 0;
    
    keyInput.addEventListener('focus', function() {
        logEvent('Keyboard input focused');
        this.parentElement.style.borderColor = '#4facfe';
    });
    
    keyInput.addEventListener('blur', function() {
        logEvent('Keyboard input blurred');
        this.parentElement.style.borderColor = '';
    });
    
    keyInput.addEventListener('keydown', function(e) {
        keyCount++;
        this.parentElement.querySelector('span').textContent = keyCount;
        logEvent(`Key pressed: ${e.key} (KeyCode: ${e.keyCode})`);
    });
    
    // Form Events
    const demoForm = document.getElementById('demoForm');
    let submitCount = 0;
    
    demoForm.addEventListener('submit', function(e) {
        e.preventDefault();
        submitCount++;
        this.parentElement.querySelector('span').textContent = submitCount;
        
        const formData = new FormData(this);
        const name = formData.get('name') || 'Unknown';
        const email = formData.get('email') || 'No email';
        
        logEvent(`Form submitted! Name: ${name}, Email: ${email}`);
        
        // Visual feedback
        this.parentElement.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            this.parentElement.style.transform = 'translateY(0)';
        }, 300);
        
        // Reset form
        this.reset();
    });
    
    // Input Events
    demoForm.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', function() {
            logEvent(`Typing in ${this.placeholder}: ${this.value}`);
        });
        
        input.addEventListener('change', function() {
            logEvent(`${this.placeholder} changed to: ${this.value}`);
        });
    });
}

// Event Logging System
const eventLog = document.getElementById('eventLog');
const maxLogEntries = 20;
let logEntries = [];

function logEvent(message) {
    const timestamp = new Date().toLocaleTimeString();
    const entry = `[${timestamp}] ${message}`;
    
    logEntries.unshift(entry);
    
    // Keep only last N entries
    if (logEntries.length > maxLogEntries) {
        logEntries.pop();
    }
    
    // Update display
    updateEventLog();
    
    // Also log to console
    console.log(`📝 ${entry}`);
}

function updateEventLog() {
    eventLog.innerHTML = logEntries.map(entry => 
        `<div style="padding: 8px; margin: 5px 0; background: #334155; border-radius: 5px; border-left: 3px solid #10b981;">
            ${entry}
        </div>`
    ).join('');
}

function clearEventLog() {
    logEntries = [];
    updateEventLog();
    logEvent('Event log cleared');
}

// ============================================
// PART 5: MINI PROJECTS
// ============================================

function initProjects() {
    // Todo List
    initTodoList();
    
    // Color Picker
    initColorPicker();
    
    // Counter App
    initCounterApp();
}

// Project 1: Todo List
function initTodoList() {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    let nextId = todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 1;
    
    // Load existing todos
    renderTodoList();
    
    // Update stats
    updateTodoStats();
    
    // Add event listener for Enter key
    document.getElementById('todoInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTodo();
        }
    });
}

function addTodo() {
    const input = document.getElementById('todoInput');
    const text = input.value.trim();
    
    if (!text) {
        alert('Please enter a task!');
        return;
    }
    
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    const nextId = todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 1;
    
    const newTodo = {
        id: nextId,
        text: text,
        completed: false,
        createdAt: new Date().toISOString()
    };
    
    todos.push(newTodo);
    localStorage.setItem('todos', JSON.stringify(todos));
    
    renderTodoList();
    updateTodoStats();
    logEvent(`Added todo: "${text}"`);
    
    input.value = '';
    input.focus();
}

function renderTodoList() {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    const todoList = document.getElementById('todoList');
    
    todoList.innerHTML = '';
    
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.className = todo.completed ? 'completed' : '';
        li.innerHTML = `
            <span>${todo.text}</span>
            <div>
                <button onclick="toggleTodo(${todo.id})">
                    <i class="fas fa-${todo.completed ? 'undo' : 'check'}"></i>
                </button>
                <button onclick="deleteTodo(${todo.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        todoList.appendChild(li);
    });
}

function toggleTodo(id) {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos = todos.map(todo => {
        if (todo.id === id) {
            return { ...todo, completed: !todo.completed };
        }
        return todo;
    });
    
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodoList();
    updateTodoStats();
    
    const todo = todos.find(t => t.id === id);
    logEvent(`Marked todo as ${todo.completed ? 'completed' : 'incomplete'}: "${todo.text}"`);
}

function deleteTodo(id) {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    const todoToDelete = todos.find(t => t.id === id);
    
    todos = todos.filter(todo => todo.id !== id);
    localStorage.setItem('todos', JSON.stringify(todos));
    
    renderTodoList();
    updateTodoStats();
    logEvent(`Deleted todo: "${todoToDelete.text}"`);
}

function updateTodoStats() {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    const total = todos.length;
    const completed = todos.filter(t => t.completed).length;
    
    document.getElementById('totalTodos').textContent = total;
    document.getElementById('completedTodos').textContent = completed;
}

// Project 2: Color Picker
function initColorPicker() {
    const redRange = document.getElementById('redRange');
    const greenRange = document.getElementById('greenRange');
    const blueRange = document.getElementById('blueRange');
    const colorDisplay = document.querySelector('.color-box');
    const colorValue = document.querySelector('.color-value');
    
    function updateColor() {
        const r = redRange.value;
        const g = greenRange.value;
        const b = blueRange.value;
        
        const color = `rgb(${r}, ${g}, ${b})`;
        colorDisplay.style.backgroundColor = color;
        colorValue.textContent = `RGB(${r}, ${g}, ${b})`;
        
        // Update presets if matching
        updatePresetSelection(color);
    }
    
    // Add event listeners to ranges
    [redRange, greenRange, blueRange].forEach(range => {
        range.addEventListener('input', updateColor);
    });
    
    // Add event listeners to preset buttons
    document.querySelectorAll('.color-preset').forEach(preset => {
        preset.addEventListener('click', function() {
            const color = this.getAttribute('data-color');
            
            // Parse hex color
            const r = parseInt(color.slice(1, 3), 16);
            const g = parseInt(color.slice(3, 5), 16);
            const b = parseInt(color.slice(5, 7), 16);
            
            // Update ranges
            redRange.value = r;
            greenRange.value = g;
            blueRange.value = b;
            
            updateColor();
            logEvent(`Selected preset color: ${color}`);
        });
    });
    
    // Initialize color
    updateColor();
}

function updatePresetSelection(currentColor) {
    // Convert RGB to hex for comparison
    const rgb = currentColor.match(/\d+/g);
    const hex = rgb ? `#${rgb.map(x => parseInt(x).toString(16).padStart(2, '0')).join('')}` : '';
    
    document.querySelectorAll('.color-preset').forEach(preset => {
        if (preset.getAttribute('data-color') === hex) {
            preset.style.transform = 'scale(1.3)';
            preset.style.border = '3px solid white';
        } else {
            preset.style.transform = 'scale(1)';
            preset.style.border = '3px solid white';
        }
    });
}

// Project 3: Counter App
function initCounterApp() {
    let counter = parseInt(localStorage.getItem('counter')) || 0;
    let history = JSON.parse(localStorage.getItem('counterHistory')) || [];
    let step = parseInt(localStorage.getItem('counterStep')) || 1;
    
    // Load saved values
    updateCounterDisplay();
    renderCounterHistory();
    
    // Load settings
    document.getElementById('negativeAllowed').checked = 
        localStorage.getItem('allowNegative') === 'true';
    document.getElementById('stepValue').value = step;
    
    // Event listeners for settings
    document.getElementById('negativeAllowed').addEventListener('change', function() {
        localStorage.setItem('allowNegative', this.checked);
        logEvent(`Negative numbers ${this.checked ? 'allowed' : 'disallowed'}`);
    });
    
    document.getElementById('stepValue').addEventListener('change', function() {
        step = parseInt(this.value) || 1;
        localStorage.setItem('counterStep', step);
        logEvent(`Step changed to ${step}`);
    });
}

let counter = 0;
let counterHistory = [];

function incrementCounter() {
    const step = parseInt(document.getElementById('stepValue').value) || 1;
    counter += step;
    saveCounter();
    updateCounterDisplay();
    addToHistory(`+${step}`);
    logEvent(`Counter incremented by ${step} to ${counter}`);
}

function decrementCounter() {
    const step = parseInt(document.getElementById('stepValue').value) || 1;
    const allowNegative = document.getElementById('negativeAllowed').checked;
    
    if (!allowNegative && counter - step < 0) {
        alert('Negative numbers are not allowed!');
        return;
    }
    
    counter -= step;
    saveCounter();
    updateCounterDisplay();
    addToHistory(`-${step}`);
    logEvent(`Counter decremented by ${step} to ${counter}`);
}

function resetCounter() {
    counter = 0;
    saveCounter();
    updateCounterDisplay();
    addToHistory('Reset');
    logEvent('Counter reset to 0');
}

function updateCounterDisplay() {
    document.getElementById('counterValue').textContent = counter;
    
    // Visual feedback
    const display = document.getElementById('counterValue');
    display.style.transform = 'scale(1.2)';
    setTimeout(() => {
        display.style.transform = 'scale(1)';
    }, 200);
}

function addToHistory(operation) {
    const entry = {
        timestamp: new Date().toLocaleTimeString(),
        operation: operation,
        value: counter
    };
    
    counterHistory.unshift(entry);
    
    // Keep only last 10 entries
    if (counterHistory.length > 10) {
        counterHistory.pop();
    }
    
    // Save to localStorage
    localStorage.setItem('counterHistory', JSON.stringify(counterHistory));
    
    // Update display
    renderCounterHistory();
}

function renderCounterHistory() {
    const historyDiv = document.getElementById('counterHistory');
    historyDiv.innerHTML = '';
    
    counterHistory.forEach(entry => {
        const div = document.createElement('div');
        div.style.padding = '8px';
        div.style.margin = '5px 0';
        div.style.background = '#f8fafc';
        div.style.borderRadius = '5px';
        div.style.fontSize = '0.9rem';
        div.innerHTML = `
            <strong>${entry.timestamp}</strong>: ${entry.operation} → ${entry.value}
        `;
        historyDiv.appendChild(div);
    });
}

function saveCounter() {
    localStorage.setItem('counter', counter);
}

// ============================================
// PART 6: UTILITY FUNCTIONS
// ============================================

function updateTimestamp() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    
    const formatted = now.toLocaleDateString('en-US', options);
    document.querySelector('#lastUpdated span').textContent = formatted;
    
    // Update every minute
    setTimeout(updateTimestamp, 60000);
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log("🎯 DOM Manipulation & Events Application Ready!");
    logEvent('Application initialized');
});