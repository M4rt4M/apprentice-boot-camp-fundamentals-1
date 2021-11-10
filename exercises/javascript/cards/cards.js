// to execute the runnable code in this file, use the command
// `node cards/cards.js` from the command line positioned at
// the project's root directory.
const Card = require('./card.js').Card;

class Cards {
  constructor() {
    this.suits = ["clubs", "diamonds", "hearts", "spades"];
    this.cards = this.getCards();
  }

  getCards() {
    var cards = [];

    for (var i = 0; i < this.suits.length; i++) {
      for (var j = 1; j < 14; j++) {
        var card = new Card(this.suits[i], j);
        cards.push(card);
      }
    }

    return cards;
  }

  printCardNames() {
    var result = [];

    for (var i = 0; i < this.cards.length; i++) {
      var faceValueName = ""
      switch (this.cards[i].faceValue) {
        case 1:
          faceValueName = "ace";
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
          faceValueName = this.cards[i].faceValue;
          break;
      }

      result.push(faceValueName + " of " + this.cards[i].suit);
    }

    return result;
  }
};

module.exports = {
  Cards
};