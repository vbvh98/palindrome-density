const isPalindrome = (word) => word === word.split("").reverse().join("");

const computeProgress = (text) => {
  const words = text.split(" ").filter((word) => word.length > 0);
  const palindromeCount = words.reduce(
    (count, word) => (isPalindrome(word) ? count + 1 : count),
    0
  );
  return palindromeCount / (words?.length || 1);
};

export { computeProgress };
