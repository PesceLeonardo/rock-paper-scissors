// Util Functions

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}



// Input Functions

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

function getHumanChoice() {
  while (true) {

    try {
      const properInputs = ["Rock", "Paper", "Scissors"];
      const userInput = capitalize(prompt("Choose your move! Rock, Paper, or Scissors?").trim());

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

