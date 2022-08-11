
//Global Variables
let playerCards = [];
let dealerCards = [];
let clicked= false;
let playerSum =0;
let dealerSum =0;
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
const currentAmount = document.querySelector('#current-amount');
const dealerElement= document.querySelector('#dealer-container');
const userElement= document.querySelector('#user-player');

//Global Functions

    //Builds a functional 52 card deck. 
    function buildDeck() {
        const suits = ['C', 'S', 'H', 'D'];
        const values = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
        let playingDeck = [];

        for(let i =0;i<suits.length;i++) {
            for(let j=0; j<values.length; j++) {
                playingDeck.push(`${values[j]}-${suits[i]}`);
            };
        }; 
        return playingDeck;
    };

    //Shuffles deck.
    function shuffleDeck(arr) {
        arr.sort(() => 0.5 - Math.random());
    };

    //Start game cards that are dealt to player's and dealer's card array.
    function dealCards(arr) {
        playerCards.push((arr.shift()));
        dealerCards.push((arr.shift()));
        playerCards.push((arr.shift()));
        dealerCards.push((arr.shift()));
          
    };

    //Add card to player's card array
    function hitCards(arr) {
        playerCards.push((arr.shift()));      
    };

    
    

    //Return value of player's or dealer's cards
    function cardValue(arr) {  // could have done in one pass
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

    //Checks monetary amount of player's money
    function checkMoney() {
        if(playerMoney === 25) {
            messageBoard.innerHTML = `WARNING: Money is low! $${playerMoney}.`;
        };
        if(playerMoney === 0 || playerMoney < 0) {
            messageBoard.innerHTML = `NO MORE MONEY! $${playerMoney}. Go Home and hit reset.`;
            hit.disabled = true;
            stand.disabled = true;
            nextRound.disabled = true;
            
        };
    };

    //Check whether player or dealer wins during round
    function checkWin(gameIsOver=false) {
        if(dealerSum === 21) {
            playerMoney -= 25;
            messageBoard.innerHTML = `Dealer Wins! Dealer Total: ${dealerSum}`;            
            currentAmount.innerHTML = `$${playerMoney}`;
            nextRound.disabled = false;
            hit.disabled = true;
            stand.disabled = true;
        }else if(playerSum === 21) {
            playerMoney += 25;
            messageBoard.innerHTML = `Player Wins! Player Total: ${playerSum}`;
            currentAmount.innerHTML = `$${playerMoney}`;
            nextRound.disabled = false;
            hit.disabled = true;
            stand.disabled = true;
        };
        if(gameIsOver){
            if(playerSum > 21) {
                playerMoney -= 25;
                messageBoard.innerHTML = `Dealer Wins! Dealer Total: ${dealerSum}`;            
                currentAmount.innerHTML = `$${playerMoney}`;
                nextRound.disabled = false;
                hit.disabled = true;
                stand.disabled = true;
            }else if(dealerSum > playerSum && dealerSum < 21) {
                playerMoney -= 25;
                messageBoard.innerHTML = `Dealer Wins! Dealer Total: ${dealerSum}`;
                currentAmount.innerHTML = `$${playerMoney}`;
                nextRound.disabled = false;
                hit.disabled = true;
                stand.disabled = true;
            }else if(playerSum < dealerSum && playerSum < 21) {
                playerMoney += 25;
                messageBoard.innerHTML = `Player Wins! Player Total: ${playerSum}`;
                currentAmount.innerHTML = `$${playerMoney}`;
                nextRound.disabled = false;
                hit.disabled = true;
                stand.disabled = true;
            }else if (dealerSum === playerSum) {
                messageBoard.innerHTML = `Draw! Dealer Total: ${playerSum}, Player Total: ${playerSum} `;
                nextRound.disabled = false;
                hit.disabled = true;
                stand.disabled = true;
            };
        };
    };

    //Adds active card element in the DOM
    function addCard(card, player) {
        let cardElement = document.createElement("div");
        player.appendChild(cardElement);
        cardElement.className = 'newCards';
        cardElement.style.height =`6em`;
        cardElement.style.width =`4em`;
        cardElement.style.backgroundPosition = `center`;
        cardElement.style.backgroundRepeat = `no-repeat`;
        cardElement.style.backgroundSize= `cover`;
        cardElement.style.backgroundImage =`url('./playing-cards-pack/PNG/Cards\ \(large\)/${card}.png')`;
   
    };

    //Removes unactive card element in the DOM
    function removeCard() {       
        let removeCards = document.querySelectorAll('.newCards');
        removeCards.forEach((card)=>{
            card.remove();
        });
        
    };

//EventListeners

    //Commences black game and allows game functionality
    startGame.addEventListener('click', function() {
       
        //Allows player and dealer to 'hit' cards in play
        hit.addEventListener('click', function() {          
            hitCards(deck);
            setTimeout(()=>{dealerMove()},1000);
            addCard(playerCards[2], userElement);
            playerSum = cardValue(playerCards);
            messageBoard.innerHTML = `Player Total: ${playerSum}, Dealer Total: ${dealerSum}`;
            checkWin(true);

        });

        //Allows player and dealer to not to 'hit' cards during the game
        stand.addEventListener('click', function() {
            messageBoard.innerHTML = `Player Total: ${playerSum}, Dealer Total: ${dealerSum}`;
            setTimeout(()=>{dealerMove()},1000);
            playerSum = cardValue(playerCards);
            //console.log(playerSum)
            checkWin(true);
        })
        
        //Resets the game by refreshing
        reset.addEventListener('click', function() {
            window.location.reload();
        });

        //Commences next cycle of the game and evaulates win and monetary conditions
        nextRound.addEventListener('click', function() {
            hit.disabled = false;
            stand.disabled = false;
            nextRound.disabled = true;            
            checkMoney();
            for(let i =0;i<playerCards.length;i++) {  // just resetting the deck and hands will be easier
                discardPile.push(playerCards[i]);
            };
            for(let i =0;i<dealerCards.length;i++) {
                discardPile.push(dealerCards[i]);
            };

            messageBoard.innerHTML = `Select Hit or Stand.`;
            playerCards = []; 
            dealerCards = [];
            
            removeCard();
            dealCards(deck);
            
            addCard(dealerCards[0], dealerElement);
            addCard(dealerCards[1], dealerElement);
            addCard(playerCards[0], userElement);
            addCard(playerCards[1], userElement);
            
            playerSum = cardValue(playerCards);
            dealerSum = cardValue(dealerCards);

            checkWin();
            

            discardShuffle(discardPile);
            
            
            // console.log(deck)
            // console.log(`Discard Pile: ${discardPile}`)
            // console.log(`Player Cards: ${playerCards}`)
            // console.log(`Dealer Cards: ${dealerCards}`)
            
        })
        
        //Allows the dealer to add an active card
        function dealerMove() {
            
            if(dealerSum < 17){
                dealerCards.push((deck.shift()));
                addCard(dealerCards[2], dealerElement);
            };
            dealerSum = cardValue(dealerCards);
            console.log(dealerSum)
        };
     
    

        //Shuffels and pushes unactive cards back into the active deck
        function discardShuffle(arr) {
            shuffleDeck(arr);
            while(arr.length > 25) {
                deck.push(arr[arr.length-1]);
                arr.pop()
            };
        
        };
    
        clicked = true;
        startGame.disabled = true;
        nextRound.disabled = true;
        playerMoney = 500;
        currentAmount.innerHTML = `$${playerMoney}`;
        let deck = buildDeck();
        shuffleDeck(deck);
        dealCards(deck);
        
        addCard(dealerCards[0], dealerElement);
        addCard(dealerCards[1], dealerElement);
        addCard(playerCards[0], userElement);
        addCard(playerCards[1], userElement);     

        playerSum = cardValue(playerCards);
        dealerSum = cardValue(dealerCards);
        messageBoard.innerHTML = `Game Started!! Player Total: ${playerSum} Dealer Total: ${dealerSum}`;
        
        checkWin(); 
        
        
    });
