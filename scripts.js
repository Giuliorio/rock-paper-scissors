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

function playRound(humanChoice, computerChoice) {
    const winMessage = "Great job, you won the round!"
    const loseMessage = "Sorry, you lost the round :("

    console.log(computerChoice)

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