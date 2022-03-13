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

// A function that returns the outcome of a played round.
function playRound(playerSelection, computerSelection){
    // Make the input case insensitive.
    let p1 = playerSelection.toLowerCase();
    let p2 = computerSelection.toLowerCase();

    // Check if player 1 or player 2 wins and return an informative string.
    if (p1 == p2){
        return `Both players selected ${p1}. It's a tie!`;
    }
    else if (p1 == "rock"){
        if (p2 == "scissors"){
            return "You win!";
        }
        else{
            return "You lose.";
        }
    }
    else if (p1 == "paper"){
        if (p2 == "rock"){
            return "You win!";
        }
        else{
            return "You lose.";
        }
    }
    else if (p1 == "scissors"){
        if (p2 == "paper"){
            return "You win!";
        }
        else{
            return "You lose.";
        }
    }
}

// The main function which plays the game. 
function game(){
    // Result counting variables.
    let playerResult = 0;
    let computerResult = 0;

    // A loop which will prompt for five games and will display the result after each game in the console. This loop is 
    // also used for incrementing the counting variables.
    for (let i = 0; i < 5; i++){
        let player = window.prompt("Your turn: ");
        let computer = computerPlay();
        let round = playRound(player, computer);

        if (round == "You win!"){
            playerResult++;
        }
        else if (round == "You lose."){
            computerResult++;
        }

        console.log(round);
    }

    // Conditional logic for deciding who is the winner of the game.
    if(playerResult > computerResult){
        return "You win!";
    }
    else{
        return "Computer wins!";
    }
}
// Start the game itself which will alert the winner at the end.
window.alert(game());