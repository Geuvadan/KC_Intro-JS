const fooBarQuix = num => {
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
        return num;
    } else {
        return output;
    }
};

const randomNumber = Math.round(Math.random() * 100);

for (let i = 1; i < randomNumber; i++) {
    console.log(fooBarQuix(i));
}