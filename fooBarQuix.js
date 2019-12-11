const num = Math.round(Math.random() * 100);
const numStr = num.toString();
let output = "";

if (num % 3 == 0) {
    output = "Foo";
}
if (num % 5 == 0) {
    output += "Bar";
}
if (num % 7 == 0) {
    output += "Quix";
}

for (i = 0; i < numStr.length; i++) {
    if (numStr[i] == 3) {
        output += "Foo";
    } else if (numStr[i] == 5) {
        output += "Bar";
    } else if (numStr[i] == 7) {
        output += "Quix";
    }
}

if (output === "") {
    console.log(num);
} else {
    console.log(`${num} --> ${output}`);
}