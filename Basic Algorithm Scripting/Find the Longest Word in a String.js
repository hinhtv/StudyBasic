/**
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

// ANSWER

function findLongestWordLength(str) {
    str = str.split(" ");
    str.sort((a, b) => b.length - a.length);
    return str[0].length;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");
  