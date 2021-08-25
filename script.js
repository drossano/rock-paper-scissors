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

function game() {
    let message;
    let wins = 0;
    let losses = 0;
    let  draws = 0;
    for (let games = 1; games <6; games ++){//Play 5 games
        let playerSelection= "";
        while (playerSelection.toLowerCase() != "rock" && playerSelection.toLowerCase() !=  "paper" && playerSelection.toLowerCase() != "scissors"){//Keeps prompting player until they enter a correct choice
            playerSelection = prompt("You're challenged to a game of Rock Paper Scissors! Enter \"Rock\" \"Paper\" or \"Scissors\" to play!");
            console.log(playerSelection);
        }
        const computerSelection = computerPlay();
        message = playRound(computerSelection,playerSelection);
        console.log(message);
        if (message.includes("win")){ //tracks wins
            wins += 1;
            console.log(`Game ${games}\nWins: ${wins} Losses: ${losses} Draws: ${draws}`);
        }else if (message.includes("lose")){
            losses += 1;
            console.log(`Game ${games}\nWins: ${wins} Losses: ${losses} Draws: ${draws}`);
        }else if (message.toLowerCase().includes("draw")){
            draws += 1;
            console.log(`Game ${games}\nWins: ${wins} Losses: ${losses} Draws: ${draws}`);
        }
    }
}

game();

