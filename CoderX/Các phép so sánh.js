var a = [1, 2];
var b = [1, 2];
console.log(a === b); // FALSE
// Chạy chương trình và tìm hiểu vì sao kết quả lại là false mặc dù giá trị của 2 array có vẻ giống nhau. Viết câu trả lời ở dưới đây.
// khi so sánh là so sánh vùng nhớ của 2 object nên trả về FALSE

var a = {
    foo: 'bar'
};

var b = {
    foo: 'bar'
};

console.log(a === b); //FALSE
// Chạy chương trình và tìm hiểu vì sao kết quả lại là false mặc dù giá trị của 2 object có vẻ giống nhau. Viết câu trả lời ở dưới đây.
// khi so sánh là so sánh vùng nhớ của 2 object nên trả về FALSE

var a = '1000';
var b = '200';

console.log(a > b);
// Chạy chương trình và tìm hiểu vì sao kết quả lại là false mặc dù 1000 trông có vẻ lớn hơn 200. Viết câu trả lời ở dưới đây.
// Vì trong javascript khi so sánh 2 string sẽ so sánh theo từng index của string ex: "1" vs "2", trong bảng mã ASCII ký tự "1" < "2" => "1000" < "200" => FALSE
