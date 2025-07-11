// Find the factorial of a number.

const factNum = (num) => {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};

console.log(factNum(5));
