# BlackJack-Game
## Project Description:

Black Jack, also known as 21, is a casino game where the player competes against the house dealer in scoring 21 or as close to 21 without overshooting or busting. The player also starts out with $500 dollars and the player cannot get $0 or the game will be over. Number cards are face value. Kings, Queens and Jacks are a value of 10 and Ace is a value of 11. The player and the dealer can add an extra card with the hit button. The player and the dealer can decide to stand with the cards that they have. Once either the dealer or player wins the round, the next round can commence.

## Goals and Stretch Goals:

### Goals:
1. Build a functional card deck stored as an array.
2. Render card elements through DOM manipulation from the deck array.
3. Player could make the decision to hit or stand.
4. Implement a monetary system to keep track of wins or loses and give player motivation.

### Stretch Goals:
1. Implement an Ace split function to allow more real-life game rules.
2. Implement a 2 player AIs to play alongside with the user.
3. Implement a 3:2 pay-out for 21 or black jack wins.

### Wire Frame:
![BlackJack Game WireFrame](https://user-images.githubusercontent.com/107007458/184252443-9073c99d-e308-41e2-8d8b-eda1f502b72d.jpeg)

This picture shows the original wire frame design for the black jack game during the planning phase.


## Game Pictures:
![Screen Shot 2022-08-11 at 5 43 07 PM](https://user-images.githubusercontent.com/107007458/184247717-feaa8daf-17ea-4d84-9faa-4c71d84c6920.png)

This picture shows the starting screen of the black jack game. The buttons are disabled until the "Start Game" button is clicked.

![Screen Shot 2022-08-11 at 5 43 31 PM](https://user-images.githubusercontent.com/107007458/184247767-71f2e2d8-9f99-41e2-bdbc-304f1cc2914c.png)

This picture shows the commencement of the game with the "Start Game" button. 4 cards are dealt out to the dealer and player. The player receives $500 dollars and with each win or loss, the player will be added $25 dollars. The start game and next round button are deactivated, only allowing the player to select reset, hit or stand.

![Screen Shot 2022-08-11 at 5 43 51 PM](https://user-images.githubusercontent.com/107007458/184247788-02702870-7949-490e-abe4-1e33c06d6a76.png)

This picture shows the a winning scenario for the player after both the player and the dealer hit a card in the game. The game will continue until the player does not have any monetary amount left and only the reset button will be active when the game is over.

## Game Website:

https://imcbee.github.io/BlackJack-Game/

## The tech stack:

HTML was used to create containers for the card elements, buttons and messages to appear. CSS styled the font, buttons and backgrounds of the containers and HTML page. Javascript was used to add functionality, logic and mechanics to the game by rendering the card elements with DOM manipulation, keeping track of player and dealer cards, assessing win conditions and scenarios and keeping track of the total amount of the player's money.  

## Coding challenges:
![Screen Shot 2022-08-11 at 6 25 34 PM](https://user-images.githubusercontent.com/107007458/184252997-ce44aa63-7d25-4d39-afbe-f4122e9a1a49.png)

Building long lines of game logic from scratch and making sure that the logic was in the right order was challenging for me. This was my first time making a project of this size and complexity.

![Screen Shot 2022-08-11 at 6 26 10 PM](https://user-images.githubusercontent.com/107007458/184256073-e2d58d56-8161-447f-b21f-47be1fea1a72.png)

Dynamically adding the right card elements was challenging. The elements were added through a div container with a background image of the card picture assets. This pictures were tied to the virtual card deck with an identifier.

![Screen Shot 2022-08-11 at 6 25 17 PM](https://user-images.githubusercontent.com/107007458/184257781-d6e080fc-ff1a-4f0b-9109-3246d66941e4.png)

The win determination function was an issue that kept reappearing throughout the game. Reconfiguring the win determination function for a early and late game assessment allows for more flexible function to properly assess win conditions.

## Thank you for your support!!!

Thank you friends, GA fellows and GA instructors for long code reviews, late nights and finding the dumbest mistakes I've made in my coding challenges.   Love you all!!!

## Next Steps:

I was not able to accomplish my stretch goals.  I would like to add a split function to allow Aces to be either 1 or 11.  I would like to add 2 AIs to make the game more interactive for the player.  In real-life black jack, the dealer is dealt a face down card and I would like to add this feature as well.

## Support:

For any questions regarding this project, please email me directly at [imcbee@terpmail.umd.edu](mailto:imcbee@terpmail.umd.edu)

## Resources:

https://www.kenney.nl/assets/playing-cards-pack
