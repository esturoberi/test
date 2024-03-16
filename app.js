let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById("playerScore"); 
const computerScore_span = document.getElementById("computerScore"); 
const scoreBoard_div = document.querySelector(".score-Board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");



function getComputerChoice() {
    const choices = ['r', 'p', 's'];
   const randomNumber = Math.floor(Math.random()*3);
   return choices [randomNumber]; 
}
function convertToWord(letter) {
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return " Scissors";
}
function win(playerChoice, computerChoice) {
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(playerChoice) + " beats " + convertToWord(computerChoice) + ". You Win!"
}
function convertToWord(letter) {
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return " Scissors";
}
function lose(playerChoice, computerChoice) {
    computerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(playerChoice) + " loses to " + convertToWord(computerChoice) + ".You loss!"
}
function Draw() {
    console.log("draw");
}
console.log(getComputerChoice());

function game(playerChoice) {
 const computerChoice = getComputerChoice();
 switch (playerChoice + computerChoice) {
case "rs":
case "pr":
case "sp":
        win(playerChoice, computerChoice);
break;
case "rp":
case "ps":
case "sr":
     lose(playerChoice, computerChoice);           
break;
case "rr":
case "pp":
case "ss":
    Draw(playerChoice, computerChoice);
break;
 }
}

function main() {
rock_div.addEventListener('click', function() {
    game("r");
})

paper_div.addEventListener('click', function() {
    game("p");
})

scissors_div.addEventListener('click', function() {
    game("s");
})
}

main();