function getComputerChoice(){
    let cpuChoice = Math.floor(Math.random() * 3);
    console.log(cpuChoice);
    if (cpuChoice == 1 ){
        return "rock"
    }else if (cpuChoice == 2){
        return "paper"
    }else{
        return "scissors"
    }
}
