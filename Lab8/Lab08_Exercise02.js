const isPrime = (n) => {
  return new Promise((resolve, reject) => {
    if (n <= 1) return reject({ prime: false });
    for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
      if (n % i === 0) return reject({ prime: false });
    }
    resolve({ prime: true });
  });
};

// Test using .then() and .catch()
console.log('start');
isPrime(7)
  .then(console.log)
  .catch(console.error);
console.log('end');

// Test using async/await
(async () => {
  console.log('start (async/await)');
  try {
    const result = await isPrime(7);
    console.log(result);
  } catch (err) {
    console.error(err);
  }
  console.log('end (async/await)');
})();