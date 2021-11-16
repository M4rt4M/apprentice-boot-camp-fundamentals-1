const PlayingCard = require("./playing-card.js").PlayingCard;
// to execute the runnable code in this file, use the command
// `node cards/cards.js` from the command line positioned at
// the project's root directory.

class Cards {
  getCards() {
    const result = []
    const deck = []
  
    for (let suit = 0; suit < 4; suit++) {
      for (let faceValue = 1; faceValue <= 13; faceValue++) {
        // Create new card
        const playingCard = new PlayingCard(suit, faceValue);
        // Add to the deck
        deck.push(playingCard);
      }
    }
  
    let cardNumber = 0;
    for (let card of deck) {
      let faceValueName;
      switch (card.faceValue) {
        case 1:
          faceValueName = "ace";
          break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
          faceValueName = card.faceValue.toString();
          break;
        case 11:
          faceValueName = "jack";
          break;
        case 12:
          faceValueName = "queen";
          break;
        case 13:
          faceValueName = "king";
          break;
        default:
          throw new Error(
            "Something went wrong " +
              card.faceValue +
              " is not a valid faceValue!"
          );
      }

      let suitName = card.suit;
      result[cardNumber] = faceValueName + " of " + suitName;
      cardNumber++;
    }
  
    return result;
  };
};

const cards = new Cards();
const deckInOrder = cards.getCards();
for (const card of deckInOrder) {
  console.log(card);
}

module.exports = {
  Cards
};

// deck: 52x (card: (suit: 0-3), (value: 2-10, J, Q, K, A), push itself to deck)

class Card {
  constructor(value) {
    this.value = value;
    
  }
}

const suit = {1: "clubs",
              2: "diamonds", 
              3: "hearts", 
              4: "spades"};

class Deck {
  constructor(value, suit) {
    
  }

  // functions: shuffle() {}
  // getRandomCard() {}
}

/* 
1 - A
2-10
11 - J
12 - Q
13 - K
*/

// function to loop for all values
// function to add suit to the list
