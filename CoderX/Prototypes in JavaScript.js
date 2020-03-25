// Bài 1: Viết hàm xây dựng các đối tượng student có các thuộc tính sau

/*
  Viết hàm xây dựng các đối tượng student có các thuộc tính sau:
  - name: String,
  - level: String,
  - school: String

  Trong đó, thuộc tính school là thuộc tính dùng chung, có giá trị là "CodersX".
*/

function Student(name, level) {
    this.name = name;
    this.level = level;
    this.school = "CodersX";
}


// Bài 2: Viết hàm xây dựng để khởi tạo object

/*
  Viết hàm xây dựng các đối tượng student gồm các thuộc tính:
    diemToan: Number,
    diemLy: Number,
    diemHoa: Number
    average: [function];

    average là hàm tính điểm trung bình 3 môn. 
    average là thuộc tính dùng chung.

  Output: 
    student1.average() = 7
    student2.average() = 8
*/

function Student(diemToan, diemLy, diemHoa) {
    // Viết code ở đây
    this.diemToan = diemToan;
    this.diemLy = diemLy;
    this.diemHoa = diemHoa;
}

Student.prototype.average = function () {
    // Viết code ở đây
    return Math.round((this.diemToan + this.diemLy + this.diemHoa) / 3);
}

var student1 = new Student(6, 7, 7);
var student2 = new Student(8, 9, 6);


// Bài 3: Chạy đoạn code phía dưới và giải thích kết quả

/**
 * Chạy đoạn code phía dưới và giải thích kết quả
 * Link run code: https://repl.it/@maithedung/DroopyPaltryKeygenerator
 */

function answer() {
    return `
    // Ghi câu trả lời ở đây
    vì Propertype có thuộc tính share vì vậy function sing được khai báo trên cùng 1 vùng nhớ và tiết kiệm dữ liệu
    `
}

function Person(name, age) {
    this.type = "person";
    this.name = name;
    this.age = age;
}

Person.prototype.sing = function () {
    console.log(`Là lá la...`);
};

const mrThinh = new Person("Pham Thinh", 33);
const mrDung = new Person("The Dung", 19);

mrThinh.sing === mrDung.sing


// Bài 4: Chạy đoạn code phía dưới và giải thích kết quả

/**
 * Chạy đoạn code phía dưới và giải thích kết quả
 * Link run code: https://repl.it/@maithedung/FarflungIdioticExabyte
 */

function answer() {
    return `
    // Ghi câu trả lời ở đây
    vì function trong trường hợp này sẽ được tạo mới sau mỗi từ khóa new nên khi so sánh chúng sẽ không bằng nhau
    `
}

function Person(name, age) {
    this.type = "person";
    this.name = name;
    this.age = age;

    this.sing = function () {
        console.log(`Là lá la...`);
    };

}

const mrThinh = new Person("Pham Thinh", 33);
const mrDung = new Person("The Dung", 19);

mrThinh.sing === mrDung.sing
