//Function to start a new round. Prompts the use for their move and calls the function to generate a computer move.
function playRound() {
    console.log("Welcome to a new round!");
    let userInput = prompt("Please enter your move: ").toLowerCase();
    let computerMove = computerPlay();

    //The logic that decides a winner

}

//Function that generates the computer's move
function computerPlay() {
    computerMoveNumber = Math.floor(Math.random()*3) + 1;
    // console.log(computerMoveNumber);

    let computerMove;
    switch(computerMoveNumber) {
        case 1: computerMove = "rock"; break;
        case 2: computerMove = "paper"; break;
        case 3: computerMove = "scissors"; break;
    }
    // console.log(computerMove);
    return computerMove;
}

console.log("Welcome to Rock, Paper, Scissors!");
console.log("")
playRound();

//console.log(userInput);