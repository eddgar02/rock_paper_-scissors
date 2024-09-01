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

function getHumanChoice() {
    let choice = prompt("Do you choose rock, paper or scissors?");
    return choice;
}



function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound() {
        let computer = getComputerChoice();
        let human = getHumanChoice().toLowerCase;

        if (human === computer) {
            return "Draw";
        } else if (
            (computer === 'rock' && human === 'scissors') ||
            (computer === 'paper' && human === 'rock') ||
            (computer === 'scissors' && human === 'paper')
        ) {
            computerScore++;
            return "You Lost Buddy.";
        } else {
            humanScore++;
            return "You won!";
        }
    }

    for(let i =0;i< 5;i++){
        let message = playRound();
        console.log(message);
    }

    if(computerScore > humanScore){
        return "You lost to a computer! Don't worry."
    } else {
        return "Congrats you beat a computer";
    }
}

console.log(playGame());