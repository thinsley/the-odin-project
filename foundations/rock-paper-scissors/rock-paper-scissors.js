//Function to start a new game.
function playGame() {
    let userScore = 0;
    let computerScore = 0;
    let roundCounter = 1;
    let roundScores;
    let userWinState;
    let gameState = true;

    const divContainer = document.querySelector('#resultsDiv');
    const roundResultElement = document.createElement('div');
    const gameResultElement = document.createElement('h2');

    const gameButtons = document.querySelectorAll("button");
    // console.log(gameButtons);
    gameButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (userScore >= 3 || computerScore >= 3) {
                //Game win logic
                if(userScore > computerScore) {
                    gameResultElement.textContent = "You win! You had " + userScore + " wins while your opponent had "+ computerScore + ".";
                }
                else if(userScore < computerScore) {
                    gameResultElement.textContent = "Unfortunately, you lost. You had " + userScore + " wins while your opponent had "+ computerScore + ".";
                }
                else {
                    gameResultElement.textContent = "It's a tie! You both had " + userScore + ", making it a tie.";
                }
                divContainer.appendChild(gameResultElement);
                gameState = false;
            }
            else {
                userWinState = playRound(button.id);
                if(userWinState == "true") {
                    userScore++;
                    roundResultElement.textContent = "Congratulations, you won! The score is now " + userScore + ":" + computerScore;
                    // console.log("Congratulations, you won! Your " + userInput + " beats their " + computerMove + "!");
                }
                else if(userWinState == "tie") {
                    userScore++;
                    computerScore++;
                    roundResultElement.textContent = "Unfortunately, it was a tie! The score is now " + userScore + ":" + computerScore;
                    // console.log("Unfortunately, it was a tie! You both chose " + userInput);
                }
                else {
                    computerScore++;
                    roundResultElement.textContent = "Bummer, you lost. The score is now " + userScore + ":" + computerScore;
                    // console.log("Bummer, you lost. Their " + computerMove + " beats your " + userInput)
                }
                divContainer.appendChild(roundResultElement);
            }
        });
        //Learning Note: When you pass a function directly to eventLisener, it executes the function immediately.
    });
}

//Function to start a new round. Prompts the use for their move and calls the function to generate a computer move.
function playRound(userInput) {
    // let scores = [userScore, computerScore]
    // console.log("Welcome to round " + roundCounter + "!");
    // const userInput = prompt("Please enter your move: ").toLowerCase();
    const computerMove = computerPlay();

    //console.log(computerMove);

    //The logic that decides a winner
    let userWinState;
    let tieState = false;
    if(userInput == "rock" && computerMove == "scissors") userWinState = "true";
    else if (userInput == "paper" && computerMove == "rock") userWinState = "true";
    else if (userInput == "scissors" && computerMove == "paper") userWinState = "true";
    else if ((userInput == "rock" && computerMove == "rock") || (userInput == "paper" && computerMove == "paper") || (userInput == "scissors" && computerMove == "scissors")) {
        userWinState = "tie";
    }
    else userWinState = "false";

    // if(userWinState == true) {
    //     // scores[0]++;
    //     roundResultElement.textContent = "Congratulations, you won! Your " + userInput + " beats their " + computerMove + "!";
    //     // console.log("Congratulations, you won! Your " + userInput + " beats their " + computerMove + "!");
    // }
    // else if(tieState == true) {
    //     // scores[0]++;
    //     // scores[1]++;
    //     roundResultElement.textContent = "Unfortunately, it was a tie! You both chose " + userInput;
    //     // console.log("Unfortunately, it was a tie! You both chose " + userInput);
    // }
    // else {
    //     // scores[1]++;
    //     roundResultElement.textContent = "Bummer, you lost. Their " + computerMove + " beats your " + userInput;
    //     // console.log("Bummer, you lost. Their " + computerMove + " beats your " + userInput)
    // }

    // console.log("Your score is "+ scores[0] + ", and your opponent's score is " + scores[1] + ".");
    // console.log("------------------------------------");
    return userWinState;

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

//Main game call
playGame();
//console.log("Thank you for playing the game. See you next time!");
//console.log(userInput);