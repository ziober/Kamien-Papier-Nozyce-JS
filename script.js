const gameSummary = {
    gameNumbers: 0,
    wins: 0,
    loses: 0,
    draws: 0

}

const actualGame = {
    playerHand: "",
    computerHand: "",
    playerHandHTML: ""
}

const hands = [...document.querySelectorAll('.select i')];
//First function
function handSelection() {

    actualGame.playerHand = this.dataset.option
    hands.forEach(hand => hand.style.boxShadow = "");
    this.style.boxShadow = "0 0 0 4px darkgray"


}

function computerChoice() {

    return hands[Math.floor(Math.random() * 3)].dataset.option
}

function checkResult(player, computer) {

    if (player == computer) {
        return "draw"
    } else if ((player === "paper" && computer === "rock") || (player === "rock" && computer === "scissors" || (player === "scissors" && computer === "paper"))) {
        return "win"
    } else {
        return "loss"
    }

}
//Points Publishing
function publishResult(player, computer, result) {
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="computer-choice"]').textContent = computer;
    document.querySelector("p.numbers span").textContent = ++gameSummary.gameNumbers;
    if (result === "win") {
        document.querySelector("p.wins span").textContent = ++gameSummary.wins;
        document.querySelector('[data-summary="who-won"]').textContent = "You Won !"
        document.querySelector('[data-summary="who-won"]').style.color = "green"

    } else if (result === "loss") {
        document.querySelector("p.loses span").textContent = ++gameSummary.loses;
        document.querySelector('[data-summary="who-won"]').textContent = "You Lose !"
        document.querySelector('[data-summary="who-won"]').style.color = "red"

    } else {
        document.querySelector("p.draws span").textContent = ++gameSummary.draws;
        document.querySelector('[data-summary="who-won"]').textContent = "Draw"
        document.querySelector('[data-summary="who-won"]').style.color = "orange"
    }


}

function endGame() {
    document.querySelector(`[data-option="${actualGame.playerHand}"]`).style.boxShadow = "";
    actualGame.playerHand = "";


}
// control function
function startGame() {
    if (!actualGame.playerHand) {
        return alert("Pick Your option!");
    }
    actualGame.computerHand = computerChoice();
    const gameResult = checkResult(actualGame.playerHand, actualGame.computerHand)
    publishResult(actualGame.playerHand, actualGame.computerHand, gameResult);
    endGame()
}
hands.forEach(hand => hand.addEventListener("click", handSelection))

document.querySelector(".start").addEventListener("click",
    startGame)