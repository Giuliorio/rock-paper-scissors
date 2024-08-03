const buttons = document.querySelectorAll(".option");
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

const playRound = (humanChoice, computerChoice) => {
    const winMessage = "Great job, you won the round!"
    const loseMessage = "Sorry, you lost the round :("
    const tieMessage = "This time it was a tie"

    const compareChoices = (winning, losing) => {
        if(humanChoice === winning) {
            if (computerChoice === losing) {
                message.textContent = winMessage
                humanScore++
                playerScoreDisplay.textContent = humanScore
                return
            }
            message.textContent = loseMessage
            computerScore++
            computerScoreDisplay.textContent = computerScore
            return
        }
    }

    if (humanChoice === computerChoice) {
        message.textContent = tieMessage;
        return
    }
    compareChoices("rock", "scissors");
    compareChoices("scissors", "paper");
    compareChoices("paper", "rock");
}

const endGame = () => {

    if (humanScore === 3|| computerScore == 3) {
        buttons.forEach(button => {
            button.setAttribute("disabled", true)
        })
        
        const winMessage = "Wow you beat me"
        const loseMessage = "I came out Victorious!"

        message.textContent = humanScore > computerScore ? winMessage : loseMessage

    }
}

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        const choice = e.currentTarget.id
        playRound(choice, getComputerChoice())
        endGame()
    })
})