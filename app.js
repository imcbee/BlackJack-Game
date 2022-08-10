

let playerCards = [],dealerCards = [],clicked= false, currentIndex = 0;
let playerSum =0, dealerSum =0;
let playerMoney = 0;
let discardPile = [];





//DOM Variables
const startGame = document.querySelector('#start-game');
const reset = document.querySelector('#end-game');
const bet = document.querySelector('#bet');
const hit = document.querySelector('#hit');
const stand = document.querySelector('#stand');
const nextRound = document.querySelector('#round')
const userCard5 = document.querySelector('#card5');
const userCard6 = document.querySelector('#card6');
const userCard7 = document.querySelector('#card7');
const userCard8 = document.querySelector('#card8');
const dealerCard1 = document.querySelector('#card1');
const dealerCard2 = document.querySelector('#card2');
const dealerCard3 = document.querySelector('#card3');
const dealerCard4 = document.querySelector('#card4');
const messageBoard = document.querySelector('#message-board-container');


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
        
        //ret;urn arr
    }

    

    //deal cards
    function dealCards(arr) {
        playerCards.push((arr.shift()));
        currentIndex++;
        dealerCards.push((arr.shift()));
        currentIndex++;
        playerCards.push((arr.shift()));
        currentIndex++;
        dealerCards.push((arr.shift()));
        currentIndex++;  
    };

    //hit cards for player
    function hitCards(arr) {
        playerCards.push((arr.shift()))
        currentIndex++
        
    };

    
   
    

    //deal to dealer
    function dealToDealer(arr) {  //could be area of trouble, currentindex for later figuringout
        
        if(dealerSum <= 17) {
            dealerCards.push((arr.shift()))
            //console.log(arr[5])
            currentIndex++
        }if(dealerSum > 17) {
            
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

    //console.log(cardValue(["5-S","10-H","K-S"]))
    // console.log(randomCard(playingCards))
    // console.log(playerCards)
    //console.log(playerCards)

    //Win Evaulation
    function checkWin() {
        if(dealerSum === 21) {
            messageBoard.innerHTML = `Dealer Wins! Dealer Total: ${dealerSum}`
        }else if(playerSum === 21) {
            messageBoard.innerHTML = `Player Wins! Player Total: ${playerSum}`
        }else if(playerSum > 21) {
            messageBoard.innerHTML = `Dealer Wins! Dealer Total: ${dealerSum}`
        }else if(dealerSum > playerSum && dealerSum < 21) {
            messageBoard.innerHTML = `Dealer Wins! Dealer Total: ${dealerSum}`
        }else if(playerSum > dealerSum && playerSum < 21) {
            messageBoard.innerHTML = `Player Wins! Player Total: ${playerSum}`
        }else if (dealerSum === playerSum) {
            messageBoard.innerHTML = `Draw! Dealer Total: ${playerSum}, Player Total: ${playerSum} `
        }
    }


//EventListeners



bet.addEventListener('click', function() {
        console.log('what')
    });



startGame.addEventListener('click', function() {
    
    
    hit.addEventListener('click', function() {
        hitCards(deck);
        dealerMove();
        userCard7.innerHTML = playerCards[2];
        playerSum = cardValue(playerCards)  //cardvalue expects an array of strings, or the updated array
        messageBoard.innerHTML = `Player Total: ${playerSum}`;
        checkWin(); 


        // console.log(`Dealer: ${dealerSum}`)
        // console.log(`player: ${playerSum}`)
        //console.log(playerCards)
        //console.log(currentIndex)
    });

    stand.addEventListener('click', function() {
        dealerMove();
        checkWin();
        
        
        
        // console.log(`Dealer: ${dealerSum}`)
        // console.log(`player: ${playerSum}`)
    })
    //playerCards.push(deck[0])
    
    reset.addEventListener('click', function() {
        //console.log('howdy')
        if(clicked){window.location.reload();}
        clicked = false;
    });

    nextRound.addEventListener('click', function() {
        //discardPile = playerCards.concat(dealerCards);
        for(let i =0;i<playerCards.length;i++) {
            discardPile.push(playerCards[i])
        };
        for(let i =0;i<dealerCards.length;i++) {
            discardPile.push(dealerCards[i])
        };

        playerCards = []; 
        dealerCards = [];
        dealerCard1.innerHTML = "";
        dealerCard2.innerHTML = "";
        dealerCard3.innerHTML = "";
        dealerCard4.innerHTML = "";
        userCard5.innerHTML = "";
        userCard6.innerHTML = "";
        userCard7.innerHTML = "";
        userCard8.innerHTML = "";
        dealCards(deck);
        
        dealerCard1.innerText = dealerCards[0]
        dealerCard2.innerText = dealerCards[1]
        userCard5.innerText = playerCards[0]
        userCard6.innerText = playerCards[1]

        checkWin();
        discardShuffle(discardPile);
        //console.log(playerCards, dealerCards);
        // console.log(deck)
        // console.log(discardPile)
    })
    
    //dealer move
    function dealerMove() {
        dealToDealer(deck)
        dealerCard3.innerHTML = dealerCards[2];
        dealerSum = cardValue(dealerCards)
    };

    //discard shuffle
    function discardShuffle(arr) {
        shuffleDeck(arr);
        
        while(arr.length > 25) {
            deck.push(arr[arr.length-1]);
            arr.pop()
        };
       
        console.log(deck)
        console.log(discardPile)
    };
   
    clicked = true;
    let deck = buildDeck();
    //console.log(deck)
    shuffleDeck(deck);
    //console.log(deck)
    dealCards(deck)
    
    dealerCard1.innerHTML = dealerCards[0]
    dealerCard2.innerHTML = dealerCards[1]
    userCard5.innerHTML = playerCards[0]
    userCard6.innerHTML = playerCards[1]
    //console.log(userCard5.innerHTML)
    

    playerSum += cardValue(playerCards)
    dealerSum += cardValue(dealerCards)
    messageBoard.innerHTML = `Game Started!! Player Total: ${playerSum} Dealer Total: ${dealerSum}`
     
    if(dealerSum === 21) {
        checkWin();
        clicked = false;
    }if(playerSum === 21) {
        checkWin();
        clicked = false;
    };
    
    
    
    
    // console.log(`Dealer: ${dealerSum}`)
    // console.log(`player: ${playerSum}`)
    //console.log(currentIndex)
    //console.log(dealerCards)
    
});
