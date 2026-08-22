let userScore = 0;
let computerScore = 0;

let gameMode = "single";
let playerOneChoice = null;

const choices = document.querySelectorAll(".choice");

const playerScoreElement = document.querySelector("#player-score");
const computerScoreElement = document.querySelector("#computer-score");
const resultMessage = document.querySelector("#result-message");

const playerOneLabel = document.querySelector("#player-one-label");
const playerTwoLabel = document.querySelector("#player-two-label");

const singlePlayerButton = document.querySelector("#single-player");
const twoPlayerButton = document.querySelector("#two-player");

const computerChoices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const randomIndex = Math.floor(
        Math.random() * computerChoices.length
    );

    return computerChoices[randomIndex];
}

function determineWinner(playerOne, playerTwo) {

    if (playerOne === playerTwo) {
        return "draw";
    }

    if (
        (playerOne === "rock" && playerTwo === "scissors") ||
        (playerOne === "paper" && playerTwo === "rock") ||
        (playerOne === "scissors" && playerTwo === "paper")
    ) {
        return "playerOne";
    }

    return "playerTwo";
}

function playSinglePlayer(userChoice) {

    const computerChoice = getComputerChoice();

    const winner = determineWinner(userChoice, computerChoice);

    if (winner === "draw") {

        resultMessage.textContent =
            `It's a draw! Both chose ${userChoice}.`;

    } else if (winner === "playerOne") {

        userScore++;

        playerScoreElement.textContent = userScore;

        resultMessage.textContent =
            `You win! ${userChoice} beats ${computerChoice}.`;

    } else {

        computerScore++;

        computerScoreElement.textContent = computerScore;

        resultMessage.textContent =
            `You lose! ${computerChoice} beats ${userChoice}.`;
    }
}

function playTwoPlayer(playerTwoChoice) {

    const winner = determineWinner(
        playerOneChoice,
        playerTwoChoice
    );

    if (winner === "draw") {

        resultMessage.textContent =
            `It's a draw! Both chose ${playerOneChoice}.`;

    } else if (winner === "playerOne") {

        userScore++;

        playerScoreElement.textContent = userScore;

        resultMessage.textContent =
            `Player 1 wins! ${playerOneChoice} beats ${playerTwoChoice}.`;

    } else {

        computerScore++;

        computerScoreElement.textContent = computerScore;

        resultMessage.textContent =
            `Player 2 wins! ${playerTwoChoice} beats ${playerOneChoice}.`;
    }

    playerOneChoice = null;

    setTimeout(() => {
        resultMessage.textContent = "Player 1, choose your move!";
    }, 2000);
}
singlePlayerButton.addEventListener("click", () => {

    gameMode = "single";

    singlePlayerButton.classList.add("active");
    twoPlayerButton.classList.remove("active");

    playerOneLabel.textContent = "You";
    playerTwoLabel.textContent = "Computer";

    playerOneChoice = null;

    resultMessage.textContent = "Make your move!";
});

twoPlayerButton.addEventListener("click", () => {

    gameMode = "two";

    twoPlayerButton.classList.add("active");
    singlePlayerButton.classList.remove("active");

    playerOneLabel.textContent = "Player 1";
    playerTwoLabel.textContent = "Player 2";

    playerOneChoice = null;

    resultMessage.textContent =
        "Player 1, choose your move!";
});


choices.forEach(choice => {

    choice.addEventListener("click", () => {

        const selectedChoice = choice.id;

        if (gameMode === "single") {

            playSinglePlayer(selectedChoice);

        }

        else {

            if (playerOneChoice === null) {

                playerOneChoice = selectedChoice;

                resultMessage.textContent =
                    "Player 2, choose your move!";

            }
            else {

                playTwoPlayer(selectedChoice);

            }
        }
    });

});