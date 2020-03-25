// BÀI 1: Xoá n phần tử cuối có trong mảng.
/*
	Viết 1 chương trình xóa đi n phần tử cuối cùng của 1 array
*/
function removeEnd(arr, n) {
    // your code here!
    return arr.slice(0, arr.length - n);
  }

// BÀI 3: Viết hàm trả về n phần tử đầu tiên có trong mảng

/** 
 * Viết function trả về n phần tử đầu tiên có trong mảng.
*/

function first(arr, n) {
    // your code here...
    return arr.slice(0,n);
  }
  
  // console.log(first([1, 2, 3], 2)); // expect [1, 2]