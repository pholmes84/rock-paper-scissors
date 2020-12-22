/*****************************************************************************/
/*                                                                           */
/*  Creator: Paul Holmes                                                     */
/*                                                                           */
/*  Rock Paper Scissors                                                      */
/*                                                                           */
/*  This program plays rock paper scissors with a user by getting a random   */
/*  choice for the computer and comparing it to the user's choice.           */
/*                                                                           */
/*****************************************************************************/

const choices = ["R", "P", "S"]; // list of choices for the computer to choose

/* Gets a random choice for the computer to play */
function computerPlay() {
    return choices[Math.floor(Math.random()*choices.length)];
}

/* Returns a winner for a round of rock, paper, scissors. 0 is a tie,        */
/* 1 is the player, and two is the computer                                  */
function playRound(playerSelection, computerSelection) {

    let winner = ["", 0];

    if (playerSelection === computerSelection) {
        winner[0]= "It was a tie :/ Try again.";
    }
    else if (playerSelection === "R") {
        if (computerSelection === "P") {
            winner[0] = "You Lose :( Paper beats Rock."
            winner[1] = 2;
        }
        else {
            winner[0] = "You Win! Rock beats Scissors.";
            winner[1] = 1;
        }
    }
    else if (playerSelection === "P") {
        if (computerSelection === "S") {
            winner[0] = "You Lose :( Scissors beats Paper."
            winner[1] = 2;
        }
        else {
            winner[0] = "You Win! Paper beats Rock.";
            winner[1] = 1;
        }
    }
    else if (playerSelection === "S") {
        if (computerSelection === "R") {
            winner[0] = "You Lose :( Rock beats Scissors."
            winner[1] = 2;
        }
        else {
            winner[0] = "You Win! Scissors beats Rock.";
            winner[1] = 1;
        }
    }
    console.log(winner);
    return winner;
}

const buttons = document.querySelector('.playerChoice').querySelectorAll('button');
const score = document.querySelector('#score');

var gameOver = false;
playerScore = 0;
computerScore = 0;

const playerScoreP = document.querySelector('#playerScore');
const computerScoreP = document.querySelector('#computerScore');
const result = document.querySelector('#result');

function setScore (playerScore, computerScore) {

    score.removeChild(playerScoreP);
    score.removeChild(computerScoreP);

    playerScoreP.textContent = "Player: " + playerScore;
    computerScoreP.textContent = "Computer: " + computerScore;

    score.appendChild(playerScoreP);
    score.appendChild(computerScoreP);
}

function displayText(text) {

    score.removeChild(result);

    console.log(playerScore);
    console.log(computerScore);

    if (playerScore < 5 && computerScore < 5) {
        result.textContent = text;
    }
    else if (playerScore === 5) {
        gameOver = true;
        result.textContent = "You win the game!";
    }
    else if (computerScore === 5){
        gameOver = true;
        result.textContent = "You lose the game :( better luck next time."
    }


    score.appendChild(result);
}

    buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let winner = playRound(button.id.charAt(0), computerPlay());

        if (!gameOver){
            if (winner[1] === 1) {
                playerScore++;
            }
            else if (winner[1] === 2) {
                computerScore++;
            }
    
            setScore(playerScore, computerScore);
    
            displayText(winner[0]);
            console.log(gameOver);
        }

    });
});

setScore(playerScore, computerScore);