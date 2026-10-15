// Tugas Minggu 06: lima soal logika sebagai fungsi
// Setiap fungsi memakai parameter dan return, lalu diuji dengan minimal 3 masukan

// Soal 1: ganjil atau genap
function ganjilGenap(angka) {
  if (angka % 2 === 0) {
    return "genap";
  } else {
    return "ganjil";
  }
}

console.log("Soal 1: ganjil atau genap");
console.log(`ganjilGenap(7) = ${ganjilGenap(7)}`); // ganjil
console.log(`ganjilGenap(12) = ${ganjilGenap(12)}`); // genap
console.log(`ganjilGenap(0) = ${ganjilGenap(0)}`); // genap

// Soal 2: konversi suhu Celsius ke Fahrenheit
const celsiusKeFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

console.log("Soal 2: konversi suhu");
console.log(`celsiusKeFahrenheit(0) = ${celsiusKeFahrenheit(0)}`); // 32
console.log(`celsiusKeFahrenheit(100) = ${celsiusKeFahrenheit(100)}`); // 212
console.log(`celsiusKeFahrenheit(-40) = ${celsiusKeFahrenheit(-40)}`); // -40

// Soal 3: nilai terbesar dari tiga angka
function nilaiTerbesar(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= c) {
    return b;
  } else {
    return c;
  }
}

console.log("Soal 3: nilai terbesar");
console.log(`nilaiTerbesar(5, 9, 2) = ${nilaiTerbesar(5, 9, 2)}`); // 9
console.log(`nilaiTerbesar(80, 75, 80) = ${nilaiTerbesar(80, 75, 80)}`); // 80
console.log(`nilaiTerbesar(-3, -7, -1) = ${nilaiTerbesar(-3, -7, -1)}`); // -1

// Soal 4: tahun kabisat
function tahunKabisat(tahun) {
  if ((tahun % 4 === 0 && tahun % 100 !== 0) || tahun % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log("Soal 4: tahun kabisat");
console.log(`tahunKabisat(2024) = ${tahunKabisat(2024)}`); // true
console.log(`tahunKabisat(2026) = ${tahunKabisat(2026)}`); // false
console.log(`tahunKabisat(1900) = ${tahunKabisat(1900)}`); // false
console.log(`tahunKabisat(2000) = ${tahunKabisat(2000)}`); // true

// Soal 5: harga setelah diskon belanja
function hargaSetelahDiskon(total) {
  let diskon = 0;
  if (total >= 200000) {
    diskon = 20;
  } else if (total >= 100000) {
    diskon = 10;
  }
  return total - (total * diskon) / 100;
}

console.log("Soal 5: diskon belanja");
console.log(`hargaSetelahDiskon(250000) = ${hargaSetelahDiskon(250000)}`); // 200000
console.log(`hargaSetelahDiskon(100000) = ${hargaSetelahDiskon(100000)}`); // 90000
console.log(`hargaSetelahDiskon(75000) = ${hargaSetelahDiskon(75000)}`); // 75000
