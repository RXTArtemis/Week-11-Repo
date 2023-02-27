//create variables
let board = []; //array to push conditions into
let playerO = "O"; //player O
let playerX = "X"; //player X
let currentPlayer = playerX; //start with player x
//boolean value that will switch once the conditions are complete
let winner = true;
let gameOver = false; 

//invoke all functions to create game logic
    //press start button

//switch turns in between players-create a function

function switchPlayerTurns(playerX, playerO){
//set a boolean for players that works only inside this function
playerX = true;
//loop to iterate through turns, less than 9 turns because there are 9 boxes but index starts at 0
for(let i = 0; i < 9; i++){
    while(!winner){
        //these conditions are both true
        if(currentPlayer === playerX && gameOver === false){
            //function to mark box and play a turn
            boxMarker(playerX);
            //update the board-function to update the board
            updateBoard();
        //ask if updateBoard should be inside loop or outside loop   
        //first condition is false to switch players and second condition is true for playerO to play their turn
        }else(currentPlayer!=playerX && gameOver === false){
            //player O's turn
            //switch players if the first if condition is not met
            currentPlayer = playerO;
            boxMarker(playerO);
            updateBoard();
        }
    } //check if there is a winner every round/turn
    chooseWinner();

}
}
//function to mark box and individual cell
function boxMarker(){
//add marker to every clickable cell and bring icons to JS

}

//function to choose winner and announce winner(add conditions in this function)
function chooseWinner(){
   
    //create conditions for a win
    let winConditions=[[1,2,3],
                       [1,4,7],
                       [1,5,9],
                       [4,5,6],
                       [2,5,8],
                       [3,5,7],
                       [7,8,9],
                       [3,6,9]];
    for(let i = 0; i < 9; i++){
    while(!winner && gameOver){
    //check for conditions  and update board
         }if(!winConditions){
            //game continues if win conditions aren't met
            gameOver===false;
         }else{
            winner === true;
            gameOver===true;
            //made the board not clickable except for the reset button
            //declare winner and make it appear on the page
            
         }
    }
}

//function to update Board data
function updateBoard(board){
 //set board indexes to resemble a grid
 board=[[0,0,0]],
       [[0,0,0]];
       [[0,0,0]];

}


//activate button to start and reset game


