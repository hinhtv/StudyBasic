/**
if/else statements can be chained together for complex logic. Here is pseudocode of multiple chained if / else if statements:

if (condition1) {
  statement1
} else if (condition2) {
  statement2
} else if (condition3) {
  statement3
. . .
} else {
  statementN
}
Write chained if/else if statements to fulfill the following conditions:

num < 5 - return "Tiny"
num < 10 - return "Small"
num < 15 - return "Medium"
num < 20 - return "Large"
num >= 20 - return "Huge"
 */

 /** ANSWERS */

 function testSize(num) {
    // Only change code below this line
    if(num <= 4){
      return "Tiny";
    }else if(num <= 8){
      return "Small";
    }else if(num <= 14){
      return "Medium";
    }else if(num <= 17){
      return "Large";
    }else{
      return "Huge";
    }
  
    return "Change Me";
    // Only change code above this line
  }
  
  testSize(7);
  
  