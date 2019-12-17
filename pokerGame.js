const suits = ['S', 'H', 'C', 'D'];
const cardValues = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
let p1Hand = [];
let p2Hand = [];
// let cards = [];

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
    //return [player1, player2];
};



deal(shuffle(buildDeck(suits, cardValues)), p1Hand, p2Hand);
console.log(p1Hand);
console.log(p2Hand);

console.log('-----***-----');

p1Hand.sort((a, b) => cardValues.indexOf(a[0]) - cardValues.indexOf(b[0]));
p2Hand.sort((a, b) => cardValues.indexOf(a[0]) - cardValues.indexOf(b[0]));

console.log(p1Hand);
console.log(p2Hand);