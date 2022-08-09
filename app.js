





// class PlayingCards {
//     constructor(number, symbol, color) {
//         this.number = number;
//         this.symbol = symbol;
//         this.color = color;
//     }
//     //try to have a method function for Aces?
// };
// const playingCards = [
//  {twoDiamond: new PlayingCards(2, "Diamond", "Red")},
//  {twoHeart: new PlayingCards(2, "Heart", "Red")},
//  {twoClub: new PlayingCards(2, "Club", "Black")},
//  {twoSpade: new PlayingCards(2, "Spade", "Black")},
//  {threeDiamond: new PlayingCards(3, "Diamond", "Red")},
//  {threeHeart: new PlayingCards(3, "Heart", "Red")},
//  {threeClub: new PlayingCards(3, "Club", "Black")},
//  {threeSpade: new PlayingCards(3, "Spade", "Black")},
//  {fourDiamond: new PlayingCards(4, "Diamond", "Red")},
//  {fourHeart: new PlayingCards(4, "Heart", "Red")},
//  {fourClub: new PlayingCards(4, "Club", "Black")},
//  {fourSpade: new PlayingCards(4, "Spade", "Black")},
//  {fiveDiamond: new PlayingCards(5, "Diamond", "Red")},
//  {fiveHeart: new PlayingCards(5, "Heart", "Red")},
//  {fiveClub: new PlayingCards(5, "Club", "Black")},
//  {fiveSpade: new PlayingCards(5, "Spade", "Black")},
//  {sixDiamond: new PlayingCards(6, "Diamond", "Red")},
//  {sixHeart: new PlayingCards(6, "Heart", "Red")},
//  {sixClub: new PlayingCards(6, "Club", "Black")},
//  {sixSpade: new PlayingCards(6, "Spade", "Black")},
//  {sevenDiamond: new PlayingCards(7, "Diamond", "Red")},
//  {sevenHeart: new PlayingCards(7, "Heart", "Red")},
//  {sevenClub: new PlayingCards(7, "Club", "Black")},
//  {sevenSpade: new PlayingCards(7, "Spade", "Black")},
//  {eightDiamond: new PlayingCards(8, "Diamond", "Red")},
//  {eightHeart: new PlayingCards(8, "Heart", "Red")},
//  {eightClub: new PlayingCards(8, "Club", "Black")},
//  {eightSpade: new PlayingCards(8, "Spade", "Black")},
//  {nineDiamond: new PlayingCards(9, "Diamond", "Red")},
//  {nineHeart: new PlayingCards(9, "Heart", "Red")},
//  {nineClub: new PlayingCards(9, "Club", "Black")},
//  {nineSpade: new PlayingCards(9, "Spade", "Black")},
//  {tenDiamond: new PlayingCards(10, "Diamond", "Red")},
//  {tenHeart: new PlayingCards(10, "Heart", "Red")},
//  {tenClub: new PlayingCards(10, "Club", "Black")},
//  {tenSpade: new PlayingCards(10, "Spade", "Black")},
//  {jackDiamond: new PlayingCards(10, "Diamond", "Red")},
//  {jackHeart: new PlayingCards(10, "Heart", "Red")},
//  {jackClub: new PlayingCards(10, "Club", "Black")},
//  {jackSpade: new PlayingCards(10, "Spade", "Black")},
//  {queenDiamond: new PlayingCards(10, "Diamond", "Red")},
//  {queenHeart: new PlayingCards(10, "Heart", "Red")},
//  {queenClub: new PlayingCards(10, "Club", "Black")},
//  {queenSpade: new PlayingCards(10, "Spade", "Black")},
//  {kingDiamond: new PlayingCards(10, "Diamond", "Red")},
//  {kingHeart: new PlayingCards(10, "Heart", "Red")},
//  {kingClub: new PlayingCards(10, "Club", "Black")},
//  {kingSpade: new PlayingCards(10, "Spade", "Black")},
//  {aceDiamond: new PlayingCards(11, "Diamond", "Red")},
//  {aceHeart: new PlayingCards(11, "Heart", "Red")},
//  {aceClub: new PlayingCards(11, "Club", "Black")},
//  {aceSpade: new PlayingCards(11, "Spade", "Black")},
// ];
// console.log(playingCards[9].fourHeart.number)

let playerCards = [],dealerCards = [],gameIsActive = false;
let playerSum =0, dealerSum =0;
let playerMoney = 0,AIMoney1 = 0,AIMoney2 = 0;

let deck = buildDeck();
shuffleDeck(deck);
//console.log(deck)



//DOM Variables
const startGame = document.querySelector('#start-game');
const endGame = document.querySelector('#end-game');
const bet = document.querySelector('#bet');
const hit = document.querySelector('#hit');
const stand = document.querySelector('#stand');
const userCard5 = document.querySelector('#card5');
const userCard6 = document.querySelector('#card6');
const userCard7 = document.querySelector('#card7');
const userCard8 = document.querySelector('#card8');
const dealerCard1 = document.querySelector('#card1');
const dealerCard2 = document.querySelector('#card2');
const dealerCard3 = document.querySelector('#card3');
const dealerCard4 = document.querySelector('#card4');


//Functions

    //build Deck
    function buildDeck() {
        const suits = ['C', 'S', 'H', 'D'];
        const values = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
        let playingDeck = [];

        for(let i =0;i<suits.length;i++) {
            for(let j=0; j<values.length; j++) {
                playingDeck.push(`${values[j]}-${suits[i]}`);
            }
        } 
        return playingDeck
    };

    //shuffle deck
    function shuffleDeck(arr) {
        arr.sort(() => 0.5 - Math.random());
        
        //return arr
    }

    //deal cards
    function dealCards(arr) {
        playerCards.push(arr[0])
        dealerCards.push(arr[1])
        playerCards.push(arr[2])
        dealerCards.push(arr[3])   
    }

    //hit cards for player
    function hitCards(arr) {
        playerCards.push(arr[4])
        
    }

    //hit cards for dealer
    
    //deal to dealer
    function dealToDealer() {
        if(dealerSum < 17) {

        }
    }

    //get value of card
    function cardValue(arr) {
        let cardValue = [];
        let sumOfArr = 0;
        
        for(let i=0;i<arr.length;i++) {
            let card = arr[i].split("-");
            cardValue.push(card[0]);          
        };
        
        for(let i=0; i<cardValue.length; i++) {
            if(cardValue[i] === "J" || cardValue[i] === "Q" || cardValue[i] === "K") {
                cardValue[i] = "10"
            };
            if(cardValue[i] === "A") {
                cardValue[i] = "11"
            };
        };
        let num = cardValue.map(str => {return Number(str)});

        for(let i=0;i<num.length;i++){
            sumOfArr += num[i]
        };

        return sumOfArr
    };

    console.log(cardValue(["5-S","10-H","K-S"]))
    // console.log(randomCard(playingCards))
    // console.log(playerCards)
    //console.log(playerCards)




//EventListeners
startGame.addEventListener('click', function() {
    
    bet.addEventListener('click', function() {
        console.log('what')
    });

    hit.addEventListener('click', function() {
        
        hitCards(deck)
        console.log(playerCards)
        userCard7.innerHTML = playerCards[2];
        playerSum = cardValue(playerCards)  //cardvalue expects an array of strings, or the updated array
        
        console.log(playerSum)
    });

    stand.addEventListener('click', function() {
        console.log('mhmm')
    })
    //playerCards.push(deck[0])
    
    endGame.addEventListener('click', function() {
        //console.log('howdy')
        if(gameIsActive){window.location.reload();}
        gameIsActive = false;
    });

    gameIsActive = true;
    dealCards(deck)
    
    dealerCard1.innerHTML = dealerCards[0]
    dealerCard2.innerHTML = dealerCards[1]
    userCard5.innerHTML = playerCards[0]
    userCard6.innerHTML = playerCards[1]
    console.log(userCard5.innerHTML)
    

    playerSum += cardValue(playerCards)
    dealerSum += cardValue(dealerCards)

    console.log(`Dealer: ${dealerSum}`)
    console.log(`player: ${playerSum}`)
    //console.log(dealerCards)
    
});
