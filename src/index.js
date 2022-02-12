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
    let str = '';
    let res = '';
    let num = '';
    let comb = '';
    let sym = '';
    let letter = '';
  
    for (let i = 0; i < expr.length / 10; i++){
      str = expr.slice(i * 10, (i + 1) * 10);
     // console.log(str);
      if (str === '**********') {
        res = res + ' ';
        continue;
      }
      for (let j = 4; j >= 0; j--) {
        num = str.slice(j * 2, (j + 1) * 2);
        if (num === '10') {
          sym = '.';
        }
        if (num === '11') {
          sym = '-';
        }
        if (num === '00') {
          break;
        }
        comb = sym + comb;
        
      }
  
     // console.log(comb);
  
      for (let item in MORSE_TABLE) {
        if (comb === item) {
          letter = MORSE_TABLE[item];
          console.log(letter);
        }
  
      }
      res = res + letter;
      comb = '';
    }
    
    //console.log(res);
    return res;
}


module.exports = {
    decode
}