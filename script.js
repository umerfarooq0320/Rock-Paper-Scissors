let userScore = 0;
let computerScore = 0;
const choices = document.querySelectorAll(".choice");

const playerScoreElement = document.querySelector("#player-score");
const computerScoreElement = document.querySelector("#computer-score");
const resultMessage = document.querySelector("#result-message");

const computerChoices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const randomIndex = Math.floor(
        Math.random() * computerChoices.length
    );
    return computerChoices[randomIndex];
}

function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    if (userChoice === computerChoice) {

        resultMessage.textContent =
            `It's a draw! Both chose ${userChoice}.`;
        return;
    }

    if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
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

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const userChoice = choice.id;
        console.log("You chose:", userChoice);
        playGame(userChoice);
    });

});
