/**
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
 */

//ANSWER

function convertToRoman(num) {
    let ref = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]];
    let res = [];
    ref.forEach((p) => {
        while (num >= p[1]) {
            res.push(p[0]);
            num -= p[1];
        }
    });
    return res.join('');
}

convertToRoman(36);
