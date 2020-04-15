/** BAI 1:
 * 1. Sử dụng module fs để đọc file `data.json`
 * 2. Dùng JSON.parse để chuyển đổi string đọc được ở bước 1 sang Object
 * 3. Log property `name` từ object ở bước 2
 * 4. Thêm 1 property `members` là một array, truyền vào 1 object mô tả về bạn
 * 5. Ghi lại dữ liệu vào file data.json
 * 6. Mở file data.json để kiểm chứng xem bạn làm đúng không
 */

var fs = require("fs");
var read = fs.readFileSync('data.json', endcoding = 'utf8');
var object = JSON.parse(read);
console.log(object.name);
object.members = ["abc", "hi"];
var write = JSON.stringify(object);
fs.writeFileSync('data.json', write);
var readNew = fs.readFileSync('data.json', endcoding = 'utf8');
console.log(readNew);

/** BAI 2:
 * Ghi lại những kiến thức mà bạn hiểu được trong bài bằng cách trả lời các câu hỏi sau:
 * 1. JSON là gì?
 * 2. Cấu trúc JSON?
 */

function answer() {
    // Ghi câu trả lời của bạn bên trong 2 dấu ``
    return `JSON đơn thuần là một string sử dụng cặp key-value kiểu định dạng dữ liệu này
    tuân theo một quy luật nhất định mà hầu hết các ngôn ngữ lập trình hiện nay đều có thể đọc được.
    `
  }

  /**BAI 3:
 * Chuyển obj sau về dạng JSON và gán cho biến json
 */

var obj = { name: "CodersX", age: 1 };
var json = JSON.stringify(obj);