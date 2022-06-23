//Function to start a new game.
function playGame() {
    let userScore = 0;
    let computerScore = 0;
    let roundCounter = 1;
    let roundScores;

    // //Core game loop
    // while(userScore < 3 && computerScore < 3) {
    //     roundScores = playRound(roundCounter, userScore, computerScore);
        
    //     //Get the round scores from the array and iterate the round counter
    //     userScore = roundScores[0];
    //     computerScore = roundScores[1];
    //     roundCounter++;
    // }
    
    //Game win logic
    if(userScore > computerScore) {
        console.log("You win! You had " + userScore + " wins while your opponent had "+ computerScore + ".");
    }
    else if(userScore < computerScore) {
        console.log("Unfortunately, you lost. You had " + userScore + " wins while your opponent had "+ computerScore + ".");
    }
    else {
        console.log("It's a tie! You both had " + userScore + ", making it a tie.");
    }
}

//Function to start a new round. Prompts the use for their move and calls the function to generate a computer move.
function playRound(roundCounter, userScore, computerScore) {
    let scores = [userScore, computerScore]
    console.log("Welcome to round " + roundCounter + "!");
    const userInput = prompt("Please enter your move: ").toLowerCase();
    const computerMove = computerPlay();
    //console.log(computerMove);

    //The logic that decides a winner
    let userWinState;
    let tieState = false;
    if(userInput == "rock" && computerMove == "scissors") userWinState = true;
    else if (userInput == "paper" && computerMove == "rock") userWinState = true;
    else if (userInput == "scissors" && computerMove == "paper") userWinState = true;
    else if ((userInput == "rock" && computerMove == "rock") || (userInput == "paper" && computerMove == "paper") || (userInput == "scissors" && computerMove == "scissors")) {
        userWinState = false;
        tieState = true;
    }
    else userWinState = false;

    if(userWinState == true) {
        scores[0]++;
        console.log("Congratulations, you won! Your " + userInput + " beats their " + computerMove + "!");
    }
    else if(tieState == true) {
        scores[0]++;
        scores[1]++;
        console.log("Unfortunately, it was a tie! You both chose " + userInput);
    }
    else {
        scores[1]++;
        console.log("Bummer, you lost. Their " + computerMove + " beats your " + userInput)
    }
    console.log("Your score is "+ scores[0] + ", and your opponent's score is " + scores[1] + ".");
    console.log("------------------------------------");
    return scores;

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

//Welcome messages
// console.log("Welcome to Rock, Paper, Scissors!");
// console.log("------------------------------------")
// console.log("This will be a best of 5 game. First to 3 wins is the winner.")

const gameButtons = document.querySelectorAll("button");
console.log(gameButtons);
gameButtons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(button.id);
    })
})

//Main game call
//playGame();
//console.log("Thank you for playing the game. See you next time!");
//console.log(userInput);