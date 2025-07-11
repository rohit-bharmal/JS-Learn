// Count the number of vowels in a string.
const countVowels = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  const myStr = str.toLowerCase().split("");
  let count = 0;

  myStr.forEach((char) => {
    if (vowels.includes(char)) {
      count++;
    }
  });
  return count;
};

console.log("Number of vowels in string:", countVowels("Hi I am Vowel"));
