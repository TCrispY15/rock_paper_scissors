// computerPlay() selects a random number from 0 to 2. Each number is assigned a string value of `Rock`, `Paper` or `Scissors`. Which ever numver is randomly selcted the assign string is returned.
function computerPlay() {
    let computer = Math.floor(Math.random() * 3);
    if (computer === 0) {
        return `rock`;
    } else if (computer === 1) {
        return `paper`;
    } else {
        return `scissors`;
    }
}
// playerSelection() prompts player to enter a string value of `Rock`, `Paper` or `Scissors` and returns their string value.
function playerSelection() {
    let playerChoice = prompt(`Please type "Rock", "Paper", or "Scissors" `);
    //Re-assigns playerChoice to lowercase string.
    playerChoice = playerChoice.toLowerCase();
    //If playerChoice isn't `Rock`, `Paper` or `Scissors` return alert asking to type the correct response.
    if (!(playerChoice === `rock` && `paper` && `scissors`)) {
        alert(`Please type a valid answer!`);
    } else {
        //Returns player choices
        return playerChoice;
    }
}

console.log(playerSelection());