function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (!["rock", "paper", "scissors"].includes(playerSelection)) {
    return "Invalid input. Please try again with a valid choice.";
  }

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Rock, Paper, or Scissors?");
    const computerSelection = getComputerChoice();
    const roundResult = playRound(playerSelection, computerSelection);
    console.log(roundResult);

    if (roundResult.startsWith("You Win!")) {
      playerScore++;
    } else if (roundResult.startsWith("You Lose!")) {
      computerScore++;
    }
  }

  if (playerScore > computerScore) {
    console.log(`You win the game! Final score: ${playerScore} - ${computerScore}`);
  } else if (playerScore < computerScore) {
    console.log(`You lose the game! Final score: ${playerScore} - ${computerScore}`);
  } else {
    console.log(`It's a tie! Final score: ${playerScore} - ${computerScore}`);
  }
}