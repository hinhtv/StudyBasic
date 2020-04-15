/**
 * Sử dụng switch case và map để chuyển đổi array các chữ thành các số tương ứng theo quy tắc:
 * 'A' hoặc 'a' -> 1
 * 'B' hoặc 'b' -> 2
 *  còn lại -> 0
 */

function transform(arr) {
    // your code here
    let newArray = [];
    
    for(let i=0;i<arr.length;i++){
        switch(arr[i]){
          case 'a':
          case 'A':
              newArray.push(1);
              break;
          case 'b':
          case 'B':
              newArray.push(2);
              break;
          default:
              newArray.push(0);
              break;
        }
    }
    return newArray;
  }