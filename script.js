// A function whic returns randomly eather ‘Rock’, ‘Paper’ or ‘Scissors’.
function computerPlay(){
    // A list of values, that will be returned.
    let valuesList = ["Rock", "Paper", "Scissors"];
    // Return randomly value from valuesList.
    return valuesList[Math.floor(Math.random() * 3)];
}
// let result = computerPlay();
// console.log(result);