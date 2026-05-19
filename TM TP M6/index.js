function is_not_fizzbuzz(number) {
  if (!Number.isInteger(number)) {
    throw new TypeError("Input harus berupa bilangan bulat");
  }
  if (number % 3 === 0 || number % 5 === 0) {
    return false;
  }
  return true;
}
try {
  console.log(is_not_fizzbuzz(1));        // Output: true
  console.log(is_not_fizzbuzz(3));        // Output: false
  console.log(is_not_fizzbuzz(5));        // Output: false
  console.log(is_not_fizzbuzz(30));       // Output: false
  console.log(is_not_fizzbuzz(7));        // Output: true 
  console.log(is_not_fizzbuzz(null));     
  console.log(is_not_fizzbuzz(NaN));      
  console.log(is_not_fizzbuzz(Infinity)); 
} catch (error) {
  console.error("Error:", error.message);
}