/**
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
*/

// ANSWER

function repeatStringNumTimes(str, num) {
    if(num < 1){
      return "";
    }
    if(num == 1){
      return str;
    }
    return repeatStringNumTimes(str, num -1) + str;
  }
  
  console.log(repeatStringNumTimes("abc", 3));
  