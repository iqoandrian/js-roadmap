# Day 6 - Modern JavaScript (ES6+)

Fitur-fitur JavaScript modern yang wajib dipahami (2015-sekarang).

## 🎯 10 Fitur ES6+ yang Paling Sering Dipakai

### 1. let & const
```javascript
// Gunakan const sebanyak mungkin
const PI = 3.14; // Tidak bisa di-reassign

// Gunakan let jika perlu reassign
let counter = 0;
counter = 1; // Bisa

// Hindari var (kecuali perlu hoisting khusus)