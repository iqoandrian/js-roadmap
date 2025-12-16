// Day 1 - JS Fundamental
// File: index.js
// Topic: All concepts combined

console.log("=== JAVASCRIPT DAY 1 - FUNDAMENTALS ===");
console.log("");

// Import other modules
require('./variables.js');
console.log("---");
require('./operators.js');
console.log("---");
require('./comparison.js');

console.log("");
console.log("=== PRACTICAL EXAMPLE ===");

// Practical example using all concepts
const nama = "iqo";
let umur = 20;
const gaji = 5000000;
const pengeluaran = 3500000;

console.log("Nama:", nama);
console.log("Umur:", umur);
console.log("Gaji per bulan: Rp", gaji.toLocaleString());
console.log("Pengeluaran: Rp", pengeluaran.toLocaleString());

// Calculations
const tabungan = gaji - pengeluaran;
const bisaNabung = tabungan > 0;
const rasioTabungan = (tabungan / gaji) * 100;

console.log("");
console.log("Tabungan bulan ini: Rp", tabungan.toLocaleString());
console.log("Bisa menabung?", bisaNabung ? "Ya" : "Tidak");
console.log("Rasio tabungan:", rasioTabungan.toFixed(1) + "%");

// Conditional message
if (rasioTabungan >= 20) {
    console.log("💪 Excellent! Tabungan sehat!");
} else if (rasioTabungan >= 10) {
    console.log("👍 Good! Pertahankan!");
} else if (rasioTabungan > 0) {
    console.log("⚠️ Warning! Kurangi pengeluaran!");
} else {
    console.log("🚨 Danger! Defisit bulan ini!");
}