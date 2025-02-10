// Util Functions

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}



// Useful Variables

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



// Input Functions

function getComputerChoice(inputs=properInputs) {
  const dice = Math.trunc(Math.random() * 3);

  return inputs[dice];
}  

function getHumanChoice(inputs=properInputs) {
  while (true) {
  
    try {
      const userInput = prompt("Choose your move! Rock, Paper, or Scissors?").trim().toLowerCase();

      if (!inputs.includes(userInput)) {
        throw new TypeError();

      } else {
        return userInput;
      }  
      
    } catch {
      alert("Not a valid move! Try again, be sure to spell it correctly.")
    }  
  }  
}  



// Logic Functions

function playRound(humanChoice, computerChoice, matches=possibleMatches) {
  if (humanChoice === computerChoice) {
    return "draw";
  } else {
    return matches[humanChoice][computerChoice];
  }
}

function declareWinner(human, comp) {
  if (human > comp) {
    return "You won the game!";
  } else if (human < comp) {
    return "The computer won, better luck next time!";
  } else {
    return "It's a draw!";
  }
}

function playGame(games=5) {
  let humanScore = 0;
  let computerScore = 0;

  for (let round = 1; round < games + 1; round++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);

    console.log(`The computer has selected "${capitalize(computerChoice)}"`);
    console.log(`You have selected "${capitalize(humanChoice)}"`);

    let message;
    switch (result) {
      case "draw":
        message = "It's a draw!";
        break;

      case "human-win":
        message = "You win!";
        humanScore++;
        break;

      case "computer-win":
        message = "The computer wins...";
        computerScore++;
        break;
    }
    console.log(message);
    console.log(`Current score: computer ${computerScore} | you ${humanScore}`);
  }

  const finalMessage = declareWinner(humanScore, computerScore);
  console.log(finalMessage);
}

playGame();

