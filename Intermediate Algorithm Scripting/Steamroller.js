
/**
Flatten a nested array. You must account for varying levels of nesting.
 */

//ANSWER

function steamrollArray(arr) {
    if (!Array.isArray(arr)) {
        return [arr];
    }
    let out = [];
    arr.forEach((e) => {
        steamrollArray(e).forEach((v) => {
            out.push(v);
        });
    });
    return out;
}

steamrollArray([1, [2], [3, [[4]]]]);
