# Exercise JavaScript Introduction
## FooBarQuix

Given a number between 1 and 100, y tenemos que devolver por orden lo siguiente:

* If the number is divisible by 3: write "Foo" instead of the number 
* If the number is divisible by  5, add “Bar”
* If the number is divisible by  7, add “Quix”.
* For each digit 3, 5, 7, add “Foo”, “Bar”, “Qix” in the digits order.

### Example: 
~~~
* 1  -> 1
* 2  -> 2
* 3  -> FooFoo (divisible por 3, contiene 3)
* 4  -> 4
* 5  -> BarBar (divisible por 5, contains 5)
* 6  -> Foo (divisible por 3)
* 7  -> QuixQuix (divisible por 7, contiene 7)
* 8  -> 8
* 9  -> Foo
* 10 -> Bar
* 13 -> Foo 
* 15 -> FooBarBar (divisible por 3, divisible por 5, contiene 5)
* 21 -> FooQuix
* 33 -> FooFooFoo (divisible por 3, contiene 3)
* 51 -> FooBar
* 53 -> BarFoo
* 75 -> FooBarQuixBar(divisible por 3, divisible por 5, contiene un 7, contiene un 5)
~~~

## Roman Numbers
* Create a Function that given a roman number returns the arabic number
* Create a Function that given an arabic number returns the roman number
* Create a Function to validate roman numbers

#### Symbols

 Roman | Arabic 
--------|-------
 I | 1 
 V | 5 
 X | 10 
 L | 50 
 C | 100 
 D | 500 
 M | 1000 

### Rules

Sólo se contemplan números entre el 1 y el 3999

* The I, X, C and M symbols can be repeated up to three times.
* The V, L and D symbols cannot be repeated.
* The I, X and C symbols are added if they are on the right of a greater or equal one.
* The I, X and C symbols are subtracted if they are on the left of a larger one and can only be placed before the two symbols that follow in succession.
* I is subtracted from V and X
* X is subtracted from L and C
* C is subtracted from D and M
* The V, L and D symbols cannot be placed to the left of a larger one.


## Poker Game

### Cards
A card has 2 things:

**Suit**:
* spades (S)
* hearts (H)
* clubs (C)
* diamonds (D). 

**Value**:
* 2 
* 3
* 4
* 5
* 6
* 7
* 8
* 9
* 10 /Ten (T)
* Jack (J)
* Queen (Q)
* King (K)
* Ace (A). 

### Hand

A hand is a group of 5 cards

#### Moves

* High Card 
* Pair
* Two Pairs 
* Three of a Kind 
* Straight 
* Flush 
* Full House 
* Four of a Kind 
* Straight flush 

### Examples

Input: **Player 1**: 2H 3D 5S 9C KD **Player 2**: 2C 3H 4S 8C AH
Output: Player 2 wins, Higher Card

Input: **Player 1**: 2H 4S 4C 2D 4H **Player 2**: 2S 8S AS QS 3S
Output: Jugador 1 gana, escalera de color

Input: **Player 1**: 2H 3D 5S 9C KD **Player 2**: 2C 3H 4S 8C KH
Output: Jugador 1 gana, carta más alta

Input: **Player 1**: 2H 3D 5S 9C KD **Player 2**: 2D 3H 5C 9S KH
Output: Tie

