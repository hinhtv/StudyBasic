//Bài 1: Kiểm tra 1 số có phải là số nguyên tố hay không

/**
* Dùng vòng lặp for kiểm tra số nguyên tố.
* @param {number} x Số cần kiểm tra
* @return {boolean} Trả về true nếu là số nguyên tố, ngược lại là false.
*/

function isPrimeNumber(x) {
    // viết code ở đây.
    if (x < 2) {
        return false;
    } else {
        for (let i = 2; i <= Math.sqrt(x); i++) {
            if (x % i === 0) {
                return false;
            }
        }
    }
    return true;
}

//Bài 2: Viết hàm in ra 1 chuỗi từ a - z

/**
 * Dùng vòng lặp for để hiển thị ra màn hình bảng chữ cái abc.
 * Gợi ý: Dùng String.fromCharCode
 * Ví dụ: String.fromCharCode(97)) sẽ trả về ký tự"a" 
 * Tham khảo: http://www.asciitable.com/ để hiểu thêm về mã ascii
 */

function fromCharCode() {
    // viết code ở đây.
    var string = '';
    for (let i = 97; i <= 122; i++) {
        string += String.fromCharCode(i);
    }
    return string;
}

//Bài 3: Tính tổng các phần tử có trong mảng
/**
 * Sử dụng vòng lặp for để tính tổng các số có trong mảng:
 */

function sum(array) {
    // viết code ở đây.
    var sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

//Bài 4: Tính tổng của tích của các phần tử của array a với các phần tử của array b

// tính tổng của tích của các phần tử của array a với các phần tử của array b.
/**
 * var a = [1, 2, 3];
 * var b = [10, 20];
 * Kết quả mong muốn: 180 // (10 + 20 + 30) + (20 + 40 + 60)
 */

function sumMultiplyArray(a, b) {
    // viết code ở đây.
    var sum = 0;
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            sum += a[i] * b[j];
        }
    }
    return sum;
}

//Bài 5: Tính tích các chữ số từ start đến end, không tính end
/**
 * Viết hàm calculate trả về tích các số từ start đến end, không tính end 
 * Ví dụ: calculate(2, 5) trả về kết quả 24 (vì 2 * 3 * 4 = 24)
 */
function calculate(start, end) {
    // viết code ở đây.
    var mul = 1;
    for (let i = start; i < end; i++) {
        mul *= i;
    }
    return mul;
}

//Bài 6: Kiểm tra array có tồn tại 1 giá trị xác định hay không

/**
*  Sử dụng vòng lặp for viết hàm has để kiểm tra xem array có tồn tại 1 giá trị xác định hay không
*  Tham số:
*- array: mảng cần kiểm tra
*- value: giá trị cần kiểm tra xem có tồn tại trong array không
* Return:
*- true nếu có tồn tại
*- false nếu không tồn tại

*/
function has(array, value) {
    // viết code ở đây
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return true;
        }
    }
    return false;
}