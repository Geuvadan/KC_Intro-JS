const values = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
const values5 = { V: 5, L: 50, D: 500 };
const symbols = ["I", "V", "X", "L", "C", "D", "M"];


function romanToArabic(romanNumber) {
    arabicNumber = 0;
    counter = 1;
    lastSymbol = "";

    for (const symbol of romanNumber) {
        if (symbol in values) {
            arabicNumber += values[symbol];

            if (lastSymbol !== "") {
                if (values[lastSymbol] > values[symbol]) {
                    counter = 1;
                } else if (values[lastSymbol] === values[symbol]) {
                    counter += 1;
                    if (symbol in values5) {
                        return `ERROR: dos símbolos ${symbol} no pueden estar contiguos`;
                    }
                    if (counter > 3) {
                        return `ERROR: ${symbol} aparece más de 3 veces seguidas`;
                    }
                } else if (values[lastSymbol] < values[symbol]) {
                    if (counter > 1) {
                        return `ERROR: el símbolo ${lastSymbol} no puede restar dos veces`;
                    } else if (lastSymbol in values5) {
                        return `ERROR: el símbolo ${lastSymbol} no puede restar`;
                    }

                    let position =
                        symbols.indexOf(symbol) - symbols.indexOf(lastSymbol);
                    if (position > 2) {
                        return `ERROR: ${lastSymbol} está a más de 2 posiciones de distancia`;
                    }
                    arabicNumber -= values[lastSymbol] * 2;
                    counter = 1;
                }
            }
        } else {
            return `ERROR: ${symbol} no corresponde a un número romano`;
        }
        lastSymbol = symbol;
    }

    return arabicNumber;
}



console.log(romanToArabic("X")); // 10
console.log(romanToArabic("XII")); // 12
console.log(romanToArabic("XVI")); // 16
console.log(romanToArabic("XIV")); // 14
console.log(romanToArabic("IX")); // 9
console.log(romanToArabic("VX")); // error, V restando
console.log(romanToArabic("IC")); // error, I mas de 2 posiciones a la izquierda
console.log(romanToArabic("XIIII")); // error, 4 I seguidos
console.log(romanToArabic("IIX")); // error, 2 I intentando restar