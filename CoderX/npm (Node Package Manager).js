/** BAI 1:
 * 1. Check file package.json bạn sẽ thấy module password-generator nằm trong danh sách dependencies
 * 2. Đọc cách dùng module này dưới đây
 * https://www.npmjs.com/package/password-generator
 * 3. Tìm hiểu cách require một 3rd-party module trên repl.it: https://repl.it/site/blog/npm
 * 4. Require module này và tạo ra 1 password ngẫu nhiên có 8 ký tự, dạng dễ nhớ
 */
var generatePassword = require("password-generator");
var pass = generatePassword(8, false);
console.log(pass);

/** BAI 2:
 * 1. Sử dụng module `markdown` (https://www.npmjs.com/package/markdown) để chuyển đổi đoạn text (viết bằng markdown) sau sang html
 * 2. Tìm hiểu xem markdown là cái gì (dev nên biết về markdown)
 */
var markdown = require("markdown").markdown;
var markdownText = 'Hello *Coders.Tokyo*!';
console.log( markdown.toHTML(markdownText));