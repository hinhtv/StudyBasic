/**BAI 1:
 * Sử dụng vòng lặp while tính tổng các số lẻ nhỏ hơn x.
 */

function sum(x) {
    // viết code ở đây.
    let sum = 0;
    let i = 0;
    while(i < x){
        if(i%2!==0)    sum+= i;
        i++;
    }
    return sum;
  } 
  
  /**BAI 2:
 * Sử dụng vòng lặp while để tìm bội số chung lớn nhất của 3 và 5 trong khoảng từ 0 đến 1000
 */
let bscln = 1000;
let i = 1000;
while(i>=0){
  if(i%3===0 && i%5===0){
    bscln = i;
    break;
  }
    i--;
}
console.log(bscln);

/**BAI 3:
 * Thử chạy code sau
 */
var secretPassword = 'coders.tokyo';
var readline = require('readline-sync');

var result = readline.question('Nhập vào mật khẩu: ');
console.log(result===secretPassword?'Welcome!':'Wrong password');

/**
 * Viết đoạn chương trình yêu cầu người dùng nhập vào mật khẩu (để login vô máy tính chẳng hạn), nếu người dùng nhập sai, hiển thị ra "Wrong password", nhập đúng thì hiển thị ra "Welcome!"
 */