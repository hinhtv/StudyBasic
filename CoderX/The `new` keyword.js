// Bài 1: Viết hàm trả về các thuộc tính của 1 object

/**
 * Tạo một đối tượng student gồm các property name, sex, age
 * Example:
  name: "CodersX",
  sex: "Male",
  age: 1
 * Viết hàm showInfo trả về object đó
*/

var student = {
    name: "CodersX",
  sex: "Male",
  age: 1
}

function showInfo(obj) {
  // viết code ở đây
  this.name = name;
  this.sex = sex;
  this.age = age;
}

// Bài 2: Viết hàm xoá thuộc tính trong 1 object và trả object đã xoá thuộc tính

/**
 * Viết hàm xoá thuộc tính (prop) khỏi object student
 * Trả về object đã được xoá
 * Example:
 *  removeProp("name") = { class: “VI”, rollno: 12 }
*/

function removeProp(prop) {
    var student = {
            name : "David Rayy",
            class : "VI",
            rollno : 12
        }
  // chỉ viết code ở dưới dòng này.
  delete student[prop];
  return student;
}

  

// Bài 3: Viết hàm đếm số thuộc tính của 1 object

/**
 * Viết hàm countProperty để in ra độ dài của một đối tượng
 * @param {object}
 * @return {number}
 * 
 * Example: 
 * var student = {
 *      name: "Jerry", 
 *      age: 14,
 *      role: "student"
 *  }
 * lengthObj(student); // length: 3
}
*/

function countProperty(obj) {
    // viết code ở đây
    let count = 0;
    for(key in obj){
        count++;
    }
    return count
  }

// Bài 4: Viết hàm xây dựng để tạo các đối tượng

/**
 * Viết hàm xây dựng Shape để tạo các đối tượng hình học có các thuộc tính sau:
 *  {
 *    color: String,
 *    shape: String,
 *    fill: boolean
 *  }
*/

function Shape(color, shape, fill) {
    // Your code here
    this.color = color;
    this.shape = shape;
    this.fill = fill;
  }
  
  var shape1 = new Shape("red", "rectangle", true);
  var shape2 = new Shape("orange", "triangle", false);
  var shape3 = new Shape("tomato", "circle", true);
  