
/**
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
 */

//ANSWER

var MAP = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
};

function convertHTML(str) {
    return str.replace(/[&<>"']/g, function (c) {
        return MAP[c];
    });
}

convertHTML("Dolce & Gabbana");
