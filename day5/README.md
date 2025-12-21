# Day 5 - Async JavaScript (Simple Version)

Hanya 3 konsep penting yang perlu dipahami tentang asynchronous JavaScript.

## 🎯 3 Konsep Penting

### 1. Callback Functions
Function yang dipanggil setelah operasi asynchronous selesai.

```javascript
// Contoh sederhana
setTimeout(() => {
    console.log("Ini callback!");
}, 1000);