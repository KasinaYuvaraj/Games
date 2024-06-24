let humanScore = 0;
let humanChoice;
let computerScore = 0;
let computerChoice;
let gameOver = 1;
function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3);
    console.log(computerChoice);
    return computerChoice;
}
function getHumanChoice(max) {
    return max;
}
function playRound(getHumanChoice, getComputerChoice) {
        humanChoice = getHumanChoice;
        computerChoice = getComputerChoice;
        if (humanChoice == 0 && computerChoice == 1 && playGame() == 1 ) {
            document.getElementById("computer-score").innerHTML = ++computerScore;
            alert("COMPUTER CHOICE WAS PAPER🖐")
        } else if (humanChoice == 1 && computerChoice == 2 && playGame() == 1 ) {
            document.getElementById("computer-score").innerHTML = ++computerScore;
            alert("COMPUTER CHOICE WAS SCISSORS✌")
        } else if (humanChoice == 2 && computerChoice == 0 && playGame() == 1 ) {
            document.getElementById('computer-score').innerHTML = ++computerScore;
            alert("COMPUTER CHOICE WAS ROCK🤜")
        } else if (humanChoice == computerChoice && playGame() == 1 ) {
            alert("DRAW")
        } else if (humanChoice == 1 && computerChoice == 0 && playGame() == 1 ) {
            document.getElementById('human-score').innerHTML == ++humanScore;
            alert("COMPUTER CHOICE ROCK🤜")
        } else if (humanChoice == 2 && computerChoice == 1 && playGame() == 1 ) {
            document.getElementById('human-score').innerHTML = ++humanScore;
            alert("COMPUTER CHOICE WAS PAPER🖐")
        } else if (humanChoice == 0 && computerChoice == 2 && playGame() == 1 ) {
            document.getElementById('human-score').innerHTML = ++humanScore;
            alert("COMPUTER CHOICE WAS SCISSORS✌")
        } else {
            alert("GAME OVER!")
        }
        playGame()
}
function playGame() {
    if (humanScore >= 3) {
        document.getElementById("human-score").innerHTML = "WIN";
        document.getElementById("computer-score").innerHTML = "LOSE"
        document.getElementById("change").innerHTML = "REFRESH TO PLAY AGAIN"
        return gameOver = 0;
    } else if (computerScore >= 3 ) {
        document.getElementById("computer-score").innerHTML = "WIN"
        document.getElementById("human-score").innerHTML = "LOSE";
        document.getElementById("change").innerHTML = "REFRESH TO PLAY AGAIN"
        return gameOver = 0;
    } else {
        return gameOver = 1;
    }
}
