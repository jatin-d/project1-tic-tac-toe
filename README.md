Welcome to tic-tac-toe!
===================

**Tic- Tac- Toe** is a game for two players, X and O, who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner. 

----------

Game Play
-------------
The game is housed within a main 3x3 grid. This grid creates 4 boxes that contain the main game, scores, reset game button, and reset scores button respectively.

![enter image description here](https://i.imgur.com/yuGZUUQ.png)

At the start of the game, you have a choice to select if you want to play with another person or with a computer bot. This is available in <i class="icon-cog"></i>**game settings**. 

![enter image description here](https://i.imgur.com/1pcEQKR.png)

You can also choose if you want to assign either 'X' or 'O' to any of the players. This setting is available in <i class="icon-cog"></i>**player settings**.  

![enter image description here](https://i.imgur.com/RFFCRlC.png)

The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner.

![enter image description here](https://i.imgur.com/4rEeg3k.png)

----------

Development
-------------
The game is developed using front-end programming languages including HTML5, CSS, and JavaScript. HTML is used to render the game on a browser. Game styles are created using CSS. All functionality is created using JavaScript.

> **Development Features:**

> - To make the grid clickable, a unique class was assigned to each grid. The box containing the game interface was further divided into a 3x3 grid to create 9 boxes assigned with a unique class.
> - Necessary styling was created to highlight not yet played boxes as well as played boxes.
> - Created a  display message informing the winner.
> - It has a reset button to <i class="icon-refresh"></i> **reset the game** within the current tournament and a button to <i class="icon-refresh"></i> **reset scores** after the tournament.
> - The code tracks any clicks that happen on the cells. It checks if a valid move has been made.
> - It makes sure that nothing happens if an already played cell has been clicked. It updates the game state and validates the game.
> - After validation, if we have a winner, it stops the game. The code reflects the updates made on the UI and resets based on user action.

Demo
-------------
[Check out Tic-Tac-Toe](https://jatin-d.github.io/project1-tic-tac-toe/)
