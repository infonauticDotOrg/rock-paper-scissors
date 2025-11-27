function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3);
    //console.log(computerChoice);
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

function playRound(human, computer){ //this function is monstrous and needs refactoring
    humanLower = human.toLowerCase();
    computerLower = computer.toLowerCase();
    //console.log(humanLower)
    //console.log(computerLower)
    const results = document.querySelector(".results");
    const scoreP = document.createElement("p");
    if (humanLower === "rock" && computerLower === "paper"){
        //alert("You lose! "+ "Computer chose: "+computerLower);
        scoreP.textContent = "You lose! "+ "Computer chose: "+computerLower
        scoreP.setAttribute("id", "printed")
        results.appendChild(scoreP)
        computerScore++;
        finishRound(humanScore, computerScore)
        return
    }else if (humanLower === "rock" && computerLower === "scissors"){
        scoreP.textContent = "You win! "+ "Computer chose: "+computerLower;
        scoreP.setAttribute("id", "printed")
        results.appendChild(scoreP)
        humanScore++;
        finishRound(humanScore, computerScore)
    }else if (humanLower === "rock" && computerLower === "rock"){
        scoreP.setAttribute("id", "printed")
        results.appendChild(scoreP)
        scoreP.textContent ="Tie!Play again";
        return 0
    }else if (humanLower === "paper" && computerLower === "rock"){
        scoreP.textContent = "You win! " + "Computer chose: "+computerLower;
        scoreP.setAttribute("id", "printed")
        results.appendChild(scoreP)
        humanScore++;
        finishRound(humanScore, computerScore)
    }else if (humanLower === "paper" && computerLower === "scissors"){
        scoreP.textContent ="You lose! "+ "Computer chose: "+computerLower;
        scoreP.setAttribute("id", "printed")
        results.appendChild(scoreP)
        computerScore++;
        finishRound(humanScore, computerScore)
    }else if (humanLower === "paper" && computerLower === "paper"){
        scoreP.textContent ="Tie!Play again";
        scoreP.setAttribute("id", "printed")
        results.appendChild(scoreP)
        return 0
    }else if (humanLower === "scissors" && computerLower === "rock"){
        scoreP.textContent ="You lose! "+ "Computer chose: "+computerLower;
        scoreP.setAttribute("id", "printed")
        results.appendChild(scoreP)
        computerScore++;
        finishRound(humanScore, computerScore)
    }else if (humanLower === "scissors" && computerLower === "paper"){
        scoreP.textContent ="You win! "+ "Computer chose: "+computerLower;
        scoreP.setAttribute("id", "printed")
        results.appendChild(scoreP)
        humanScore++;
        finishRound(humanScore, computerScore)
    }else if (humanLower === "scissors" && computerLower === "scissors"){
        scoreP.textContent ="Tie!Play again";
        scoreP.setAttribute("id", "printed")
        results.appendChild(scoreP)
        return 0
    }else{
        alert("Gibberish Alert! The only acceptable options are 'Rock', 'Paper', or 'Scissors'. Try again.")
        return 0
    }
}

function finishRound(score1, score2){ //my naming should have been better, too many iterations of playerScore, humanScore, cpuScore, computerScore
    let finalCheck = document.querySelector(".results");
    let scoreP = document.createElement("p");
    const check = document.getElementById("printed")
    if (score1 == 5){
        if (check){
            check.remove()
        }
        scoreP.textContent ="YOU WIN THE GAME!"
        scoreP.setAttribute("id", "final")
        finalCheck.appendChild(scoreP)
        humanScore = 0
        computerScore = 0
        let playAgain = document.createElement("p")
        playAgain.textContent = "Choose again to start over"
        playAgain.setAttribute("id", "final")
        finalCheck.appendChild(playAgain)

    }else if (computerScore == 5){
        if (check){
            check.remove()
        }
        scoreP.textContent = "YOU LOSE! :("
        scoreP.setAttribute("id", "final")
        finalCheck.appendChild(scoreP)
        humanScore = 0
        computerScore = 0
        let playAgain = document.createElement("p")
        playAgain.textContent ="Choose again to start over"
        playAgain.setAttribute("id", "final")
        finalCheck.appendChild(playAgain)
    }
}

function playGame(sele){
    humanSelection = sele;
    computerSelection = getComputerChoice();
    const checkFinal = document.getElementById("final")
    playRound(humanSelection, computerSelection);
    if (checkFinal){
        checkFinal.remove()
    }
}

let humanScore = 0;
let computerScore = 0;
let humanSelection ;
let computerSelection;
let playerScore = document.querySelector('.player-score');
let cpuScore = document.querySelector('.cpu-score');
const buttons = document.querySelectorAll("button");
const check = document.getElementById("printed")
const checkFinal = document.getElementById("final")

buttons.forEach((button) =>{
    button.addEventListener("click", () =>{
        const check = document.getElementById("printed")
        const checkFinal = document.getElementById("final")
        const titles = document.getElementById("titles")
        if (checkFinal){
            checkFinal.remove()
        }


        //console.log(button.id)
        if (check){
            check.remove()
        } 
        if (checkFinal){
            checkFinal.remove()
        }
        if (checkFinal){
            checkFinal.remove()
        }
        playGame(button.id);

        playerScore.textContent = humanScore;
        cpuScore.textContent = computerScore;
 
    })
})

