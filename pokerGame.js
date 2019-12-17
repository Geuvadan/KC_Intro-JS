const suits = ['S', 'H', 'C', 'D'];
const cardValues = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
let p1Hand = [];
let p2Hand = [];
let p1Game = "";
let p2Game = "_";

const buildDeck = (difSuits, values) => {
    let deck = [];
    for (let i = 0; i < difSuits.length; i++) {
        for (let j = 0; j < values.length; j++) {
            deck.push(values[j] + difSuits[i]);
        }
    }
    return deck;
};

// Shuffle using Durstenfeld shuffle algorithm.
const shuffle = (deck) => {
    let shuffledDeck = deck;
    for (let i = shuffledDeck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        var temp = deck[i];
        shuffledDeck[i] = shuffledDeck[j];
        shuffledDeck[j] = temp;
    }

    return shuffledDeck;

};

let deal = (deck, hand1, hand2) => {

    for (let i = 0; i < 5; i++) {
        hand1.push(deck.shift());
        hand2.push(deck.shift());
    }
    hand1.sort((a, b) => cardValues.indexOf(a[0]) - cardValues.indexOf(b[0]));
    hand2.sort((a, b) => cardValues.indexOf(a[0]) - cardValues.indexOf(b[0]));
};


let game = (hand) => {
    hand.sort((a, b) => cardValues.indexOf(a[0]) - cardValues.indexOf(b[0]));
    let counterA = 1;
    let counterB = 1;
    let tempCardValue = "";
    let tempCardsSuits = 0;
    let isColor = false;

    // check if it's color
    for (i = 0; i < 5; i++) {
        if (hand[i][1] === hand[0][1]) {
            tempCardsSuits++;
        }
    }
    if (tempCardsSuits === 5) isColor = true;

    // check for cards of the same kind
    for (i = 1; i <= 4; i++) {
        if ((hand[i][0] === hand[i - 1][0]) && (counterA === 1)) {
            tempCardValue = hand[i][0];
            counterA++;
        } else if ((hand[i][0] === hand[i - 1][0]) && (hand[i][0] === tempCardValue)) {
            counterA++;
        } else if ((hand[i][0] === hand[i - 1][0]) && (hand[i][0] !== tempCardValue)) {
            counterB++;
        }
    }

    if ((counterA === 1) && counterB === 1) {
        if ((cardValues.indexOf(hand[0][0]) + 4) === cardValues.indexOf(hand[4][0])) {
            if (isColor) {
                return "Escalera de color";
            } else {
                return "Escalera";
            }
        } else if (isColor) {
            return "Color";
        } else {
            return "nada";
        }
    }

    console.log(`${counterA} - ${counterB}`);
};

deal(shuffle(buildDeck(suits, cardValues)), p1Hand, p2Hand);

console.log(p1Hand);
console.log(game(p1Hand));

console.log('---------------***---------------');

console.log(p2Hand);
console.log(game(p2Hand));