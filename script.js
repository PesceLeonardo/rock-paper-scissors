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

