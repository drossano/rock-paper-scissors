// Declare rockValue, paperValue, scissorsValue, computerValue, and playerValue
let rockValue;
let paperValue;
let scissorsValue;
let computerSelect;
let playerSelect;

/* computerPlay randomly selects number from 1-3 (0-2???)
    If 1 
        then computer picks Rock
        assign values such that scissors<rock<paper
        computer gets assigned its choice's value
        
    Repeat for paper and scissors*/
function computerPlay(){
    
    computerSelect = Math.floor(Math.random()*3);
    if (computerSelect == 0) { //Rock
        scissorsValue = 1;
        rockValue = 2;
        paperValue = 3;
        computerSelect = rockValue;
    }else if (computerSelect == 1) { //Paper
        rockValue = 1;
        paperValue = 2;
        scissorsValue = 3;
        computerSelect = paperValue;
    }else if (computerSelect ==2) { //Scissors
        paperValue = 1;
        scissorsValue = 2;
        rockValue = 3;
        computerSelect = scissorsValue;
    }
}

//Prompt player to pick rock paper or scissors 
    //Assign associated value with players choice
function playerChoice() {
    const playerSelectString = prompt("You're challenged to a game of Rock Paper Scissors! Enter \"Rock\" \"Paper\" or \"Scissors\" to play!")
    if (playerSelectString.toLowerCase() == "rock") {
        playerSelect = rockValue;
    } else if (playerSelectString.toLowerCase() == "paper") {
        playerSelect = paperValue;
    } else if (playerSelectString.toLowerCase() == "scissors") {
        playerSelect = scissorsValue;
    }
}
/*Compare player and computer choices
    If player> computer
        hen player wins
    If computer>player
        then computer wins
    If computer==player
        Draw*/
function rps() { 
        computerPlay();
        playerChoice();
        if (playerSelect > computerSelect) {
            console.log("You win!");
        } else if (playerSelect < computerSelect) {
            console.log("You lose!");
        } else {
            console.log("It's a draw!");
        }
}

rps();
//Repeat 5 times and track score
        