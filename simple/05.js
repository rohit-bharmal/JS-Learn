// Check if a number is prime.

const isPrime = (num) => {
  if (num < 1) return false;
  if (num === 2) return true;

  if (num % 2 === 0) {
    return false;
  }
  return true;
};

console.log(isPrime(11)); // true
console.log(isPrime(2)); // true
console.log(isPrime(12)); // false
console.log(isPrime(7)); // true

// list prime numbers
const listPrime = () => {
  const primes = [];

  for (let i = 2; i <= 100; i++) {
    let isPrime = true;

    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primes.push(i);
    }
  }

  return primes;
};

console.log(listPrime());

