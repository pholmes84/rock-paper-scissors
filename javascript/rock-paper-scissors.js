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

    return winner;
}

/* Gets the player's choice and returns the first character                  */
function getPlayerSelection() {
    let playerSelection;

    playerSelection = prompt("Choose Rock, Paper, or Scissors:");

    return playerSelection.charAt(0).toUpperCase();
}

let score = [0, 0];

/* plays 5 rounds of Rock, Paper, Scissors with the computer                 */
function game() {
    for (let i = 1; i <= 5; i++) {
        //Store player(score[0]) and computer(score[1]) scores

        let playerSelection = getPlayerSelection();
        let computerSelection = computerPlay();

        let winner = playRound(playerSelection, computerSelection);

        if (winner[1] === 1) {
            score[0]++;
        }
        else if (winner[1] === 2) {
            score[1]++;
        }

        console.log(winner[0]);
        console.log("You: " + score[0] + "\nComputer: " + score[1]);
    }

    if (score[0] > score[1]) {
        console.log("You win the game!");
    }
    else if (score[0] < score[1]) {
        console.log("You lost the game :(");
    }
    else {
        console.log("It was a tie :/");
    }
}

game();