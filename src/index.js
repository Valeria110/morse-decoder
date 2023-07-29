const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const arr = [];

    for (let i = 0; i < expr.length; i += 10) {
        arr.push(expr.slice(i, i + 10));
    }

    const arr2 = arr.map((l) => {
        return parseInt(l) || l;
    });

    const arr3 = arr2.map(el => {
        const encodedArr = [];
        const str = String(el);

        if (str.includes('*')){
            encodedArr.push(' ');
        } else {
            for (let i = 0; i < str.length; i += 2) {
                if (Number(`${str[i]}${str[i + 1]}`) === 10) {
                    encodedArr.push('.');
                } else {
                    encodedArr.push('-');
                }
            }
        }
        return encodedArr.join('');
    }).map(item => {
        return MORSE_TABLE[item] || ' ';
    }).join('');
    return arr3;
}

module.exports = {
    decode
}