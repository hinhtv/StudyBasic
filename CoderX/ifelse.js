/**BAI 1:
 * Chỉ sử dụng vòng lặp for và if else để hoàn thiện hàm tìm số lớn nhất trong 1 array
 */

function max(arr) {
    // your code here
    let max = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
  }
  
  /**BAI 2:
 * Viết hàm isTruthy nhận vào 1 giá trị x, trả về true nếu giá trị đó là 1 giá trị truthy, còn không thì trả về false
 * Gợi ý: Nếu không hiểu truthy là gì hãy google với từ khoá `truthy falsy`
 */

function isTruthy(x) {
    // your code here!
    return x?true:false;
  }
  
/** BAI 3:
 * Viết hàm xếp hạng điểm số theo công thức sau:
 * [0-5): C
 * [5-7): B
 * [7-10]: A
 */
function grade(score) {
    // your code here!
    if(score <= 10){
        if(score >= 7){
            return 'A';
        }else if(score >= 5){
            return 'B';
        }else if(score >= 0){
            return 'C';
        }
    }
  }