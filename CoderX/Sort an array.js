// Bài 1: Sử dụng sort method để sắp xếp lại 1 array các số sau theo thứ tự tăng dần

// Sử dụng sort method để sắp xếp lại 1 array các số sau theo thứ tự tăng dần (descending order)

function sortNumber(arr) {
    // Write code here...
    return arr.sort();
  }

// Bài 2: Sử dụng sort method để sắp xếp lại 1 array các số sau theo thứ tự giảm dần

//Sử dụng sort method để sắp xếp lại 1 array các số sau theo thứ tự giảm dần (descending order)

function sortNumber(arr) {
    // Write code here...
    return arr.sort((a,b) =>{
        return b-a;
    });
  }

// Bài 3: Sắp xếp các chuỗi trong mảng theo độ dài từ nhỏ đến lớn

// Sort an array from shortest string to longest

function lengthSort(arr) {
    // Write code here...
    return arr.sort((a, b) =>{
        return a.length - b.length;
    })
  }
  
  // Gợi ý: độ dài của 1 string = string.length, thử chạy "abc".length

// Bài 4: Sắp xếp các chuỗi trong mảng theo bảng chữ cái

// Sort an array alphabetically

function alphabetical(arr) {
    // Write code here...
    return arr.sort((a, b) => {
        return a > b;
    })
  }

// Bài 5: Sắp xếp các phần tử trong mảng theo thuộc tính age từ nhỏ đến lớn

// Sort the objects in the array by age

var arr = [
    {
      name: "Quiet Samurai",
      age: 22
    },
    {
      name: "Arrogant Ambassador",
      age: 100
    },
    {
      name: "Misunderstood Observer",
      age: 2
    },
    {
      name: "Unlucky Swami",
      age: 77
    }
  ]
  
  function byAge(arr){
    // Write code here...
    return arr.sort((a, b) => {
        return a.age - b.age;
    })
  }

// Bài 6: Viết function trả về 1 array gồm 3 người có điểm cao nhất sắp xếp theo thứ tự điểm giảm dần

/**
 * Dữ liệu sinh viên Coders.Tokyo School là một array các object như sau
 * Viết function trả về 1 array gồm 3 người có điểm cao nhất sắp xếp theo thứ tự điểm giảm dần. 
 * Mục đích để hiển thị lên bảng Leaderboard
 * Gợi ý: sử dụng sort và slice
 */
 
var students = [
    { name: 'A', score: 100 },
    { name: 'B', score: 10 },
    { name: 'C', score: 101 },
    { name: 'D', score: 50 },
    { name: 'E', score: 75 }
  ];
  
  function getTopStudents(students) {
    // Write code here...
    var studentSort = students.sort((student1, student2) => {
        return student2.score - student1.score;
    })
    
    return studentSort.slice(0,3).map((student) => student.name);
  }