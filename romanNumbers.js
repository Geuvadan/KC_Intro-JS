const values = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
const values5 = { V: 5, L: 50, D: 500 };


const romanNumberValidator = (romanNumber) => {
    const symbols = ["I", "V", "X", "L", "C", "D", "M"];
    let counter = 1;
    let lastSymbol = "";

    for (const symbol of romanNumber) {
        if (symbol in values) {
            if (lastSymbol !== "") {
                if (values[lastSymbol] > values[symbol]) {
                    counter = 1;
                } else if (values[lastSymbol] === values[symbol]) {
                    counter += 1;
                    if (symbol in values5) {
                        // console.log(`Dos símbolos ${symbol} no pueden estar contiguos`);
                        return false;
                    }
                    if (counter > 3) {
                        // console.log(`${symbol} aparece más de 3 veces seguidas`);
                        return false;
                    }
                } else if (values[lastSymbol] < values[symbol]) {
                    if (counter > 1) {
                        // console.log(`El símbolo ${lastSymbol} no puede restar dos veces`);
                        return false;
                    } else if (lastSymbol in values5) {
                        // console.log(`El símbolo ${lastSymbol} no puede restar`);
                        return false;
                    }
                    const position =
                        symbols.indexOf(symbol) - symbols.indexOf(lastSymbol);
                    if (position > 2) {
                        // console.log(`${lastSymbol} está a más de 2 posiciones de distancia`);
                        return false;
                    }
                    counter = 1;
                }
            }
        } else {
            // console.log(`${symbol} no corresponde a un símbolo romano`);
            return false;
        }
        lastSymbol = symbol;
    }
    // console.log(`${romanNumber} es un número romano válido`);
    return true;
};


const romanToArabic = (romanNumber) => {
    let arabicNumber = 0;
    let lastSymbol = "";

    if (romanNumberValidator(romanNumber)) {
        for (let symbol of romanNumber) {
            arabicNumber += values[symbol];
            if (lastSymbol !== "") {
                if (values[lastSymbol] < values[symbol]) {
                    arabicNumber -= values[lastSymbol] * 2;
                }
            }
            lastSymbol = symbol;
        }
    } else {
        return `ERROR: ${romanNumber} no es un número romano válido`;
    }
    return romanNumber + ' --> ' + arabicNumber;
};


const arabicToRoman = (arabicNumber) => {
    const units = { 0: '', 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX' };
    const tens = { 0: '', 1: 'X', 2: 'XX', 3: 'XXX', 4: 'XL', 5: 'L', 6: 'LX', 7: 'LXX', 8: 'LXXX', 9: 'XC' };
    const hundreds = { 0: '', 1: 'C', 2: 'CC', 3: 'CCC', 4: 'CD', 5: 'D', 6: 'DC', 7: 'DCC', 8: 'DCCC', 9: 'CM' };
    const thousands = { 0: '', 1: 'M', 2: 'MM', 3: 'MMM' };

    const position = { 0: units, 1: tens, 2: hundreds, 3: thousands };

    let romanNumber = "";
    let arabicArray = arabicNumber.toString().split('').reverse();

    if ((arabicNumber > 0) && (arabicNumber < 4000)) {
        for (let i = arabicArray.length - 1; i >= 0; i--) {
            romanNumber += position[i][arabicArray[i]];
        }
        return arabicNumber + ' --> ' + romanNumber;
    } else {
        return `'${arabicNumber}' no puede expresarse como número romano`;
    }
};


console.log(arabicToRoman(9));
console.log(arabicToRoman(14));
console.log(arabicToRoman(149));
console.log(arabicToRoman(1324));
console.log(arabicToRoman(3999));
console.log(romanToArabic('IX'));
console.log(romanToArabic('XIV'));
console.log(romanToArabic('CXLIX'));
console.log(romanToArabic('MCCCXXIV'));
console.log(romanToArabic('MMMCMXCIX'));

// VALIDATOR TESTS
// console.log(romanNumberValidator("X")); // 10
// console.log(romanNumberValidator("XII")); // 12
// console.log(romanNumberValidator("XVI")); // 16
// console.log(romanNumberValidator("XIV")); // 14
// console.log(romanNumberValidator("IX")); // 9
// console.log(romanNumberValidator("VX")); // error, V restando
// console.log(romanNumberValidator("IC")); // error, I mas de 2 posiciones a la izquierda
// console.log(romanNumberValidator("XIIII")); // error, 4 I seguidos
// console.log(romanNumberValidator("IIX")); // error, 2 I intentando restar
// console.log(romanNumberValidator("MCMXCII"));

// ROMAN TO ARABIC TESTS
// console.log(romanToArabic("X")); // 10
// console.log(romanToArabic("XII")); // 12
// console.log(romanToArabic("XVI")); // 16
// console.log(romanToArabic("XIV")); // 14
// console.log(romanToArabic("IX")); // 9
// console.log(romanToArabic("VX")); // error, V restando
// console.log(romanToArabic("IC")); // error, I mas de 2 posiciones a la izquierda
// console.log(romanToArabic("XIIII")); // error, 4 I seguidos
// console.log(romanToArabic("IIX")); // error, 2 I intentando restar
// console.log(romanToArabic("MCMXCII")); // 1992

// ARABIC TO ROMAN TESTS
// console.log(arabicToRoman(10)); // X
// console.log(arabicToRoman(12)); // XII
// console.log(arabicToRoman(16)); // XVI
// console.log(arabicToRoman(14)); // XIV
// console.log(arabicToRoman(9)); // IX
// console.log(arabicToRoman("4000")); // error, 
// console.log(arabicToRoman("0")); // error, 
// console.log(arabicToRoman("hola")); // error,
// console.log(arabicToRoman("4 5")); // error,
// console.log(arabicToRoman(1992)); // MCMXCII