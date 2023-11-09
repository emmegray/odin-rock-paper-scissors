// SCORE

let playerScore = 0;
let computerScore = 0;
let roundWinner = "";

// GAME

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    roundWinner = "Tie"
  }
  if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock")
  ) {
      playerScore++
      roundWinner = "Player"
  }
  if (
    (computerSelection === "Rock" && playerSelection === "Scissors") ||
    (computerSelection === "Scissors" && playerSelection === "Paper") ||
    (computerSelection === "Paper" && playerSelection === "Rock")
  ) {
      computerScore++
      roundWinner = "Computer"
  }
  updateScoreMessage(roundWinner, playerSelection, computerSelection)
}

function getRandomChoice() {
  let randomNumber = Math.floor(Math.random() * 3)
  switch (randomNumber) {
    case 0:
      return "Rock"
    case 1:
      return "Paper"
    case 2:
      return "Scissors"
  }
}

function isGameOver() {
  return playerScore === 5 || computerScore === 5
}

const scoreInfo = document.getElementById("scoreInfo");
const scoreMessage = document.getElementById("scoreMessage");
const playerScorePara = document.getElementById("playerScore");
const computerScorePara = document.getElementById("computerScore");
const playerSign = document.getElementById("playerSign");
const computerSign = document.getElementById("computerSign");
const rockBtn = document.getElementById("Rock");
const paperBtn = document.getElementById("Paper");
const scissorsBtn = document.getElementById("Scissors");
const endgameMsg = document.getElementById("endgameMsg");
const restartBtn = document.getElementById("restartBtn");

rockBtn.addEventListener("click", () => handleClick("Rock"));
paperBtn.addEventListener("click", () => handleClick("Paper"));
scissorsBtn.addEventListener("click", () => handleClick("Scissors"));
restartBtn.addEventListener("click", restartGame);

function handleClick(playerSelection) {
  if (isGameOver()) {
    setFinalMessage()
  }
  const computerSelection = getRandomChoice();
  playRound(playerSelection, computerSelection);
  updateChoices(playerSelection, computerSelection);  
  updateScore()
}

function updateChoices(playerSelection, computerSelection) {
  switch (playerSelection) {
    case "Rock":
      playerSign.textContent = "Rock"
      break
    case "Paper":
      playerSign.textContent = "Paper"
      break
    case "Scissors":
      playerSign.textContent = "Scissors"
      break
  }

  switch (computerSelection) {
    case "Rock":
      computerSign.textContent = "Rock"
      break
    case "Paper":
      computerSign.textContent = "Paper"
      break
    case "Scissors":
      computerSign.textContent = "Scissors"
      break;
  }
  
}

function updateScore() {
  if (roundWinner === "Tie") {
    scoreInfo.textContent = "It's a tie!"
  } else if (roundWinner === "Player") {
    scoreInfo.textContent = "You won!"
  } else if (roundWinner === "Computer") {
    scoreInfo.textContent = "You lost :c"
  }

  playerScorePara.textContent = `Player: ${playerScore}`
  computerScore.textContent = `Computer: ${computerScore}`
}

function updateScoreMessage(winner, playerSelection, computerSelection) {
  if (winner === "Player") {
    scoreMessage.textContent = `${playerSelection} beats ${computerSelection}`
    return
  }
  if (winner === "Computer") {
    scoreMessage.textContent = `${playerSelection} is beaten by ${computerSelection}`
    return    
  }
  scoreMessage.textContent = `${playerSelection} ties with ${computerSelection}`
}

function setFinalMessage() {
  return playerScore > computerScore
  ? (endgameMsg.textContent = "You Won!")
  : (endgameMsg.textContent = "You lost :c")
}

function restartGame() {
  playerScore = 0
  computerScore = 0
  scoreInfo.textContent = "Choose your symbol and let's fight the computer!"
  playerScorePara.textContent = "Player: 0"
  computerScorePara.textContent = "Computer: 0"
  playerSign.textContent = "?"
  computerSign.textContent = "?"
}