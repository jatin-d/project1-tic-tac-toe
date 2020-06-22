# Project1-tic-tac-toe

#About Tic Tac Toe
Tic- Tac- Toe is a game for two players, X and O, who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner.

#How to play the game
The first player goes with "X", the second player goes with “O”. These symbols will be placed on the table, in the attempt to have three of them in a row. If you're going first, then the best move you can make is to move into the centre. This will maximise your chances of winning, since you'll be able to create a row quickly. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner.

#Development
The game is developed using three programming languages.

+ HTML
+ CSS
+ JavaScript

HTML is used to render the game on a browser. Game styles are created using CSS. All functionality is created using JavaScript.

#Development phases

1. The user interface:
The game is housed within a main 2x2 grid. This grid creates 4 boxes with contains the main game, scores, reset game button and reset scores button respectively. to make the grid clickable, uniq class was assigned to each grid.The box containing the game interface was further divided in to 3x3 grid to create 9 boxes assigned with uniq class. Necessary styling was created to highlight not yet played boxes as well as played boxes. Created a  display message informing the winner. It should show us if the game ended in a draw which will be implemented later. It has reset button to reset game within currant tournament and a button to reset scores after the tournament.
2. Functionality:
The code tracks any clicks that happen on a cells. It checks if a valid move has been made. It makes sure that nothing happens if an already played cell has been clicked. It updates game state and validates the game. After validation if we have a winner, it stops the game.The code reflects the updates made on the UI and resets based on user action.

#To play the game
Visit : <https://jatin-d.github.io/project1-tic-tac-toe/>
