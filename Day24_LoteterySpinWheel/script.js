const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


const colors = ["#FF4136", "#0074D9", "#B10DC9", "#FFDC00", "#01FF70", "#FF851B"];
const labels = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5", "Option 6"];
const numSections = colors.length;
const anglePerSection = (2 * Math.PI) / numSections;


let angle = 0;
let spinning = false;


function draw() {
    
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = Math.min(centerX, centerY) - 10;

  ctx.save();
  ctx.translate(centerX, centerY);
  ctx.rotate(angle);
  
  for (let i = 0; i < numSections; i++) {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, radius, i * anglePerSection, (i + 1) * anglePerSection);
    ctx.closePath();
    ctx.fillStyle = colors[i];
    ctx.fill();


    ctx.save();
    ctx.rotate(i * anglePerSection + anglePerSection / 2);
    ctx.font = "bold 20px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(labels[i], radius * 0.75, 0);
    ctx.restore();
  }

  ctx.restore();
}


function spin() {
  if (!spinning) {
    spinning = true;
    let spinAngle = 4 * Math.PI + Math.random() * (8 * Math.PI);
    let duration = 10000 + Math.random() * 10000;
    let startTime = null;

    function spinAnimation(currentTime) {
      if (!startTime) {
        startTime = currentTime;
      }
      let timeElapsed = currentTime - startTime;
      let progress = timeElapsed / duration;
      if (progress > 1) {
        progress = 1;
      }
      let easeProgress = easeOutQuart(progress);
      angle += easeProgress * (spinAngle - angle);
      draw();
      if (timeElapsed < duration) {
        requestAnimationFrame(spinAnimation);
      } else {
        spinning = false;
      }
    }

    requestAnimationFrame(spinAnimation);
  }
}


function easeOutQuart(x) {
  return 1 - Math.pow(1 - x, 4);
}