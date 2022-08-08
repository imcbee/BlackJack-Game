
class PlayingCards {
    constructor(number, symbol, color) {
        this.number = number;
        this.symbol = symbol;
        this.color = color;
    }
    //try to have a method function for Aces?
};
const playingCards = [
 {twoDiamond: new PlayingCards(2, "Diamond", "Red")},
 {twoHeart: new PlayingCards(2, "Heart", "Red")},
 {twoClub: new PlayingCards(2, "Club", "Black")},
 {twoSpade: new PlayingCards(2, "Spade", "Black")},
 {threeDiamond: new PlayingCards(3, "Diamond", "Red")},
 {threeHeart: new PlayingCards(3, "Heart", "Red")},
 {threeClub: new PlayingCards(3, "Club", "Black")},
 {threeSpade: new PlayingCards(3, "Spade", "Black")},
 {fourDiamond: new PlayingCards(4, "Diamond", "Red")},
 {fourHeart: new PlayingCards(4, "Heart", "Red")},
 {fourClub: new PlayingCards(4, "Club", "Black")},
 {fourSpade: new PlayingCards(4, "Spade", "Black")},
 {fiveDiamond: new PlayingCards(5, "Diamond", "Red")},
 {fiveHeart: new PlayingCards(5, "Heart", "Red")},
 {fiveClub: new PlayingCards(5, "Club", "Black")},
 {fiveSpade: new PlayingCards(5, "Spade", "Black")},
 {sixDiamond: new PlayingCards(6, "Diamond", "Red")},
 {sixHeart: new PlayingCards(6, "Heart", "Red")},
 {sixClub: new PlayingCards(6, "Club", "Black")},
 {sixSpade: new PlayingCards(6, "Spade", "Black")},
 {sevenDiamond: new PlayingCards(7, "Diamond", "Red")},
 {sevenHeart: new PlayingCards(7, "Heart", "Red")},
 {sevenClub: new PlayingCards(7, "Club", "Black")},
 {sevenSpade: new PlayingCards(7, "Spade", "Black")},
 {eightDiamond: new PlayingCards(8, "Diamond", "Red")},
 {eightHeart: new PlayingCards(8, "Heart", "Red")},
 {eightClub: new PlayingCards(8, "Club", "Black")},
 {eightSpade: new PlayingCards(8, "Spade", "Black")},
 {nineDiamond: new PlayingCards(9, "Diamond", "Red")},
 {nineHeart: new PlayingCards(9, "Heart", "Red")},
 {nineClub: new PlayingCards(9, "Club", "Black")},
 {nineSpade: new PlayingCards(9, "Spade", "Black")},
 {tenDiamond: new PlayingCards(10, "Diamond", "Red")},
 {tenHeart: new PlayingCards(10, "Heart", "Red")},
 {tenClub: new PlayingCards(10, "Club", "Black")},
 {tenSpade: new PlayingCards(10, "Spade", "Black")},
 {jackDiamond: new PlayingCards(10, "Diamond", "Red")},
 {jackHeart: new PlayingCards(10, "Heart", "Red")},
 {jackClub: new PlayingCards(10, "Club", "Black")},
 {jackSpade: new PlayingCards(10, "Spade", "Black")},
 {queenDiamond: new PlayingCards(10, "Diamond", "Red")},
 {queenHeart: new PlayingCards(10, "Heart", "Red")},
 {queenClub: new PlayingCards(10, "Club", "Black")},
 {queenSpade: new PlayingCards(10, "Spade", "Black")},
 {kingDiamond: new PlayingCards(10, "Diamond", "Red")},
 {kingHeart: new PlayingCards(10, "Heart", "Red")},
 {kingClub: new PlayingCards(10, "Club", "Black")},
 {kingSpade: new PlayingCards(10, "Spade", "Black")},
 {aceDiamond: new PlayingCards(11, "Diamond", "Red")},
 {aceHeart: new PlayingCards(11, "Heart", "Red")},
 {aceClub: new PlayingCards(11, "Club", "Black")},
 {aceSpade: new PlayingCards(11, "Spade", "Black")},
];
console.log(playingCards[9].fourHeart.number)

let playerCards = [],AICards1 = [],AICards2 = [];
let playerMoney = 0,AIMoney1 = 0,AIMoney2 = 0;

