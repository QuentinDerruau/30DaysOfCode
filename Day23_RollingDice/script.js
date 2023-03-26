function rollDice() {
    
    var dice = document.getElementById("dice");
    var result = Math.floor(Math.random() * 6) + 1;
    dice.innerHTML = "";
    dice.classList.add("rolling");
    setTimeout(function() {
        dice.innerHTML = result;
        dice.classList.remove("rolling");
    }, 400);
}