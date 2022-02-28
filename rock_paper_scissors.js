// Function returns a random number from 0 to 2, each number is then assigned to a string value and returned the computer's random play.
function computerPlay(){
  let computer = Math.floor(Math.random() * 3);
  
  if (computer === 0){
    return `rock`;
  } else if (computer === 1){
    return `paper`;
  } else {
    return `scissors`;
  }
}
//playSelection() prompts player to enter a string containing rock, paper, or scissors. Then converts it to a lower case string. If the string doesnt match they are alerted to change their asnwer.
function playerSelection(){
  let playerChoice = prompt(`Please enter rock, paper or scissors`);
  playerChoice = playerChoice.toLowerCase();

  switch(playerChoice){
    case `rock`:
    return playerChoice;
    break;

    case `paper`:
    return playerChoice;
    break;

    case `scissors`:
    return playerChoice;
    break;

    default:
    alert(`${playerChoice}, isn't a valid answer. Please type either rock, paper, or scissors`);
  }
}

//These variables are meant to keep track of scoring and round number
let computerScore = 0;
let playerScore = 0;
let gameRounds = 0;
//gameOn() compares the values returned from the first two functions and returns a winner via a confirmation alert.
function gameOn(){
  // These variables return the values from the above funtions
let computer = computerPlay();
let player = playerSelection();

  if((player) === `rock` && (computer) === `scissors`){
    gameRounds ++;
    playerScore ++;
    alert(`You won ${player}, beats ${computer}`)
  } else if((player) === `rock` && (computer) === `rock`){
    gameRounds ++;
    alert(`It's a draw you've both selected ${player}`) 
  } else if((player) === `rock` && (computer) === `paper`){
    gameRounds ++;
    computerScore ++;
    alert(`You lose, ${player}, beaten by ${computer}`);
  } else   if((player) === `paper` && (computer) === `rock`){
    gameRounds ++;
    playerScore ++;
    alert(`You won ${player}, beats ${computer}`)
  } else if((player) === `paper` && (computer) === `paper`){
    gameRounds ++;
    alert(`It's a draw you've both selected ${player}`) 
  } else if((player) === `paper` && (computer) === `scissors`){
    gameRounds ++;
    computerScore ++;
    alert(`You lose, ${player}, beaten by ${computer}`);
  } else   if((player) === `scissors` && (computer) === `paper`){
    gameRounds ++;
    playerScore ++;
    alert(`You won ${player}, beats ${computer}`)
  } else if((player) === `scissors` && (computer) === `scissors`){
    gameRounds ++;
    alert(`It's a draw you've both selected ${player}`) 
  } else if((player) === `scissors` && (computer) === `rock`){
    gameRounds ++;
    computerScore ++;
    alert(`You lose, ${player}, beaten by ${computer}`);
  }
}
/*This function isn't working how I want it to. */
function letsPlay(){
  for(let i = 1; i < 5; i++){
    if(i <= 5){
      gameOn();
    }
  }
}

letsPlay();

console.log(gameRounds);
console.log(playerScore);
console.log(computerScore);