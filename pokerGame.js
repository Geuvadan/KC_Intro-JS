// hola

const suits = ["S", "H", "C", "D"];
const cardValues = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "T",
    "J",
    "Q",
    "K",
    "A"
];
const gamesValue = [
    "High Card",
    "Pair",
    "Two Pairs",
    "Three of a Kind",
    "Straight",
    "Flush",
    "Full House",
    "Four of a Kind",
    "Straight flush"
];
let p1Hand = [];
let p2Hand = [];
let p1Game = [];
let p2Game = [];

const buildDeck = (difSuits, values) => {
    let deck = [];
    for (let i = 0; i < difSuits.length; i++) {
        for (let j = 0; j < values.length; j++) {
            deck.push(values[j] + difSuits[i]);
        }
    }
    return deck;
};

const shuffle = deck => {
    let shuffledDeck = deck;
    // Shuffle using Durstenfeld shuffle algorithm.
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

let isFlush = hand => {
    let tempCardsSuits = 0;

    for (i = 0; i < 5; i++) {
        if (hand[i][1] === hand[0][1]) tempCardsSuits++;
    }
    return tempCardsSuits === 5;
};

let isStraight = hand => {
    if (!sameOfKind(hand)) {
        return (
            cardValues.indexOf(hand[0][0]) + 4 ===
            cardValues.indexOf(hand[4][0])
        );
    } else {
        return false;
    }
};

let sameOfKind = hand => {
    let counterA = 1;
    let counterB = 1;
    let tempCardValue = "";
    let otherCardValue = "";

    // check for cards of the same kind
    for (i = 1; i <= 4; i++) {
        if (hand[i][0] === hand[i - 1][0] && counterA === 1) {
            tempCardValue = hand[i][0];
            counterA++;
        } else if (
            hand[i][0] === hand[i - 1][0] &&
            hand[i][0] === tempCardValue
        ) {
            counterA++;
        } else if (
            hand[i][0] === hand[i - 1][0] &&
            hand[i][0] !== tempCardValue
        ) {
            counterB++;
            otherCardValue = hand[i][0];
        }
    }

    let biggestCardValue =
        tempCardValue >= otherCardValue ? tempCardValue : otherCardValue;

    if (counterA === 1 && counterB === 1) {
        return false;
    } else if (counterA === 2 && counterB === 1) {
        return ["Pair", biggestCardValue];
    } else if (counterA === 3 && counterB === 1) {
        return ["Three of a Kind", biggestCardValue];
    } else if (counterA === 4 && counterB === 1) {
        return ["Four of a Kind", biggestCardValue];
    } else if (counterA === 1 && counterB === 2) {
        return ["Pair", biggestCardValue];
    } else if (counterA === 1 && counterB === 3) {
        return ["Three of a Kind", biggestCardValue];
    } else if (counterA === 1 && counterB === 4) {
        return ["Four of a Kind", biggestCardValue];
    } else if (counterA === 2 && counterB === 2) {
        return ["Two Pairs", biggestCardValue];
    } else if (counterA === 3 && counterB === 2) {
        return ["Full House", biggestCardValue];
    } else if (counterA === 2 && counterB === 3) {
        return ["Full House", biggestCardValue];
    }
};

let assignGame = hand => {
    let handValues = [];

    for (i = 0; i < hand.length; i++) {
        handValues.push(cardValues.indexOf(hand[i][0]));
    }

    if (isStraight(hand)) {
        if (isFlush(hand)) {
            return ["Straight flush", cardValues[Math.max(...handValues)]];
        } else {
            return ["Straight", cardValues[Math.max(...handValues)]];
        }
    } else if (sameOfKind(hand)) {
        if (isFlush(hand)) {
            if (
                gamesValue.indexOf(sameOfKind(hand)[0]) <
                gamesValue.indexOf("Flush")
            ) {
                return ["Flush", cardValues[Math.max(...handValues)]];
            } else {
                return sameOfKind(hand);
            }
        } else {
            return sameOfKind(hand);
        }
    } else if (isFlush(hand)) {
        return ["Flush", cardValues[Math.max(...handValues)]];
    } else {
        return ["High Card", cardValues[Math.max(...handValues)]];
    }
};

let whoWin = (game1, game2) => {
    if (gamesValue.indexOf(game1[0]) > gamesValue.indexOf(game2[0])) {
        return `Player 1 wins! ${game1[0]}`;
    } else if (gamesValue.indexOf(game1[0]) < gamesValue.indexOf(game2[0])) {
        return `Player 2 wins! ${game2[0]}`;
    } else if (gamesValue.indexOf(game1[0]) === gamesValue.indexOf(game2[0])) {
        if (cardValues.indexOf(game1[1]) > cardValues.indexOf(game2[1])) {
            return `Player 1 wins! bigger ${game1[0]}`;
        } else if (
            cardValues.indexOf(game1[1]) < cardValues.indexOf(game2[1])
        ) {
            return `Player 2 wins! bigger ${game2[0]}`;
        } else {
            return "Draw";
        }
    } else {
        return "Something went wrong :(";
    }
};

/////////////////  GAME START  /////////////////////

let deck = buildDeck(suits, cardValues);
deck = shuffle(deck);
deal(deck, p1Hand, p2Hand);

p1Game = assignGame(p1Hand);
p2Game = assignGame(p2Hand);

console.log(p1Hand);
console.log(p2Hand);
console.log("---------------***---------------");
console.log(whoWin(p1Game, p2Game));

/////////////  TESTS  //////////////

// console.log(p1Hand);
// console.log(p1Game);
// console.log("Is Color: " + isFlush(p1Hand));
// console.log("Is Straight: " + isStraight(p1Hand));
// console.log("---------------***---------------");

// console.log(p2Hand);
// console.log(p2Game);
// console.log("Is Color: " + isFlush(p2Hand));
// console.log("Is Straight: " + isStraight(p2Hand));
// console.log("---------------***---------------");

////////////////  MANUAL TESTS  //////////////////

console.log(["3D", "4D", "9D", "TD", "KD"]);
console.log(assignGame(["3D", "4D", "9D", "TD", "KD"]));
console.log("Same: " + sameOfKind(["3D", "4D", "9D", "TD", "KD"]));
console.log("Is Color: " + isFlush(["3D", "4D", "9D", "TD", "KD"]));
console.log("Is Straight: " + isStraight(["3D", "4D", "9D", "TD", "KD"]));
console.log("---------------***---------------");

console.log(["4D", "5D", "6D", "7D", "8D"]);
console.log(assignGame(["4D", "5D", "6D", "7D", "8D"]));
console.log("Same: " + sameOfKind(p2Hand));
console.log("Is Color: " + isFlush(["4D", "5D", "6D", "7D", "8D"]));
console.log("Is Straight: " + isStraight(["4D", "5D", "6D", "7D", "8D"]));
console.log("---------------***---------------");
