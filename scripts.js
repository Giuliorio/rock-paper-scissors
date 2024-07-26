let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomValue = Math.floor(Math.random() * (9) + 1);
    
    if (randomValue <= 3) return "Rock";
    if (randomValue >= 7) return "Paper";
    return "Scissors";
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