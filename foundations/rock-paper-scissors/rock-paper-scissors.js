//Function to start a new game.
function playGame() {
    let userScore = 0;
    let computerScore = 0;
    let userWinState;

    const divContainer = document.querySelector('#resultsDiv');
    const roundResultElement = document.createElement('div');
    const gameResultElement = document.createElement('h2');

    const gameButtons = document.querySelectorAll("button");
    // console.log(gameButtons);
    gameButtons.forEach((button) => {
        button.addEventListener('click', () => {
            userWinState = playRound(button.id);
            //Legwork of the win condition logic
            if(userWinState == "true") {
                userScore++;
                roundResultElement.textContent = "Congratulations, you won the round! The score is now " + userScore + ":" + computerScore;
                // inner if statement checks for a game-ending round win
                if(userScore == 3) {
                    gameResultElement.textContent = "You win! You had " + userScore + " wins while your opponent had "+ computerScore + ".";
                    divContainer.appendChild(gameResultElement);
                }
            }
            else if(userWinState == "tie") {
                userScore++;
                computerScore++;
                roundResultElement.textContent = "It's a tie! The score is now " + userScore + ":" + computerScore;
                // Inner if statement checks for a game-ending round tie
                if(userScore == 3 && computerScore == 3) {
                    gameResultElement.textContent = "Unfortunately, you lost. You had " + userScore + " wins while your opponent had "+ computerScore + ".";
                    divContainer.appendChild(gameResultElement);
                }
                else if(userScore == 3) {
                    gameResultElement.textContent = "You win! You had " + userScore + " wins while your opponent had "+ computerScore + ".";
                    divContainer.appendChild(gameResultElement);
                }
                else if(computerScore == 3) {
                    gameResultElement.textContent = "Unfortunately, you lost. You had " + userScore + " wins while your opponent had "+ computerScore + ".";
                    divContainer.appendChild(gameResultElement);
                }
            }
            else {
                computerScore++;
                roundResultElement.textContent = "Bummer, you lost the round. The score is now " + userScore + ":" + computerScore;
                
                // inner if statement that checks for a computer win
                if(computerScore == 3) {
                    gameResultElement.textContent = "Unfortunately, you lost. You had " + userScore + " wins while your opponent had "+ computerScore + ".";
                    divContainer.appendChild(gameResultElement);
                }
            }
            divContainer.appendChild(roundResultElement);
        });
        //Learning Note: When you pass a function directly to eventLisener, it executes the function immediately.
    });
}

//Function to start a new round. Basically just calls the computer move function and determines the round winner.
function playRound(userInput) {

    const computerMove = computerPlay();

    //The logic that decides a round winner
    let userWinState;
    let tieState = false;
    if(userInput == "rock" && computerMove == "scissors") userWinState = "true";
    else if (userInput == "paper" && computerMove == "rock") userWinState = "true";
    else if (userInput == "scissors" && computerMove == "paper") userWinState = "true";
    else if ((userInput == "rock" && computerMove == "rock") || (userInput == "paper" && computerMove == "paper") || (userInput == "scissors" && computerMove == "scissors")) {
        userWinState = "tie";
    }
    else userWinState = "false";

    return userWinState;
}

//Function that generates the computer's move
function computerPlay() {
    computerMoveNumber = Math.floor(Math.random()*3) + 1;

    let computerMove;
    switch(computerMoveNumber) {
        case 1: computerMove = "rock"; break;
        case 2: computerMove = "paper"; break;
        case 3: computerMove = "scissors"; break;
    }

    return computerMove;
}

playGame();
