// Play game function that plays 5 games and declares the winner
function playGame() {

    // Set score initial values
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) return "rock";
    else if (choice === 1) return "paper";
    else return "scissors";
}

    // Function for playing a round
function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!"
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        return `You won! ${playerChoice} beats ${computerChoice}!`
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        return `You won! ${playerChoice} beats ${computerChoice}!`;
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        return `You won! ${playerChoice} beats ${computerChoice}!`;
    } else {
        computerScore++;
        return `You lost! ${computerChoice} beats ${playerChoice}!`;
    }
}

while (humanScore < 5 && computerScore < 5) {
    let playerChoice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
    let computerChoice = getComputerChoice();
    console.log(playRound(playerChoice, computerChoice));
    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
}

if (humanScore === 5) {
    console.log("Congratulations! You won the game!");
} else {
    console.log("Sorry! The computer won the game!");
}


}

console.log(playGame());
