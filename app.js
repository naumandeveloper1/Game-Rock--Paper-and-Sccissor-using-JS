//initialize the button
const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let computerChoice;
let userChoice;
let result;
possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}));


function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumber);
    if (randomNumber === 1) {
        computerChoice = 'rock';
    }
    if (randomNumber === 2) {
        computerChoice = 'paper';
    }
    if (randomNumber === 3) {
        computerChoice = 'scissors';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'It is a draw 🙄🙄 !';
    }
    if (computerChoice === 'rock' && userChoice === 'paper' || computerChoice === 'scissors' && userChoice === 'rock' || computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'You win 😍😍';
    }
    if (computerChoice === 'rock' && userChoice === 'scissors' || computerChoice === 'scissors' && userChoice === 'paper' || computerChoice === 'paper' && userChoice === 'rock') {
        result = 'You lose 😥😥.';
    }
    resultDisplay.innerHTML = result;
}

