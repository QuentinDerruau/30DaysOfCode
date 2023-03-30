const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const numDrops = 100;
const drops = [];

function init() {
  for (let i = 0; i < numDrops; i++) {
    drops.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
    length: 10 + Math.random() * 20,
      speed: 5 + Math.random() * 1,
    });
  }
}

function drawDrop(drop) {
  ctx.beginPath();
  ctx.moveTo(drop.x, drop.y);
  ctx.lineTo(drop.x, drop.y + drop.length);
  ctx.strokeStyle = "rgba(68, 161, 255, 0.5)";
  ctx.lineWidth = 2;
  ctx.lineCap = "round";
  ctx.stroke();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drops.forEach(function (drop) {
    drop.y += drop.speed;
    if (drop.y > canvas.height) {
      drop.y = -drop.length;
    }
    drawDrop(drop);
  });


  requestAnimationFrame(draw);
}

init();
draw();