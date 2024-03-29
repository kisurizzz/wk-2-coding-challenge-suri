function findPrimes(numbers) {
    const primes = [];
  
    for (const num of numbers) {
      if (isPrime(num)) {
        primes.push(num);
      }
    }
  
    return primes;
  }
  
  function isPrime(num) {
    // Handle cases for 0, 1, and negative numbers
    if (num <= 1) return false;
    if (num <= 3) return true; // 2 and 3 are prime
  
    // Check divisibility only up to the square root of num
    const limit = Math.sqrt(num);
  
    // Only check for divisibility by odd numbers (except 2)
    for (let i = 2; i <= limit; i += 2) {
      if (num % i === 0) return false;
    }
  
    return true;
  }
  
  // Example usage
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const primeNumbers = findPrimes(numbers);
  console.log(primeNumbers); // Output: [2, 3, 5, 7]
  