/**
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
*/

// ANSWER

function truncateString(str, num) {
    if(num<str.length){
      return str.slice(0, num) + '...';
    }
    return str;
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);
  