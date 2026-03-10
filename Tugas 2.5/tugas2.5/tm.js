function fizzBuzz(arr) {
   let hasil = [];

   for (let i = 0; i <arr.length; i++) {
     let angka = arr[i];

     if (angka % 14 === 0) {
       hasil.push("FizzBuzz");
     } else if (angka % 2 === 0) {
       hasil.push("Fizz");
     } else if (angka % 7 === 0) {
       hasil.push("Buzz");
     } else {
       hasil.push(angka);
     }
   }

   return hasil.join(" ");  
}

module.exports = fizzBuzz;