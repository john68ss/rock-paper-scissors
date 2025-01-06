const buttons = document.querySelectorAll('.choice-btn');
const compScoreDisplay = document.querySelector('#comp-score');
const playerScoreDisplay = document.querySelector('#player-score');
const results = document.querySelector('.results');
const restart = document.querySelector('#reset-btn');


let playerChoice;

let compScore = playerScore = 0;

buttons.forEach(button => {
    button.addEventListener('click', (e)=>{
        const target = e.currentTarget;
        const playerChoice = target.id;

        playRound(playerChoice, getComputerChoice());

        if(playerScore === 5  || compScore === 5){
            gameOver(playerScore, compScore);
        }
    });
});

restart.addEventListener('click', (e)=>{

    compScore = playerScore = 0;
    buttons[0].disabled = false;
    buttons[1].disabled = false;
    buttons[2].disabled = false;
    scoreDisplay(compScore, playerScore);
    results.textContent = "";
    restart.style.display = 'none';
});

function getComputerChoice(){

   const choices = ["rock", "paper", "scissors"];

   return choices[Math.floor(Math.random() * choices.length)]

}

function playRound(playerSelection, computerSelection){

    restart.style.display  = 'none';
    const computerChoice = document.createElement('span');
    computerChoice.classList.add('compSele');


    const compChoiceToBeDisplayed = computerSelection.toUpperCase().slice(0,1) + computerSelection.slice(1);

    if(playerSelection === computerSelection){
        results.innerHTML = "Computer Chooses: " + compChoiceToBeDisplayed + "<br>It's a Draw!";
        scoreDisplay(compScore, playerScore);

    }

    else if(playerSelection === 'rock' && computerSelection ==='scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection=== 'paper'){
        playerScore++;
        results.innerHTML = "Computer Chooses: " + compChoiceToBeDisplayed + "<br>You Win!";
        scoreDisplay(compScore, playerScore);
    }

    else{
        compScore++;
        results.innerHTML = "Computer Chooses: " + compChoiceToBeDisplayed + "<br>You Lose!";
        scoreDisplay(compScore, playerScore);
    }
    
}

function scoreDisplay(compScore, playerScore){
    compScoreDisplay.textContent = 'Computer Score:' + compScore;
    playerScoreDisplay.textContent = 'Player Score:' + playerScore;
}

function gameOver(playerScore, compScore){
    buttons[0].disabled = true;
    buttons[1].disabled = true;
    buttons[2].disabled = true;


    if(playerScore>compScore){
        results.textContent = "You Win!!!";
    }
    else{
        results.textContent = "You Lose!!!"
    }

    restart.style.display = 'flex';
}