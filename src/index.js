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

    let result = '';
    let arrKey = [];
    let arrVal = [];
    for(let key in MORSE_TABLE){
        arrKey.push(key);
        arrVal.push(MORSE_TABLE[key]);
    }
    for(let i = 0; i < expr.length; i+= 10){
        let letter = '';
        for (f=i; f< i+ 10; f++){
            letter = `${letter}${expr[f]}`;
        }
        if (letter === "**********"){
            result = `${result} `;
        } else {
            let b = '';
           for(let j = 9; j > 0; j-=2){
            let a =`${letter[j-1]}${letter[j]}`;
            if(a === "10") {
                b =`.${b}`; 
            } else if(a === "11") {
                b =`-${b}`;
            }  
        }
        for(let j = 0; j < arrVal.length; j++){
            if(b === arrKey[j]){
                result = `${result}${arrVal[j]}`;
            }
        }
        }
    }
    return result;
}

module.exports = {
    decode
}