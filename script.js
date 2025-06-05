function getcomputerchoice() {
    const rand= Math.random();
    if(rand< 1/3) {
        return "rock";
    } else if (rand < 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
}

function gethumanchoice(){
    let choice= prompt ("Rock, Paper or Scissors?");
    return choice.toLowerCase().trim();
}

let humanscore=0;
let computerscore=0;

function playRound(human,computer) {
    if(human===computer){
        return "it's a tie!";
    }

    if(
         (human==="rock" && computer==="scissors") ||
         (human==="scissors" && computer==="paper") ||
         (human==="paper" && computer==="rock")

     )    {
        humanscore++;
        return "You win this round!";
     } else {
        computerscore++;
        return "Computer wins this round!";
     }

}

function playgame(){
    for ( let i=1; i<=5; i++) {
        const humanselection= gethumanchoice();
        const computerselection= getcomputerchoice();
        console.log(`\nRound: ${i}`);
        console.log(`You chose:${humanselection}`);
        console.log(`Computer chose:${computerselection}`);
        playRound(humanselection,computerselection);
        console.log(`Score = You:${humanscore}, Computer: ${computerscore}`);
    }
    console.log(`\nFinal Score:\nYou:${humanscore}, Computer:${computerscore}`);
    if(humanscore===computerscore){
        console.log(`It's a tie!`);
    } else if (humanscore>computerscore) {
        console.log(`You win!`);
    } else {

    console.log(`You lose :(`)
        
    }
    
}

playgame();