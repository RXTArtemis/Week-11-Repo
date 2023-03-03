//create variables
let board=[[0,1,2]];
          [[0,1,2]];
          [[0,1,2]];  //array to push conditions into
let playerO = img2; //player O
let playerX = img; //player X

//for individual icon markers
let img=document.createElement("img");
img src="https://mir-s3-cdn-cf.behance.net/projects/404/ba0765162472679.63d6958e81afc.jpg";
document.body.appendChild(img);

let img2=document.createElement("img");
img2 src="https://64.media.tumblr.com/a135905d66c9fa3a969da082dbdb812f/fb42c1baa3d2d89e-5c/s400x600/57210f3bc2dc8f7a627dd27f4dd667e6ae94fd28.png ";
document.body.appendChild("img");


let currentPlayer = playerX; //start with player x
//boolean value that will switch once the conditions are complete
let winner = true;
let gameOver = false; 
let turns = 0;
let cellPlayerMarker = [" ", " ", " ", " "," "," "," ", " ", " "];
let winConditions=[[0,1,2],
                   [0,0,0],
                   [1,1,1],
                   [2,2,2],
                   [2,1,0]];


//individual cells
let case1=document.getElementById("case1");
let case2=document.getElementById("case2");
let case3=document.getElementById("case3");
let case4=document.getElementById("case4");
let case5=document.getElementById("case5");
let case6=document.getElementById("case6");
let case7=document.getElementById("case7");
let case8=document.getElementById("case8");
let case9=document.getElementById("case9");

//press start button
document.getElementById('start').addEventListener('click',()=>{
//ask about which function to put here to start the game
});



//code that invokes all game functions


//switch turns in between players
//possibly add turn counter stuff here and make turns a global variable

let cells = document.getElementsByClassName("cell");
console.log(cells);

for(let i=0; i < cells.length; i++){
    console.log(cells[i]);
    cells[i].addEventListener("click", ()=>{
        console.log(cells[i]);
        cells[i].innerHTML = playerX;
    });
}

function turnsCounter(){
  while(cells[i].innerHTML === playerX && gameOver === false){
    if(turns % 2 === 0 ){
        cells[i].innerHTML = playerX;
        turns++;
    }else if(turns % 2 === 1){
        cells[i].innerHTML = playerO;
        turns++;
    }
  }

}

const restartButton = document.getElementById('restartButton');
const winningMessageElement = document.getElementById('winningMessage');
const winningMessageText = document.getElementById('winningMessageText');

function switchPlayerTurns(){

//set a boolean for players that works only inside this function
playerX = true;
//loop to iterate through turns, less than 9 turns because there are 9 boxes but index starts at 0
for(let i = 0; i < 9; i++){
    while(!winner){
        //these conditions are both true
        if(currentPlayer === playerX && gameOver === false){
            //function to mark box and play a turn
            boxMarker();
            chooseWinner();
                if(playerX ===true && winner === true){
            } console.log("Winner is player X!");
            winningMessageText.innerText = "Winner is Player X!";
       
        //first condition is false to switch players and second condition is true for playerO to play their turn
        }if(currentPlayer!=playerX && gameOver === false){
            //player O's turn
            //switch players if the first if condition is not met
            currentPlayer = playerO;
            boxMarker();
            chooseWinner();
                if(playerX ===false && winner === true){
            } console.log("Winner is player O!");
            winningMessageText.innerText = "Winner is Player O!";
    
         }else{
                winningMessageText.innerText = "Its a draw!"
         }
                } 
            }

        }



//function to shade box when there is a winner
function boxMarker(){
 
    for(let i = 0; i < 9; i++){
        while(winner === true && gameOver === true){
            cells[i].style.backgroundColor = "light-grey";
        }
    }if(turns % 2 === 0){
        cells[i].style.background = "url(images/isabellewaving.jpg)";
    
    }else if(turns % 2 === 1){
        cells[i].style.background ="url(images/tomnook.jpg)" ;
        
    }
}



//function to choose winner and announce winner(add conditions in this function)
function chooseWinner(){
    for(let i = 0; i < winConditions.length; i++){
        let condition = winConditions[i];
        const box1 = condition[0];
        const box2 = condition[1];
        const box3 = condition[2];
        if(box1 === " " || box2 === " " || box3 === " "){
            gameOver===false;
        }else if(box1 == box2 && box2 ==box3){
            winner===true;
            gameOver===true;
        }
    }
}



//activate button to start and reset game
function resetGame(){
   restartButton;
   gameOver=true;
   document.getElementById(case1).value = " ";
   document.getElementById(case2).value = " ";
   document.getElementById(case3).value = " ";
   document.getElementById(case4).value = " ";
   document.getElementById(case5).value = " ";
   document.getElementById(case6).value = " ";
   document.getElementById(case7).value = " ";
   document.getElementById(case8).value = " ";
   document.getElementById(case9).value = " ";
    for(i=0; i < cells.length; i++){
        console.log(cells[i]);
        cells[i].removeEventListener("click", ()=>{
            console.log(cells[i]);
            cells[i].innerHTML = currentPlayer;
        }); 
}

}



