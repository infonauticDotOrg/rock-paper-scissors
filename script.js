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
        alert("You lose! "+ "Computer Pete chose: "+computerLower);
        computerScore++;
    }else if (humanLower === "rock" && computerLower === "scissors"){
        alert("You win! "+ "Computer Pete chose: "+computerLower);
        humanScore++;
    }else if (humanLower === "rock" && computerLower === "rock"){
        alert("Tie!Play again");
        return 0
    }else if (humanLower === "paper" && computerLower === "rock"){
        alert("You win! " + "Computer chose: "+computerLower);
        humanScore++;
    }else if (humanLower === "paper" && computerLower === "scissors"){
        alert("You lose! "+ "Computer chose: "+computerLower);
        computerScore++;
    }else if (humanLower === "paper" && computerLower === "paper"){
        alert("Tie!Play again");
        return 0
    }else if (humanLower === "scissors" && computerLower === "rock"){
        alert("You lose! "+ "Computer chose: "+computerLower);
        computerScore++;
    }else if (humanLower === "scissors" && computerLower === "paper"){
        alert("You win! "+ "Computer chose: "+computerLower);
        humanScore++;
    }else if (humanLower === "scissors" && computerLower === "scissors"){
        alert("Tie!Play again");
        return 0
    }else{
        alert("Gibberish Alert! The only acceptable options are 'Rock', 'Paper', or 'Scissors'. Try again.")
        return 0
    }
}

function playGame(){
    for (let i=0; i<=4; i++){
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        let repeat = playRound(humanSelection, computerSelection);
        if (repeat === 0){
            i--;
        }
        alert("Current Score - You:"+humanScore+" CPU: "+computerScore) 
    }
    alert("FINAL SCORE - You:"+humanScore+" CPU: "+computerScore) 
}

let humanScore = 0;
let computerScore = 0;

let humanSelection ;
let computerSelection;

playGame()
