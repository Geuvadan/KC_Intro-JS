const values = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
const values5 = { V: 5, L: 50, D: 500 };
const symbols = ["I", "V", "X", "L", "C", "D", "M"];

function romanNumberValidator(romanNumber) {
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
}


function romanToArabic(romanNumber) {
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
}


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
console.log(romanToArabic("X")); // 10
console.log(romanToArabic("XII")); // 12
console.log(romanToArabic("XVI")); // 16
console.log(romanToArabic("XIV")); // 14
console.log(romanToArabic("IX")); // 9
console.log(romanToArabic("VX")); // error, V restando
console.log(romanToArabic("IC")); // error, I mas de 2 posiciones a la izquierda
console.log(romanToArabic("XIIII")); // error, 4 I seguidos
console.log(romanToArabic("IIX")); // error, 2 I intentando restar
console.log(romanToArabic("MCMXCII")); // 1992