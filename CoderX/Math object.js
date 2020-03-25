// Bài 1: Dùng hàm powerup tính bình phương các số chia hết cho 2 trong mảng truyền vào

// Dùng hàm powerup tính bình phương các số chia hết cho 2 trong mảng truyền vào

function powerup(arr) {
    // your code here!
    return arr.map((number) => {
        if(number % 2 === 0){
            return Math.pow(number, 2);
        }
        return number;
    })
  }

// Bài 2: Dùng hàm average tính điểm trung bình 3 môn của một học sinh

/** 
 * Dùng hàm average tính điểm trung bình 3 môn của một học sinh.
 * Làm tròn điểm trung bình
 * Ví dụ: [8, 8, 6.75]  => 8
 * Gợi ý: Dùng Math.round 
*/

function average(arr) {
    // your code here!
    let sum = arr.reduce((number1, number2) => {
        return number1 + number2;
    })
    return Math.round(sum/arr.length);
  }
  

// Bài 3: Viết hàm để chuyển các số âm trong một mảng thành các số dương

/* 
  Viết hàm positiveNumber để chuyển các số âm trong một mảng thành các số dương.
  Yêu cầu sử dụng Math Object
*/

function positiveNumber(arr) {
    // your code here
    return arr.map((number) => {
        if(number < 0){
            return -number;
        }
        return number;
    })
  }
  

// Bài 4: Viết hàm random để in ra một số ngẫu nhiên từ 1 - 100

// Viết hàm random để in ra một số ngẫu nhiên từ 1 - 100

function random() {
    // your code here!
    return Math.random() * 100;
  }

// Bài 5: Viết hàm kiểm tra 3 cạnh có phải là cạnh của tam giác hay không

/** 
 * Viết hàm rightTriangle nhập vào 3 cạnh của một tam giác.
 * Cho biết đó có phải là tam giác vuông hay không? 
*/

function rightTriangle(a, b, c) {
    // your code here
    if((a + b) > c && (b + c) > a && (c + a) > b){
        return Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2) ||
                Math.pow(b, 2) + Math.pow(c, 2) === Math.pow(a, 2) ||
                Math.pow(c, 2) + Math.pow(a, 2) === Math.pow(b, 2);
    }
    return false;
  }

// Bài 6: Viết hàm tính chu vi và hàm tính diện tích hình tròn

/** 
 * Viết hàm circumferenceOfCircle() tính chu vi và hàm acreageOfCircle() tính diện tích hình tròn 
 * khi biết bán kính
 * Với PI = 3.14  
*/

function circumferenceOfCircle(r) {
    // your code here!
    return 3.14 * 2 * r;
  }
  function acreageOfCircle(r) {
    //your code here!
    return 3.14 * Math.pow(r, 2);
  }

// Bài 7: Viết hàm để tính 3 giá trị sin, cos, tan, của một số nhập vào
  
/** 
 * Viết hàm trigonim để tính 3 giá trị sin cos tan của một số nhập vào
 * Example: trigonim(45) = [ '0.851', '0.525', '1.620' ]
 * Gợi ý: Sử dụng toFixed() method
*/

function trigonim(number) {
    // your code here
      let arr=[];
      arr.push(Math.sin(number).toFixed(3));
      arr.push(Math.cos(number).toFixed(3));
      arr.push(Math.tan(number).toFixed(3));
      return arr;
  }
  