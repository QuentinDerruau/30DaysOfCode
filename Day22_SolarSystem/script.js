const sunRadius = 50;
const sunColor = "#ffd700";
const planetColors = ["#00bfff", "#ff6347", "#ff7f50", "#da70d6", "#d2b48c"];
const planetSizes = [10, 15, 20, 25, 30];
const planetDistances = [100, 150, 200, 250, 300];
const planetSpeeds = [0.01, 0.02, 0.03, 0.04, 0.05];

function drawSun(context, x, y) {
	context.beginPath();
	context.arc(x, y, sunRadius, 0, Math.PI * 2);
	context.fillStyle = sunColor;
	context.fill();
}

function drawPlanet(context, x, y, size, color) {
	context.beginPath();
	context.arc(x, y, size, 0, Math.PI * 2);
	context.fillStyle = color;
	context.fill();
}

function drawSolarSystem(context, time) {
	context.clearRect(0, 0, canvas.width, canvas.height);
	
	const centerX = canvas.width / 2;
	const centerY = canvas.height / 2;
	
	drawSun(context, centerX, centerY);
	
	for (let i = 0; i < planetSizes.length; i++) {
		const distance = planetDistances[i];
		const angle = time * planetSpeeds[i];
		const planetX = centerX + distance * Math.cos(angle);
		const planetY = centerY + distance * Math.sin(angle);
		drawPlanet(context, planetX, planetY, planetSizes[i], planetColors[i]);
	}
}

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
let time = 0;

function animate() {
	const speed = getSpeed();
	time += speed;
	drawSolarSystem(context, time);
	requestAnimationFrame(animate);
}

const speedInput = document.getElementById("speed");
speedInput.addEventListener("input", function() {
	const speed = getSpeed();
	document.getElementById("speed-value").textContent = speed.toFixed(1);
});

animate();
function getSpeed() {
	const speedInput = document.getElementById("speed");
	return parseFloat(speedInput.value);
}