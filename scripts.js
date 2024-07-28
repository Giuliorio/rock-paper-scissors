const buttons = document.querySelectorAll(".button");
const message = document.querySelector(".message");
const playerScoreDisplay = document.querySelector(".player");
const computerScoreDisplay = document.querySelector(".computer");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomValue = Math.floor(Math.random() * (9) + 1);
    
    if (randomValue <= 3) return "rock";
    if (randomValue >= 7) return "paper";
    return "scissors";
}

function getHumanChoice() {
    let userInput;
    let isValidInput = false;
    
    do {
        userInput = prompt("Rock Papers or Scissors?");
        userInput = userInput.toLowerCase()

        if (userInput === "rock") isValidInput = true;
        if (userInput === "paper") isValidInput = true;
        if (userInput === "scissors") isValidInput = true;
    } while (isValidInput === false)

    return userInput;
}



function playGame() {
    const gameLength = 5;

    const winMessage = "Congrats you are the winner!";
    const loseMessage = "I came out victorious!";
    const tieMessage = "We're even this time!"

    let humanScore = 0;
    let computerScore = 0;
    
    const playRound = (humanChoice, computerChoice) => {
        const winMessage = "Great job, you won the round!"
        const loseMessage = "Sorry, you lost the round :("
    
        const compareChoices = (winning, losing) => {
            if(humanChoice === winning) {
                if (computerChoice === losing) {
                    alert(winMessage);
                    humanScore++
                    return
                }
                alert(loseMessage)
                computerScore++
                return
            }
        }
    
        if (humanChoice === computerChoice) return alert("Tie!");
        compareChoices("rock", "scissors");
        compareChoices("scissors", "paper");
        compareChoices("paper", "rock");
    }

    for (let i = 0; i < gameLength; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore === computerScore) alert(tieMessage);
    alert(humanScore > computerScore ? winMessage : loseMessage)
}

buttons.forEach((button, i) => {
    button.addEventListener("click", (e) => {
        const choice = e.currentTarget.classList[0]
    })
})