// Declare rockValue, paperValue, scissorsValue, computerValue, and playerValue
/* let rockValue;
let paperValue;
let scissorsValue;
let randomNumber;
let playerSelect;
 */
/* computerPlay randomly selects number from 1-3 (0-2???)
    If 1 
        then computer picks Rock
        assign values such that scissors<rock<paper
        computer gets assigned its choice's value
        
    Repeat for paper and scissors*/
function computerPlay(){
    let computerSelection
    let randomNumber = Math.floor(Math.random()*3);
    if (randomNumber == 0) { 
        computerSelection = "rock";
    }else if (randomNumber == 1) { 
        computerSelection = "paper";
    }else if (randomNumber ==2) { 
        computerSelection = "scissors";
    }
    return computerSelection;
}



function rockPaperScissors(computerSelection,playerSelection) {
    if (computerSelection == "rock" && playerSelection == "scissors"){
        return "Rock breaks scissors, you lose!";
    }else if (computerSelection == "rock" && playerSelection == "paper"){
        return "Paper covers rock, you win!";
    }else if (computerSelection == "paper" && playerSelection == "rock"){
        return "Paper covers rock, you lose!";
    }else if (computerSelection == "paper" && playerSelection =="scissors"){
        return "Scissors cut paper, you win!";
    }else if (computerSelection == "scissors" && playerSelection == "paper"){
        return "Scissors cut paper, you lose!";
    }else if (computerSelection == "scissors" && playerSelection == "rock"){
        return "Rock breaks scissors, you win!";
    }else {
        return "Draw!";
    }
}

//Prompt player to pick rock paper or scissors 
    //Assign associated value with players choice
/* function playerChoice() {
    const playerSelectString = prompt("You're challenged to a game of Rock Paper Scissors! Enter \"Rock\" \"Paper\" or \"Scissors\" to play!")
    if (playerSelectString.toLowerCase() == "rock") {
        playerSelect = rockValue;
    } else if (playerSelectString.toLowerCase() == "paper") {
        playerSelect = paperValue;
    } else if (playerSelectString.toLowerCase() == "scissors") {
        playerSelect = scissorsValue;
    }
} */
/*Compare player and computer choices
    If player> computer
        hen player wins
    If computer>player
        then computer wins
    If computer==player
        Draw*/
/* function rps() { 
        computerPlay();
        playerChoice();
        if (playerSelect > randomNumber) {
            console.log("You win!");
        } else if (playerSelect < randomNumber) {
            console.log("You lose!");
        } else {
            console.log("It's a draw!");
        }
} */

// rps();
//Repeat 5 times and track score
        