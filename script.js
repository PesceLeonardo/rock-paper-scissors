// Global Variables

// DOM Elements

const buttons = document.querySelectorAll("#buttons .button");
const roundResultParagraph = document.querySelector("#result-paragraph");

const humanScoreSpan = document.querySelector("#human");
const computerScoreSpan = document.querySelector("#computer");

const computerMove = document.querySelector("#computer-move");
let humanMove = document.querySelector("#human-move");

const humanChoiceAndGameEndText = document.querySelector("#human-choice");

const playAgainButton = document.querySelector("#reset");

// Logic Variables

let game = true

const properInputs = ["rock", "paper", "scissors"];

const possibleMatches = {
  rock: {
    paper: "computer-win",
    scissors: "human-win"
  },
  paper: {
    rock: "human-win",
    scissors: "computer-win"
  },
  scissors: {
    rock: "computer-win",
    paper: "human-win"
  }
};

let humanScore = 0;
let computerScore = 0;

let userInput;

let round = 0;



// Input Functions

function getComputerChoice(inputs=properInputs) {
  const dice = Math.trunc(Math.random() * 3);

  return inputs[dice];
}  



// Logic Functions

// Round Result

function playRound(humanChoice, computerChoice, matches=possibleMatches) {
  if (humanChoice === computerChoice) {
    return "draw";
  } else {
    return matches[humanChoice][computerChoice];
  }
}

// Game Result

function declareWinner(humanPoints, computerPoints) {
  if (humanPoints > computerPoints) {
    return "You won the game! 🏆";
  } else if (humanPoints < computerPoints) {
    return "The computer won, better luck next time! 💥";
  } else {
    return "It's a draw! 🤝";
  }
}

// Determines text of Round Result

function roundResults(result) {
  let text;
  switch (result) {
    case "draw":
      text = "It's a draw!"
      break;
      
      case "human-win":
        text = "You win! 🎉";
        humanScore++;
      break;

    case "computer-win":
      text = "The computer wins... ❌";
      computerScore++;
      break;
  }
  round++;
  return text;
}

// Reset Function

function playAgain() {
  game = true;
  humanScore = 0;
  computerScore = 0;
  round = 0;
  userInput = null;
  humanChoiceAndGameEndText.innerHTML = 'You chose <span id="human-move">a move</span>!';
  humanMove = document.querySelector("#human-move");
}



// Main Game Function

buttons.forEach(btn => {
  btn.addEventListener("click", function(e) {
    if (game) {
      const computerInput = getComputerChoice();
      userInput = btn.id;

      computerMove.textContent = computerInput;
      humanMove.textContent = userInput;

      // Round
      const result = playRound(userInput, computerInput);
      roundResultParagraph.textContent = roundResults(result);

      humanScoreSpan.textContent = humanScore;
      computerScoreSpan.textContent = computerScore;

      if (round >= 5) {
        const winnerText = declareWinner(humanScore, computerScore);
        humanChoiceAndGameEndText.textContent = winnerText;
        game = false;
      }
    }
  })
});

playAgainButton.addEventListener("click", playAgain);