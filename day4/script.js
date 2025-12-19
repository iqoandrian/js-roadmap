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