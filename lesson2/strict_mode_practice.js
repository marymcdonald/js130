// "use strict";

// function Deck() {
//   this.SUITS = ["Clubs", "Diamonds", "Hearts", "Spades"];
//   this.RANKS = ["2", "3", "4", "5", "6", "7", "8", "9",
//          "10", "Jack", "Queen", "King", "Ace"];

//   this.deck = this.allCards();
//   this.shuffle(this.deck);

// }

// Deck.prototype.allCards = function() {
//   return this.SUITS.reduce((deck, suit) => {
//     this.RANKS.forEach(rank => deck.push(`${rank} of ${suit}`));
//     return deck;
//   }, []);
// };

// Deck.prototype.shuffle = function () {
//   let randomCardIndex = function(deck) {
//     return Math.floor(Math.random() * deck.length);
//   };

//   for (let counter = 0; counter < 400; counter += 1) {
//     let randomIndex1 = randomCardIndex(this.deck);
//     let randomIndex2 = randomCardIndex(this.deck);
//     let tempCard = this.deck[randomIndex1];
//     this.deck[randomIndex1] = this.deck[randomIndex2];
//     this.deck[randomIndex2] = tempCard;
//   }

// };

// let newDeck = new Deck();
// console.log(newDeck);

"use strict";

const SUITS = ["Clubs", "Diamonds", "Hearts", "Spades"];
const RANKS = ["2", "3", "4", "5", "6", "7", "8", "9",
               "10", "Jack", "Queen", "King", "Ace"];

function createDeck() {
  const allCards = () => {
    return SUITS.reduce((deck, suit) => {
      RANKS.forEach(rank => deck.push(`${rank} of ${suit}`));
      return deck;
    }, []);
  };

  let deck = allCards();
  shuffle(deck);

  return deck;
}

function shuffle(deck) {
  for (let counter = 0; counter < 256; counter += 1) {
    let randomIndex1 = randomCardIndex();
    let randomIndex2 = randomCardIndex();
    let tempCard = deck[randomIndex1];
    deck[randomIndex1] = deck[randomIndex2];
    deck[randomIndex2] = tempCard;
  }

  function randomCardIndex() {
    return Math.floor(Math.random() * deck.length);
  }
}

console.log(createDeck());