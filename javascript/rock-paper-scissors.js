/*****************************************************************************/
/*                                                                           */
/*  Creator: Paul Holmes                                                     */
/*                                                                           */
/*  Rock Paper Scissors                                                      */
/*                                                                           */
/*  This program plays rock paper scissors with a user byt getting a random  */
/*  choice for the computer and comparing it to the user's choice.           */
/*                                                                           */
/*****************************************************************************/

const choices = ["R", "P", "S"]; // list of choices for the computer to choose

/* Gets a random choice for the computer to play */
function computerPlay() {
    return choices[Math.floor(Math.random()*choices.length)];
}

/* Returns a winner for a round of rock, paper, scissors.                    */
function playRound(playerSelection, computerSelection) {

    let winnerText;

    if (playerSelection === computerSelection) {
        winnerText = "It was a tie :/ Try again.";
    }
    else if (playerSelection === "R") {
        if (computerSelection === "P") {
            winnerText = "You Lose :( Paper beats Rock."
        }
        else {
            winnerText = "You Win! Rock beats Scissors.";
        }
    }
    else if (playerSelection === "P") {
        if (computerSelection === "S") {
            winnerText = "You Lose :( Scissors beats Paper."
        }
        else {
            winnerText = "You Win! Paper beats Rock.";
        }
    }
    else if (playerSelection === "S") {
        if (computerSelection === "R") {
            winnerText = "You Lose :( Rock beats Scissors."
        }
        else {
            winnerText = "You Win! Scissors beats Rock.";
        }
    }

    return winnerText;
}

/* Gets the player's choice and returns the first character                  */
function getPlayerSelection() {
    let playerSelection;

    playerSelection = prompt("Choose Rock, Paper, or Scissors:");

    return playerSelection.charAt(0).toUpperCase();
}

/* plays 5 rounds of Rock, Paper, Scissors with the computer                 */
function game() {
    for (let i = 1; i <= 5; i++) {
        console.log(playRound(getPlayerSelection(), computerPlay()));
    }
}

game();