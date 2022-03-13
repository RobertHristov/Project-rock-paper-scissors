// A function whic returns randomly eather ‘Rock’, ‘Paper’ or ‘Scissors’.
function computerPlay(){
    // A list of values, that will be returned.
    let valuesList = ["Rock", "Paper", "Scissors"];
    // Return randomly value from valuesList.
    return valuesList[Math.floor(Math.random() * 3)];
}
// Tests:
// let result = computerPlay();
// console.log(result);

function playRound(playerSelection, computerSelection){
    let p1 = playerSelection.toLowerCase();
    let p2 = computerSelection.toLowerCase();

    if (p1 == p2){
        return `Both players selected ${p1}. It's a tie!`;
    }
    else if (p1 == "rock"){
        if (p2 == "scissors"){
            return "Rock smashes scissors! You win!";
        }
        else{
            return "Paper covers rock! You lose.";
        }
    }
    else if (p1 == "paper"){
        if (p2 == "rock"){
            return "Paper covers rock! You win!";
        }
        else{
            return "Scissors cuts paper! You lose.";
        }
    }
    else if (p1 == "scissors"){
        if (p2 == "paper"){
            return "Scissors cuts paper! You win!";
        }
        else{
            return "Rock smashes scissors! You lose.";
        }
    }
}