// Day 5 - Async JavaScript (Simple Version)
// Hanya 3 konsep penting: Callback, Promise, Async/Await

console.log("Day 5 - Async JavaScript Loaded!");

// ============================================
// 1. CALLBACK FUNCTIONS
// ============================================

function demoCallback() {
    const output = document.getElementById('callbackOutput');
    output.innerHTML = '<span class="loading">Memulai proses...</span>\n';
    
    // Simulasi async operation dengan setTimeout (callback)
    setTimeout(() => {
        output.innerHTML += '<span class="success">Langkah 1 selesai (2 detik)</span>\n';
        
        setTimeout(() => {
            output.innerHTML += '<span class="success">Langkah 2 selesai (1 detik)</span>\n';
            
            setTimeout(() => {
                output.innerHTML += '<span class="success">Langkah 3 selesai (1.5 detik)</span>\n';
                output.innerHTML += '<span class="success">SEMUA PROSES SELESAI!</span>\n';
            }, 1500);
            
        }, 1000);
        
    }, 2000);
}

// Contoh "Callback Hell" - nested callbacks yang sulit dibaca
function demoCallbackHell() {
    const output = document.getElementById('callbackOutput');
    output.innerHTML = '<span class="loading">Memulai Callback Hell...</span>\n';
    
    // Ini yang disebut "Callback Hell" atau "Pyramid of Doom"
    simulateOrder((orderResult) => {
        output.innerHTML += `<span class="success">${orderResult}</span>\n`;
        
        processPayment((paymentResult) => {
            output.innerHTML += `<span class="success">${paymentResult}</span>\n`;
            
            prepareFood((foodResult) => {
                output.innerHTML += `<span class="success">${foodResult}</span>\n`;
                
                deliverFood((deliveryResult) => {
                    output.innerHTML += `<span class="success">${deliveryResult}</span>\n`;
                    output.innerHTML += '<span class="error">Callback Hell sulit dibaca dan di-maintain!</span>\n';
                });
            });
        });
    });
}

// Helper functions untuk callback hell example
function simulateOrder(callback) {
    setTimeout(() => {
        callback("Pesanan diterima");
    }, 1000);
}

function processPayment(callback) {
    setTimeout(() => {
        callback("Pembayaran berhasil");
    }, 1500);
}

function prepareFood(callback) {
    setTimeout(() => {
        callback("Makanan siap");
    }, 2000);
}

function deliverFood(callback) {
    setTimeout(() => {
        callback("Makanan sampai");
    }, 1000);
}

// ============================================
// 2. PROMISE
// ============================================

function demoPromise() {
    const output = document.getElementById('promiseOutput');
    output.innerHTML = '<span class="loading">Membuat Promise...</span>\n';
    
    // Buat Promise yang simulasi proses async
    const myPromise = new Promise((resolve, reject) => {
        output.innerHTML += '<span class="loading">Status: PENDING (menunggu...)</span>\n';
        
        // Simulasi async process (50% berhasil, 50% gagal)
        const isSuccess = Math.random() > 0.5;
        
        setTimeout(() => {
            if (isSuccess) {
                resolve("Janji ditepati! Data berhasil diambil.");
            } else {
                reject("Janji tidak ditepati! Error terjadi.");
            }
        }, 2000);
    });
    
    // Handle Promise
    myPromise
        .then(result => {
            output.innerHTML += `<span class="success">Status: FULFILLED</span>\n`;
            output.innerHTML += `<span class="success">${result}</span>\n`;
        })
        .catch(error => {
            output.innerHTML += `<span class="error">Status: REJECTED</span>\n`;
            output.innerHTML += `<span class="error">${error}</span>\n`;
        })
        .finally(() => {
            output.innerHTML += '<span class="loading">Proses selesai (finally selalu dieksekusi)</span>\n';
        });
}

// Promise Chaining
function demoPromiseChain() {
    const output = document.getElementById('promiseOutput');
    output.innerHTML = '<span class="loading">Memulai Promise Chaining...</span>\n';
    
    // Simulasi login user dengan Promise chaining
    simulateLogin("iqo", "password123")
        .then(userData => {
            output.innerHTML += `<span class="success">Login berhasil: ${userData.name}</span>\n`;
            return getUserProfile(userData.id); // Return promise baru
        })
        .then(profile => {
            output.innerHTML += `<span class="success">Profile loaded: ${profile.email}</span>\n`;
            return getFriends(profile.userId); // Return promise baru
        })
        .then(friends => {
            output.innerHTML += `<span class="success">Friends loaded: ${friends.length} teman</span>\n`;
            output.innerHTML += '<span class="success">Semua data berhasil di-load!</span>\n';
        })
        .catch(error => {
            output.innerHTML += `<span class="error">Error: ${error}</span>\n`;
        });
}

// Helper functions untuk promise chaining
function simulateLogin(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username && password) {
                resolve({ id: 1, name: "Iqo Pratama", token: "abc123" });
            } else {
                reject("Login gagal: username/password salah");
            }
        }, 1000);
    });
}

function getUserProfile(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ 
                userId: userId, 
                email: "iqo@example.com", 
                age: 20, 
                city: "Jakarta" 
            });
        }, 1000);
    });
}

function getFriends(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["Budi", "Sari", "Rina", "Ahmad"]);
        }, 1000);
    });
}

// ============================================
// 3. ASYNC/AWAIT (MODERN)
// ============================================

async function demoAsyncAwait() {
    const output = document.getElementById('asyncOutput');
    output.innerHTML = '<span class="loading">Memulai Async/Await...</span>\n';
    
    try {
        // await membuat kode terlihat seperti synchronous
        output.innerHTML += '<span class="loading">Mengambil data user...</span>\n';
        const user = await fetchUserData();
        output.innerHTML += `<span class="success">User: ${user.name}</span>\n`;
        
        output.innerHTML += '<span class="loading">Mengambil posts user...</span>\n';
        const posts = await fetchUserPosts(user.id);
        output.innerHTML += `<span class="success">Posts: ${posts.length} posts</span>\n`;
        
        output.innerHTML += '<span class="loading">Mengambil comments...</span>\n';
        const comments = await fetchComments(posts[0].id);
        output.innerHTML += `<span class="success">Comments: ${comments.length} comments</span>\n`;
        
        output.innerHTML += '<span class="success">Semua data berhasil di-fetch dengan Async/Await!</span>\n';
        
    } catch (error) {
        output.innerHTML += `<span class="error">Error: ${error}</span>\n`;
    }
}

// Real API Example dengan Fetch
async function demoFetchAPI() {
    const output = document.getElementById('asyncOutput');
    output.innerHTML = '<span class="loading">Fetching real API data...</span>\n';
    
    try {
        // Fetch data dari public API (JSONPlaceholder)
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const user = await response.json();
        output.innerHTML += `<span class="success">Real API Data:</span>\n`;
        output.innerHTML += `<pre>${JSON.stringify(user, null, 2)}</pre>\n`;
        
        // Fetch posts dari user tersebut
        const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
        const posts = await postsResponse.json();
        output.innerHTML += `<span class="success">User punya ${posts.length} posts</span>\n`;
        
    } catch (error) {
        output.innerHTML += `<span class="error">Gagal fetch API: ${error.message}</span>\n`;
        output.innerHTML += '<span class="loading">Tip: Coba buka di browser yang support fetch API</span>\n';
    }
}

// Helper functions untuk async/await
function fetchUserData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, name: "Iqo", email: "iqo@example.com" });
        }, 1500);
    });
}

function fetchUserPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, title: "Belajar JavaScript", userId: userId },
                { id: 2, title: "Async/Await itu mudah", userId: userId },
                { id: 3, title: "Day 5 Progress", userId: userId }
            ]);
        }, 1200);
    });
}

function fetchComments(postId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, text: "Mantap bang!", postId: postId },
                { id: 2, text: "Thanks sharing!", postId: postId }
            ]);
        }, 1000);
    });
}

// ============================================
// BONUS: COMPARISON ALL METHODS
// ============================================

async function compareAll() {
    const output = document.getElementById('compareOutput');
    output.innerHTML = '<span class="loading">Membandingkan 3 metode...</span>\n';
    
    // Simulasi tugas yang sama dengan 3 cara berbeda
    const task = "Mengambil data user dan posts";
    
    output.innerHTML += `\n<strong>Tugas: ${task}</strong>\n\n`;
    
    // 1. Dengan Callback
    output.innerHTML += '<span class="loading">1. Dengan CALLBACK:</span>\n';
    await simulateWithCallback((result) => {
        output.innerHTML += `<span class="success">   ${result}</span>\n`;
    });
    
    // 2. Dengan Promise
    output.innerHTML += '<span class="loading">\n2. Dengan PROMISE:</span>\n';
    simulateWithPromise()
        .then(result => {
            output.innerHTML += `<span class="success">   ${result}</span>\n`;
        });
    
    // 3. Dengan Async/Await
    output.innerHTML += '<span class="loading">\n3. Dengan ASYNC/AWAIT:</span>\n';
    try {
        const result = await simulateWithAsyncAwait();
        output.innerHTML += `<span class="success">   ${result}</span>\n`;
    } catch (error) {
        output.innerHTML += `<span class="error">   ${error}</span>\n`;
    }
    
    output.innerHTML += '\n<span class="success">Kesimpulan: Async/Await paling mudah dibaca!</span>\n';
}

function simulateWithCallback(callback) {
    setTimeout(() => {
        callback("Callback: Data berhasil diambil (nested function)");
    }, 1000);
}

function simulateWithPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise: Data berhasil diambil (.then chain)");
        }, 1200);
    });
}

async function simulateWithAsyncAwait() {
    await new Promise(resolve => setTimeout(resolve, 1300));
    return "Async/Await: Data berhasil diambil (seperti sync code)";
}

// ============================================
// SIMPLE EXPLANATION FOR EACH CONCEPT
// ============================================

/*
1. CALLBACK:
   - Function yang di-pass sebagai argument ke function lain
   - Dieksekusi setelah operasi async selesai
   - Problem: Bisa jadi "Callback Hell" jika nested

2. PROMISE:
   - Object yang merepresentasikan nilai di masa depan
   - 3 states: PENDING → FULFILLED / REJECTED
   - Method: .then(), .catch(), .finally()
   - Lebih terstruktur dari callback

3. ASYNC/AWAIT:
   - Syntactic sugar untuk Promise
   - Buat kode async terlihat seperti sync
   - Gunakan 'async' sebelum function
   - Gunakan 'await' sebelum Promise
   - Error handling dengan try/catch
*/

console.log("Day 5 Async JavaScript ready to learn!");