// Bài 1:
/**
 * Điểm khác nhau giữa 2 vòng lặp for...of và for...in, viết code ví dụ
 * for...of dùng cho loop một array
 * for...in dùng cho loop một object
 */

//Bài 2: Sử dụng for of để tính tích các phần tử có trong mảng

/**
 * Sử dụng vòng lặp for...of để tính tích của các phần tử trong một array gồm các số
 */

function multiply(arr) {
    // Write code here...
    let mul = 1;
    for (let item of arr) {
        mul *= item;
    }
    return mul;
}

//Bài 3: Trả về mảng chứa tất cả key có trong object

/**
* Sử dụng vòng lặp for...in để lấy về tất cả các key của object sau, 
* in ra cả các key của các nested object (object con lồng bên trong object lớn)
* Gợi ý: đây là bài tập khó, bạn nên tìm hiểu về recursive trước
*/

var apartment = {
    bedroom: {
        area: 20,
        bed: {
            type: 'twin-bed',
            price: 100
        }
    }
};
var a = [];
function getObjectKey(obj, keys) {
    // Write code here...
    for (let key in obj) {
        a.push(key);
        if (typeof (obj[key]) === 'object') {
            getObjectKey(obj[key]);
        }
    }
    return a;
}

//Bài 4: Viết hàm kiểm tra object có tồn tại 1 key xác định hay không
/**
* viết hàm has để kiểm tra xem object có tồn tại 1 key xác định hay không
* Tham số:
*  - object: object cần kiểm tra
*  - key: key cần kiểm tra xem có tồn tại trong object không
* Return:
*  - true nếu có tồn tại
*  - false nếu không tồn tại
*/

function has(object, key) {
    return object.hasOwnProperty(key);
}

//Bài 5: Tính tổng các số nguyên có trong mảng

/**
* Giả thiết: numbers là một array các số nguyên
* Yêu cầu: 
* - trả về tổng các số, dùng vòng lặp for ... of
* - nếu array trống trả về 0
*/

function sum(numbers) {
    // Write code here...
    var sum = 0;
    for (number of numbers) {
        sum += number;
    }
    return sum;
}