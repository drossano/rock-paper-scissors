function computerPlay(){ //Computer randomly selects rock,paper or scissors
    let computerSelection
    let randomNumber = Math.floor(Math.random()*3);
    if (randomNumber == 0) { 
        return computerSelection = "rock";
    }else if (randomNumber == 1) { 
        return computerSelection = "paper";
    }else if (randomNumber ==2) { 
        return computerSelection = "scissors";
    }
}

function playRound(computerSelection,playerSelection) { //Compares computer and player selections to determine who wins
    if (computerSelection == "rock" && playerSelection.toLowerCase() == "scissors"){
        return "Rock breaks scissors, you lose!";
    }else if (computerSelection == "rock" && playerSelection.toLowerCase() == "paper"){
        return "Paper covers rock, you win!";
    }else if (computerSelection == "paper" && playerSelection.toLowerCase() == "rock"){
        return "Paper covers rock, you lose!";
    }else if (computerSelection == "paper" && playerSelection.toLowerCase() =="scissors"){
        return "Scissors cut paper, you win!";
    }else if (computerSelection == "scissors" && playerSelection.toLowerCase() == "paper"){
        return "Scissors cut paper, you lose!";
    }else if (computerSelection == "scissors" && playerSelection.toLowerCase() == "rock"){
        return "Rock breaks scissors, you win!";
    }else if (computerSelection == playerSelection.toLowerCase()) {
        return "Draw!";
    }
}

let playerWins = 0;
let computerWins = 0;
const playerWinTracker = document.querySelector('#player-wins');
const computerWinTracker = document.querySelector('#computer-wins');
playerWinTracker.textContent=playerWins;
computerWinTracker.textContent=computerWins;
const results = document.querySelector('#results')
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', ()=> {
        if (playerWins < 5 && computerWins < 5){
            let message = playRound(computerPlay(),button.id);
            results.textContent = message;
            if (message.includes("win")){ //tracks wins
                playerWins += 1;
                playerWinTracker.textContent=playerWins;
                if (playerWins == 5){
                    message = "You won 5 times, you're the champion! Refresh the page to play again."
                    results.textContent = message;
                } else{
                return;
            };
            }else if (message.includes("lose")) {
                computerWins += 1;
                computerWinTracker.textContent=computerWins;
                if (computerWins == 5) {
                    message = "The computer won 5 times, refresh to try again!"  
                    results.textContent = message;
                } else {
                    return;
                }
            } else {
                return;
            }
        } else {
            return;
        }
    });
});