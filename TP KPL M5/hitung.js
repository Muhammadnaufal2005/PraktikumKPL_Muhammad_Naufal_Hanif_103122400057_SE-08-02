function hitung(str, tipe) {
    let jumlah = 0;
    for (const c of str) {
        if (tipe === "semua") {
            jumlah++;
        } else if (tipe === "huruf") {
            if (c === ' ') continue;
            jumlah++;
        }
    }
    return jumlah;
}

const str = "Bar bar bar";
console.log(hitung(str, "semua")); 
console.log(hitung(str, "huruf"));