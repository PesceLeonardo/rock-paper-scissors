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
      const userInput = prompt("Choose your move! Rock, Paper, or Scissors?").trim();

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

String.prototype.capitalize = function(number=1, allWords=false) {
  const string = String(this);
  if (allWords) {
    return string.split(" ").map(str => str.slice(0, number).toUpperCase() + str.slice(number).toLowerCase()).join(" ");
  } else {
    return string.slice(0, number).toUpperCase() + string.slice(number).toLowerCase()
  }
}

