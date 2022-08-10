
//Global Variables
let playerCards = [];
let dealerCards = [];
let clicked= false;
let playerSum =0;
let dealerSum =0;
let playerMoney = 0;
let discardPile = [];
let dealer17 = 0;

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
const currentAmount = document.querySelector('#current-amount');
const dealerElement= document.querySelector('#dealer-container');
const userElement= document.querySelector('#user-player');

//Global Functions

    //build Deck
    function buildDeck() {
        const suits = ['C', 'S', 'H', 'D'];
        const values = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
        let playingDeck = [];

        for(let i =0;i<suits.length;i++) {
            for(let j=0; j<values.length; j++) {
                playingDeck.push(`${values[j]}-${suits[i]}`);
            }
        }; 
        return playingDeck
    };

    //shuffle deck
    function shuffleDeck(arr) {
        arr.sort(() => 0.5 - Math.random());
    };

    //deal cards
    function dealCards(arr) {
        playerCards.push((arr.shift()));
        dealerCards.push((arr.shift()));
        playerCards.push((arr.shift()));
        dealerCards.push((arr.shift()));
          
    };

    //hit cards for player
    function hitCards(arr) {
        playerCards.push((arr.shift()));      
    };

    
    //deal to dealer
    function dealToDealer(arr) { 
        dealerSum <= 17 ? dealerCards.push((arr.shift())) : dealer17++; 
    };

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
                cardValue[i] = "10";
            };
            if(cardValue[i] === "A") {
                cardValue[i] = "11";
            };
        };
        let num = cardValue.map(str => {return Number(str)});

        for(let i=0;i<num.length;i++){
            sumOfArr += num[i];
        };

        return sumOfArr;
    };

    //check player's money amount
    function checkMoney() {
        if(player === 25) {
            messageBoard.innerHTML = `WARNIGN: Money is low! $${playerMoney}.`
        };
        if(playerMoney === 0 || playerMoney < 0) {
            messageBoard.innerHTML = `NO MORE MONEY! $${playerMoney}.`
            hit.disabled =true;
            stand.disabled =true;
            setTimeout(function(){window.location.reload()},3000)
        };
    };

    
    //Win Evaulation
    function checkWin() {
        if(dealerSum === 21) {
            playerMoney -= 25;
            messageBoard.innerHTML = `Dealer Wins! Dealer Total: ${dealerSum}`;            
            currentAmount.innerHTML = `$${playerMoney}`;
        }else if(playerSum === 21) {
            playerMoney += 25;
            messageBoard.innerHTML = `Player Wins! Player Total: ${playerSum}`;
            currentAmount.innerHTML = `$${playerMoney}`;
        }else if(playerSum > 21) {
            playerMoney -= 25;
            messageBoard.innerHTML = `Dealer Wins! Dealer Total: ${dealerSum}`;            
            currentAmount.innerHTML = `$${playerMoney}`;
        }else if(dealerSum > playerSum && dealerSum < 21) {
            playerMoney -= 25;
            messageBoard.innerHTML = `Dealer Wins! Dealer Total: ${dealerSum}`;
            currentAmount.innerHTML = `$${playerMoney}`;
        }else if(playerSum > dealerSum && playerSum < 21) {
            playerMoney += 25;
            messageBoard.innerHTML = `Player Wins! Player Total: ${playerSum}`;
            currentAmount.innerHTML = `$${playerMoney}`;
        }else if (dealerSum === playerSum) {
            messageBoard.innerHTML = `Draw! Dealer Total: ${playerSum}, Player Total: ${playerSum} `;
        };
    };

    function addCard(card, player) {
        let cardElement = document.createElement("div");
        player.appendChild(cardElement);
        cardElement.className = 'newCards';
        cardElement.style.height =`5em`;
        cardElement.style.width =`3em`;
        cardElement.style.backgroundPosition = `center`;
        cardElement.style.backgroundRepeat = `no-repeat`;
        cardElement.style.backgroundImage =`url('./playing-cards-pack/PNG/Cards\ \(large\)/${card}.png')`;
   
    };

    function removeCard() {
        let removeCards = document.querySelectorAll('.newCards');
        removeCards.forEach((card)=>{
            card.remove();
        })
        
    };

//EventListeners
    //Start Game Button
    startGame.addEventListener('click', function() {
       
        //Hit Button
        hit.addEventListener('click', function() {
            hitCards(deck);
            dealerMove();
            //userCard7.innerHTML = playerCards[2];
            addCard(playerCards[2], userElement);
            playerSum = cardValue(playerCards);  //cardvalue expects an array of strings, or the updated array
            messageBoard.innerHTML = `Player Total: ${playerSum}, Dealer Total: ${dealerSum}`;
            
            setTimeout(function(){checkWin()}, 500); 

        });

        //Stand button
        stand.addEventListener('click', function() {
            messageBoard.innerHTML = `Player Total: ${playerSum}, Dealer Total: ${dealerSum}`;
            dealerMove();
            setTimeout(function(){checkWin()}, 500); 
            
        })
        
        //Reset button
        reset.addEventListener('click', function() {
            window.location.reload();
            clicked = false;
        });

        //Next Round Button
        nextRound.addEventListener('click', function() {
            for(let i =0;i<playerCards.length;i++) {
                discardPile.push(playerCards[i]);
            };
            for(let i =0;i<dealerCards.length;i++) {
                discardPile.push(dealerCards[i]);
            };

            messageBoard.innerHTML = `Select Hit or Stand.`
            playerCards = []; 
            dealerCards = [];
            
            removeCard();
            dealCards(deck);
            
            addCard(dealerCards[0], dealerElement);
            addCard(dealerCards[1], dealerElement);
            addCard(playerCards[0], userElement);
            addCard(playerCards[1], userElement);
            // messageBoard.innerHTML = `Next Round!! Player Total: ${playerSum} Dealer Total: ${dealerSum}`;
            //checkWin();
            discardShuffle(discardPile);
            checkMoney()
            console.log(deck)
            console.log(`Discard Pile: ${discardPile}`)
            console.log(`Player Cards: ${playerCards}`)
            
        })
        
        //dealer move
        function dealerMove() {
            dealToDealer(deck);
            //dealerCard3.innerHTML = dealerCards[2];
            if(!dealer17) {
                addCard(dealerCards[2], dealerElement);
            }
            
            dealerSum = cardValue(dealerCards);
        };

        //discard shuffle
        function discardShuffle(arr) {
            shuffleDeck(arr);
            
            while(arr.length > 25) {
                deck.push(arr[arr.length-1]);
                arr.pop()
            };
        
            // console.log(deck)
            // console.log(discardPile)
        };
    
        clicked = true;
        if(clicked === true) {
            startGame.disabled = true;
        }else {
            startGame.disabled = false;
        }

        playerMoney = 500;
        currentAmount.innerHTML = `$${playerMoney}`;
        let deck = buildDeck();
        shuffleDeck(deck);
        dealCards(deck);
        
        //dealerCard1.innerHTML = dealerCards[0];
        addCard(dealerCards[0], dealerElement);
        //dealerCard2.innerHTML = dealerCards[1];
        addCard(dealerCards[1], dealerElement);
        //userCard5.innerHTML = playerCards[0];
        addCard(playerCards[0], userElement);
        //userCard6.innerHTML = playerCards[1];
        addCard(playerCards[1], userElement);     

        playerSum += cardValue(playerCards);
        dealerSum += cardValue(dealerCards);
        messageBoard.innerHTML = `Game Started!! Player Total: ${playerSum} Dealer Total: ${dealerSum}`;
        
        if(dealerSum === 21) {
            setTimeout(function(){checkWin()}, 500); 
            
        }if(playerSum === 21) {
            setTimeout(function(){checkWin()}, 500); 
            
        };
        
    });
