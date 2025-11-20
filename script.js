let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)
function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3);
    console.log(computerChoice);
    if (computerChoice === 1 ){
        return "paper";
    }else if (computerChoice === 2){
        return "scissors";
    }else{
        return "rock";
    }
}

function getHumanChoice(){
   let humanChoice =  prompt("CHOOSE YOUR FIGHTER: Rock, Paper, or Scissors? What will it be?")
   console.log(humanChoice);
   return humanChoice;
}

function playRound(human, computer){
    humanLower = human.toLowerCase();
    computerLower = computer.toLowerCase();
    console.log(humanLower)
    console.log(computerLower)
    if (humanLower === "rock" && computerLower === "paper"){
        alert("You lose!");
        computerScore++;
    }else if (humanLower === "rock" && computerLower === "scissors"){
        alert("You win!");
        humanScore++;
    }else if (humanLower === "rock" && computerLower === "rock"){
        alert("Tie!Play again");
    }else if (humanLower === "paper" && computerLower === "rock"){
        alert("You win!");
        humanScore++;
    }else if (humanLower === "paper" && computerLower === "scissors"){
        alert("You lose!");
        computerScore++;
    }else if (humanLower === "paper" && computerLower === "paper"){
        alert("Tie!Play again");
    }else if (humanLower === "scissors" && computerLower === "rock"){
        alert("You lose!");
        computerScore++;
    }else if (humanLower === "scissors" && computerLower === "paper"){
        alert("You win!");
        humanScore++;
    }else if (humanLower === "scissors" && computerLower === "scissors"){
        alert("Tie!Play again");
    }
    alert(humanSelection + computerSelection)
}
