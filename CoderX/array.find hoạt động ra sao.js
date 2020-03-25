// Bài 1: Viết hàm trả về số chẵn đầu tiên trong mảng

// Viết hàm trả về số chẵn đầu tiên trong mảng sử dụng find method
// Nếu không tìm thấy số chẵn nào thì trả về undefined
function findFirstEvenNumber(array) {
    // your code here
    return array.find(num => {return num % 2 === 0;});
  }

// Bài 2: Tìm số chia hết cho x

/**
 * viết hàm tìm số chia hết cho x đầu tiên có trong mảng
 * @params {array} array - Mảng các chữ số
 * @params {number} x - Số bị chia
 * Nếu không có trả về undefined
 * Example: 
 * findDivisibleNum([1, 3, 4], 2) => 4
 */

function findDivisibleNum(array, x) {
    // viết code ở đây.
    return array.find(num => {return num % x === 0;});
  }
  