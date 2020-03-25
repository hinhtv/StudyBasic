var a = 10;

var x = --a + a++;
console.log(x); // --a = 9, a++ = 9 => x = 9 + 9 = 18

var a = 10;
var b = 18;

var x = a-- + b++ - ++b - ++a;
console.log(x); // a-- = 10, b++ = 18, ++b = 19, ++a = 11 => x = 10 + 18 - 19 - 11 = -2