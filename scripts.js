function getComputerChoice() {
    const randomValue = Math.floor(Math.random() * (9) + 1);
    
    if (randomValue <= 3) return "Rock";
    if (randomValue >= 7) return "Paper";
    return "Scissors";
}
