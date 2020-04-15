/**
 * Sử dụng kiến thức đã học, tạo ra một ứng dụng danh bạ điện thoại, có các chức năng:
 * - Nhập dữ liệu contact (name, phone number)
 * - Sửa dữ liệu contact
 * - Xoá contact
 * - Tìm kiếm contact: có thể nhập vào tên (không dấu hoặc có dấu, chữ hoa hoặc chữ thường vẫn cho ra kết quả) hoặc 1 phần số điện thoại
 */
//a.json;
//data.json;
var readlineSync = require('readline-sync');
var fs = require('fs');
var Contact = require('./contact');
// function Contact(name, phone){
//   this.name = name;
//   this.phone = phone;
// }
// module.exports = Contact;

var fileurl = './a.json';
var contacts = [];
var txt_contact = fs.readFileSync(fileurl, {encoding: 'utf8'});
if ( txt_contact ){
  contacts = JSON.parse(txt_contact);
  main();
} else {
  main();
}
function main(){
  var option = readlineSync.question('1. Nhap du lieu\n2. Sua du lieu\n3. Xoa contact\n4. Tim kiem\n5. Hien thi contact\n>');
  switch (option){
    case '1':
    createContact();
    break;
    case '2':
    editContact();
    break;
    case '3':
    deleteContact();
    break;
    case '4':
    findContact();
    break;
    case '5':
    showContact();
    main();
    break;
    default:
    main();
    break;
  }
}
// Lay contact
function getContact(){
  var txt_contact = fs.readFileSync(fileurl, {encoding: 'utf8'});
  if ( txt_contact ){
    contacts = JSON.parse(txt_contact);
  }
}
// Tao moi contact
function createContact(){
  var name = readlineSync.question('Name: ');
  var phone = readlineSync.question('Phone: ');
  contacts.push(new Contact(name, phone));
  fs.writeFileSync(fileurl, JSON.stringify(contacts), {encoding: 'utf8'});
  main();
}
// sua contact
function editContact(){
  getContact();
  if ( contacts.length ) {
    for(var i = 0; i < contacts.length; i++ ){
      console.log(i + '. ' + contacts[i].name + ' ' + contacts[i].phone );
    }
    var index = parseInt(readlineSync.question('Chon contact can sua: '));
    if ( contacts[index] !== undefined ) {
      var name = readlineSync.question('Editor Name: ');
      var phone = readlineSync.question('Phone Name: ');
      if ( name != '' ) contacts[index].name = name;
      if ( phone != '' ) contacts[index].phone = phone;
      fs.writeFileSync(fileurl, JSON.stringify(contacts), { encoding: 'utf8' });  
    }
  }
  main();
}
function deleteContact(){
  showContact();
  var index = readlineSync.question('Chon contact can xoa...? !!!');
  if ( contacts[index] !== undefined ){
    var yesNo = readlineSync.question('Chac chua??? (Y/N)');
    if ( yesNo === 'Y' ) {
      contacts.splice(index,1);
      fs.writeFileSync(fileurl, JSON.stringify(contacts), {encoding: 'utf8'});
    } else {
      console.log('Ban khong chon dung. Chua xoa duoc');
    }
  }
  main();
}
// Tim kiem ?
function findContact(){
  getContact();
  var keyword = readlineSync.question('Nhap ten can tim: ');
  if ( keyword != '' ) {
    var found = contacts.reduce(function(a, b){
      if ( b.name == keyword ) a.push(b);
      return a;
    },[]);
    if ( found.length ) {
      for (contact of found){
        console.log(contact.name + ' ' + contact.phone);
      }
    } else {
      console.log('Khong tim thay ai ten: ' + keyword);
      // Cach kiem tra phone 1 phan ntn?
      //var phone = readlineSync.question('Nhap 1 phan phone can tim: ');

    }
  }
  main();
}
// Hien thi danh sach contact
function showContact(){
  getContact();
  if ( contacts.length ){
    for(var i = 0; i < contacts.length; i++ ){
      console.log(i + '. ' + contacts[i].name + ' ' + contacts[i].phone );
    }
    console.log('------------------------');
  }
}
