// Bài 1: Viết hàm trả về mảng chứa phần tử lớn hơn hoặc bằng 5

// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
function fiveAndGreaterOnly(arr) {
    // your code here
    return arr.filter(num => { return num >= 5; });
}


// Bài 2: Viết hàm trả về mảng chỉ chứa số chẵn

// Given an array of numbers, return a new array that only includes the even numbers.
function evensOnly(arr) {
    // your code here!
    return arr.filter(num => { return num % 2 === 0; });
}


// Bài 3: Viết hàm lọc ra những học sinh không phải là female

/**
* Give a list of students, filter out non-female 
*/

var members = [
    { name: 'Lan', gender: 'female' },
    { name: 'Linh', gender: 'female' },
    { name: 'Trung', gender: 'male' },
    { name: 'Peter', gender: 'gay' }
];
function filterOutFemales(members) {
    // your code here!
    return members.filter(member => { return member.gender !== 'female'; });
}
