
class PlayingCards {
    constructor(number, symbol, color) {
        this.number = number;
        this.symbol = symbol;
        this.color = color;
    }
    //try to have a method function for Aces?
};
const playingCards = [
 {TwoDiamond: new PlayingCards(2, "Diamond", "Red")},
 {TwoHeart: new PlayingCards(2, "Heart", "Red")},
 {TwoClub: new PlayingCards(2, "Club", "Black")},
 {TwoSpade: new PlayingCards(2, "Spade", "Black")},
 {ThreeDiamond: new PlayingCards(3, "Diamond", "Red")},
 {ThreeHeart: new PlayingCards(3, "Heart", "Red")},
 {ThreeClub: new PlayingCards(3, "Club", "Black")},
 {ThreeSpade: new PlayingCards(3, "Spade", "Black")},
 {FourDiamond: new PlayingCards(4, "Diamond", "Red")},
 {FourHeart: new PlayingCards(4, "Heart", "Red")},
 {FourClub: new PlayingCards(4, "Club", "Black")},
 {FourSpade: new PlayingCards(4, "Spade", "Black")},
 {FiveDiamond: new PlayingCards(5, "Diamond", "Red")},
 {FiveHeart: new PlayingCards(5, "Heart", "Red")},
 {FiveClub: new PlayingCards(5, "Club", "Black")},
 {FiveSpade: new PlayingCards(5, "Spade", "Black")},
];
console.log(playingCards[9].FourHeart.number)

let playerCards = [],AICards1 = [],AICards2 = [];
let playerMoney = 0,AIMoney1 = 0,AIMoney2 = 0;

