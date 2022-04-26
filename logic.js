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
    let newLi = document.createElement('li');
    let newText = document.createElement('span');
    pUserChoice.appendChild(newLi);
    pUserChoice.appendChild(newText);
    newText.textContent += ' ' + playerSelection;

    let pComputerChoice = document.querySelector('#computerChoice');
    let newLiPc = document.createElement('li');
    let newTextPc = document.createElement('span');
    pComputerChoice.appendChild(newLiPc);
    pComputerChoice.appendChild(newTextPc);
    newTextPc.textContent += ' ' + computerSelection;
    
    let pWinner = document.querySelector('#result');
    let newLiRound = document.createElement('li');
    let newTextRound = document.createElement('span');
    pWinner.appendChild(newLiRound);
    pWinner.appendChild(newTextRound);
    newTextRound.textContent += ' ' + playRound();

    let playAgain = document.querySelector('#playAgain');
    playAgain.addEventListener('dblclick', ()=>{
        newText.textContent = '';
        newTextPc.textContent = '';
        newTextRound.textContent = '';
        final.textContent = '';
        winner.textContent = '';
        playerCount = 0;
        computerCount = 0;
        tieCount = 0;
        playAgain.style.display = 'none';
    })



    let result = playRound();
    if(result === 'This is a tie!') tieCount++; 
    else if(result === 'You lose! The computer won!') computerCount++;
    else playerCount++;

    let winner = document.querySelector('#winner');
    let final = document.querySelector('#final');
    if(playerCount === 5 || computerCount === 5 || tieCount === 5){
        playAgain.style.display = 'flex';
        if(playerCount > computerCount && playerCount > tieCount) {
            final.textContent = 'You win! Congrats!';
        } else if(computerCount > playerCount && computerCount > tieCount){
            final.textContent = 'Computer win! Keep trying!';
        } else {
            final.textContent = 'It looks like there were more ties!';
        }  
        winner.textContent = `
            Player points: ${playerCount}.
            Computer points: ${computerCount}.
            Ties: ${tieCount}.
            `
    }   
});





