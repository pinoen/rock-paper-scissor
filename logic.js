let options = ['rock', 'paper', 'scissor'];
    let playerCount = 0;
    let computerCount = 0;
    let tieCount = 0;

let userClick = document.querySelector('body');

let playerSelection;
let computerSelection;

function checkWinner(human, machine){
    if(human === 'rock' && machine === 'scissor') return 'You win! Rock beats scissor';
    else if(human === 'paper' && machine === 'rock') return 'You win! Paper beats rock';
    else if(human === 'scissor' && machine === 'paper') return 'You win! Scissor beats paper!';
    else if(human === machine) return 'This is a tie!'
    else return 'You lose! The computer won!';             
}


function playRound(){
    const computer = computerSelection;
    const player = playerSelection;
    const winner = checkWinner(player, computer);
    // console.log(winner);
    return winner;
}

userClick.addEventListener('click', (e)=>{
    e.preventDefault();
    playerSelection = e.target.id;
    computerSelection = options[Math.floor(Math.random() * options.length)];

    let pUserChoice = document.querySelector('#userChoice');
    pUserChoice.textContent += ' ' + playerSelection;

    let pComputerChoice = document.querySelector('#computerChoice');
    pComputerChoice.textContent += ' ' + computerSelection;
    
    let pWinner = document.querySelector('#result');
    pWinner.textContent += ' ' + playRound();

    let result = playRound();
    if(result === 'This is a tie!') tieCount++; 
    else if(result === 'You lose! The computer won!') computerCount++;
    else playerCount++;

    let winner = document.querySelector('#winner');
    if(playerCount === 5 || computerCount === 5 || tieCount === 5){
        winner.textContent = `
            Player points: ${playerCount}.
            Computer points: ${computerCount}.
            Ties: ${tieCount}.
            `
    }  
});
