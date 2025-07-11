// Check if a string is a palindrome.

const myStr = (str) => {
  const revStr = str.split("").reverse().join("");
  const result = revStr === str ? true : false;
  console.log(result);
};

myStr('ANA')
myStr('Rohit')
myStr('nayan')