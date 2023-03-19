var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Variables
var birdX = canvas.width / 4;
var birdY = canvas.height / 2;
var birdDY = 0;
var gravity = 0.1;
var jumpStrength = -4;
var pipeWidth = 50;
var pipeGap = 100;
var pipeX = canvas.width;
var pipe1Y = getRandomInt(canvas.height - 200);
var pipe2Y = pipe1Y + pipeGap;
var score = 0;

// Event listeners
document.addEventListener("keydown", function(event) {
    if (event.keyCode === 32) { // space key
        birdDY = jumpStrength;
    }
});

// Functions
function drawBird() {
    ctx.beginPath();
    ctx.arc(birdX, birdY, 10, 0, Math.PI * 2);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();
}

function updateBird() {
    birdDY += gravity;
    birdY += birdDY;
}

function drawPipes() {
    ctx.fillStyle = "green";
    ctx.fillRect(pipeX, 0, pipeWidth, pipe1Y);
    ctx.fillRect(pipeX, pipe2Y, pipeWidth, canvas.height - pipe2Y);
}

function updatePipes() {
    pipeX -= 2;
    if (pipeX < -pipeWidth) {
        pipeX = canvas.width;
        pipe1Y = getRandomInt(canvas.height - 200);
        pipe2Y = pipe1Y + pipeGap;
    }
}

function drawScore() {
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText("Score: " + score, 10, 30);
}

function updateScore() {
    if (pipeX === birdX) {
        score++;
    }
}

function checkCollision() {
    if (birdY < 0 || birdY > canvas.height) {
        gameOver();
    }
    if (birdX + 10 > pipeX && birdX - 10 < pipeX + pipeWidth) {
        if (birdY - 10 < pipe1Y || birdY + 10 > pipe2Y) {
            gameOver();
        }
    }
}

function gameOver() {
    clearInterval(intervalId);
    alert("Game over. Your score was: " + score);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Game loop
var intervalId = setInterval(function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBird();
    updateBird();
    drawPipes();
    updatePipes();
    drawScore();
    updateScore();
    checkCollision();
}, 10);