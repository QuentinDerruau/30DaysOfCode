let canvas = document.getElementById("matrix");
let ctx = canvas.getContext("2d");

let matrixChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
matrixChars = matrixChars.split("");

let columns = canvas.width / 20;
let drops = [];
for (let i = 0; i < columns; i++) {
  drops[i] = Math.floor(Math.random() * canvas.height);
}

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  ctx.fillStyle = "#0f0";
  ctx.font = "20px monospace";
  for (let i = 0; i < drops.length; i++) {
    let charIndex = Math.floor(Math.random() * matrixChars.length);
    let char = matrixChars[charIndex];
    ctx.fillText(char, i * 30, drops[i] * 30);
    
    if (drops[i] * 30 > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(draw, 10);