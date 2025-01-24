console.log("#### ROCK PAPER SCISSORS ####\n");
function getComputerChoice() {
    const choice = Math.floor(Math.random() * (3 - 0) + 0);
    return choice == 0 ? "rock" : choice == 1 ? "paper" : "scissors";
}

function getHumanChoice() {
    const choice = prompt("What will you choose?").trim().toLowerCase();
    return choice;
}

function playGame() {
    function playRound(humanChoice, computerChoice) {
        let endGameMsg = "";
        if (humanChoice === computerChoice) endGameMsg = `Nobody wins, both picked ${humanChoice}.`;
        else {
            const result = humanChoice + computerChoice;
            switch (result) {
                case 'rockscissors':
                case 'paperrock':
                case 'scissorspaper':
                    endGameMsg = `You win, you picked ${humanChoice} and computer picked ${computerChoice}.`;
                    humanScore++;
                    break;
                default:
                    endGameMsg = `You lose, you picked ${humanChoice} and computer picked ${computerChoice}.`;
                    computerScore++;
                    break;
            }
        }
        return endGameMsg;
    }

    let humanScore = 0;
    let computerScore = 0;

    const ROUNDS = 5;
    for (let round = 0; round < ROUNDS; round++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
    }

    return `Final score: Human: ${humanScore}, Computer: ${computerScore}`
}