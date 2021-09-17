const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', () => {
    play('rock');
    btn1.style.backgroundColor='#fe4646';
    btn2.style.backgroundColor='#AADE87';
    btn3.style.backgroundColor='#AACCFF';
});

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
    play('paper');
    btn1.style.backgroundColor='#FF8080';
    btn2.style.backgroundColor='#8cd25d';
    btn3.style.backgroundColor='#AACCFF';
});

const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
    play('scissors');
    btn1.style.backgroundColor='#FF8080';
    btn2.style.backgroundColor='#AADE87';
    btn3.style.backgroundColor='#6aa5ff';
});


const scorebar = document.querySelector('#scorebar');
const score = document.createElement('div');
scorebar.classList.add('score')
score.textContent = 'W-L-T: 0-0-0';

const message = document.querySelector('#message');
message.classList.add('message');

scorebar.appendChild(score);

const rockPaperScissors = ["rock", "paper", "scissors"];

function computerPlay() {
    let random = Math.floor(Math.random() * rockPaperScissors.length);
    return rockPaperScissors[random];
};

let yourScore = 0;
let computerScore = 0;
let tie = 0;

const restart = document.querySelector('#restart')
restart.addEventListener('click', () => {
    window.location.reload();
});

let img = document.createElement("img")
img.classList = 'computer'
document.getElementById('computer').appendChild(img)
const computer = document.querySelector('#computer')

function play(weapon) {
    let computerSelection = computerPlay();
    let playerSelection = weapon;
    if (computerSelection == 'scissors') {
        img.src = 'images/scissors.png';
        img.style.cssText = "background-color:#AACCFF"
    } else if (computerSelection == 'rock') {
        img.src = 'images/rock.png';
        img.style.cssText = "background-color:#FF8080"
    } else if (computerSelection == 'paper') {
        img.src = 'images/paper.png';
        img.style.cssText = "background-color:#AADE87"
    }
    if (computerSelection == playerSelection) {
        tie = ++tie;
        score.textContent = `W-L-T: ${yourScore}-${computerScore}-${tie}`;
        message.textContent = 'Tie!'
    } else if (
        (computerSelection == "rock" && playerSelection == "scissors") || (computerSelection == "paper" && playerSelection == "rock") || (computerSelection == "scissors" && playerSelection == "paper")
    ) {
        computerScore = ++computerScore;
        score.textContent = `W-L-T: ${yourScore}-${computerScore}-${tie}`;
        message.textContent = 'You lose!'
    } else if (
        (computerSelection == "scissors" && playerSelection == "rock") || (computerSelection == "rock" && playerSelection == "paper") || (computerSelection == "paper" && playerSelection == "scissors")
    ) {
        yourScore = ++yourScore;
        score.textContent = `W-L-T: ${yourScore}-${computerScore}-${tie}`;
        message.textContent = 'You win!';
    };
    if (computerScore == 5 && yourScore < 5) {
        message.textContent = 'Game over. You lost!';
        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
    } else if (yourScore == 5 && computerScore < 5) {
        message.textContent = 'Congratulations, you won!'
        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
    }
};