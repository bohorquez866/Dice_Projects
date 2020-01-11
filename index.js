function rollDice() {
    var ramdomNumber1 = Math.random();
    ramdomNumber1 = Math.floor(ramdomNumber1 * 6 + 1);

    var ramdomNumber2 = Math.random();
    ramdomNumber2 = Math.floor(ramdomNumber2 * 6 + 1);

    var dice1 = document.querySelector("img"),
        dice2 = document.querySelectorAll("img")[1];

    dice1 = dice1.setAttribute("src", `images/dice${ramdomNumber1}.png`);
    dice2 = dice2.setAttribute("src", `images/dice${ramdomNumber2}.png`);



    if (ramdomNumber1 > ramdomNumber2) {
        document.querySelector("h1").textContent = "Player 1 Wins!";

    } else if (ramdomNumber2 > ramdomNumber1) {
        document.querySelector("h1").textContent = "Player 2 Wins!"

    } else {
        document.querySelector("h1").textContent = "DRAW!"
    }
}

document.querySelector("button").addEventListener("click", rollDice);