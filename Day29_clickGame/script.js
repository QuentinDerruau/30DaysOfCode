let score = 0;
let timeLeft = 10;
let timerId = null;

const container = document.getElementById('container');
const clickArea = document.getElementById('clickArea');

function spawnClickArea() {
	
	clickArea.style.top = `${Math.random() * (container.offsetHeight - clickArea.offsetHeight)}px`;
	clickArea.style.left = `${Math.random() * (container.offsetWidth - clickArea.offsetWidth)}px`;
}

function startTimer() {
	document.getElementById('timer').innerHTML = `Remaining Time: ${timeLeft}`;
	timerId = setInterval(() => {
		timeLeft--;
		document.getElementById('timer').innerHTML = `Remaining Time: ${timeLeft}`;
		if (timeLeft === 0) {
			endGame();
		}
	}, 1000);
}

function endGame() {
	clearInterval(timerId);
	clickArea.removeEventListener('click', handleClick);
	alert(`No more time! Finale score : ${score}.`);
}

function handleClick() {
	score++;
	document.getElementById('score').innerHTML = `Score: ${score}`;
	spawnClickArea();
}

clickArea.addEventListener('click', handleClick);

spawnClickArea();
startTimer();