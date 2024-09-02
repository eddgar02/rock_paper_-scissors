function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 100) % 3;
    if (randomNumber === 0) {
        return 'rock';
    } else if (randomNumber === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

let humanScore = 0;
let computerScore = 0;
let liveScore = document.querySelector(".result")
function playRound(human) {
    let computer = getComputerChoice();

    if (human === computer) {
        //No change
        liveScore.textContent = "It's a tie!";

    } else if (
        (computer === 'rock' && human === 'scissors') ||
        (computer === 'paper' && human === 'rock') ||
        (computer === 'scissors' && human === 'paper')
    ) {
        computerScore++;
        liveScore.textContent = "Computer won this round!";

    } else {
        humanScore++;
        liveScore.textContent = "You won this round!";
    }
    liveScore.textContent += `     You: ${humanScore} v.s Computer: ${computerScore}`;

    // Check for game over condition
    if (humanScore === 5) {
        liveScore.textContent = `YOU WON: GAME OVER 
        FINAL SCORE: You: ${humanScore} v.s Computer: ${computerScore}`;
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        liveScore.textContent = `COMPUTER WON: GAME OVER 
        FINAL SCORE: You: ${humanScore} v.s Computer: ${computerScore}`;
        computerScore = 0;
        humanScore = 0;
    }
}

//NO LONGER PLAYING FIVE ROUNDS NOW PLAYING UNTIL SOMEONE GETS 5PTS
// for(let i =0;i< 5;i++){
//     let message = playRound();
//     console.log(message);
// }

document.querySelector("#rock").addEventListener("click", () => playRound("rock"));
document.querySelector("#paper").addEventListener("click", ()  =>playRound("paper"));
document.querySelector("#scissors").addEventListener("click",() => playRound("scissors"));


