function getComputerChoice() {
  const dice = Math.trunc(Math.random() * 3);
  let move;

  switch (dice) {
    case 0:
      move = "Rock";
      break;

    case 1:
      move = "Paper";
      break;

    case 2:
      move = "Scissors";
      break;
  }
  return move;
}

console.log(getComputerChoice());

function getHumanChoice() {
  while (true) {

    try {
      const properInputs = ["Rock", "Paper", "Scissors"];
      const userInput = prompt("Choose your move! Rock, Paper, or Scissors?");

      if (!properInputs.includes(userInput)) {
        throw TypeError;

      } else {
        return userInput;
      }
      
    } catch {
      alert("Not a valid move! Try again, be sure to spell it correctly.")
    }
  }
}

console.log(getHumanChoice());