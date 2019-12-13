const symbols = ["I", "V", "X", "L", "C", "D", "M"];
const symbols5 = ["V", "L", "D"];

function romanNumberValidator(romanNumber) {
    counter = 1;
    lastSymbol = "";

    for (const symbol of romanNumber) {
        if (symbols.indexOf(symbol) !== -1) {

            if (lastSymbol !== "") {
                if (symbols.indexOf(lastSymbol) > symbols.indexOf(symbol)) {
                    counter = 1;

                } else if (symbols.indexOf(lastSymbol) === symbols.indexOf(symbol)) {
                    counter += 1;
                    if (symbol in symbols5) {
                        console.log(`ERROR: dos símbolos ${symbol} no pueden estar contiguos`);
                        return false;
                    }
                    if (counter > 3) {
                        console.log(`ERROR: ${symbol} aparece más de 3 veces seguidas`);
                        return false;
                    }

                } else if (symbols.indexOf(lastSymbol) < symbols.indexOf(symbol)) {
                    if (counter > 1) {
                        console.log(`ERROR: el símbolo ${lastSymbol} no puede restar dos veces`);
                        return false;
                    } else if (symbols5.indexOf(lastSymbol) !== -1) {
                        console.log(`ERROR: el símbolo ${lastSymbol} no puede restar`);
                        return false;
                    }

                    const position =
                        symbols.indexOf(symbol) - symbols.indexOf(lastSymbol);
                    if (position > 2) {
                        console.log(`ERROR: ${lastSymbol} está a más de 2 posiciones de distancia`);
                        return false;
                    }

                    counter = 1;
                }
            }
        } else {
            console.log(`ERROR: ${symbol} no corresponde a un número romano`);
            return false;
        }
        lastSymbol = symbol;
    }

    console.log(`${romanNumber} es un número romano válido`);
    return true;
}

console.log(romanNumberValidator("X")); // 10
console.log(romanNumberValidator("XII")); // 12
console.log(romanNumberValidator("XVI")); // 16
console.log(romanNumberValidator("XIV")); // 14
console.log(romanNumberValidator("IX")); // 9
console.log(romanNumberValidator("VX")); // error, V restando
console.log(romanNumberValidator("IC")); // error, I mas de 2 posiciones a la izquierda
console.log(romanNumberValidator("XIIII")); // error, 4 I seguidos
console.log(romanNumberValidator("IIX")); // error, 2 I intentando restar
console.log(romanNumberValidator("MCMXCII"));