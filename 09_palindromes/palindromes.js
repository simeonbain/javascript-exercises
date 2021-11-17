const palindromes = function (string) {
  // Convert string to array
  let array = [...string.toLowerCase()];

  // Remove punctuation
  array = array.filter((char) => {
    return !(`,.;:'"/-&! `.includes(char));
  });

  // Compare to reversed array
  const reversedArray = array.slice().reverse(); 
  return array.every((char, index) => char === reversedArray[index]);
 
};

// Do not edit below this line
module.exports = palindromes;
