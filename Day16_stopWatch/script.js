let timer = document.getElementById("timer");
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");
let startTime;
let elapsedTime = 0;
let timerInterval;


startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

function padTime(time) {
  return (time < 10 ? "0" : "") + time;
}

function updateTimer() {
  if (startTime === 0){
    timer.textContent = `00:00:00`;
  }
  else{
    let now = Date.now();
    elapsedTime = now - startTime;
    let seconds = Math.floor(elapsedTime / 1000) % 60;
    let minutes = Math.floor(elapsedTime / 60000) % 60;
    let hours = Math.floor(elapsedTime / 3600000);
    timer.textContent = `${padTime(hours)}:${padTime(minutes)}:${padTime(seconds)}`;
  }
  }

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  stopTimer();
  elapsedTime = 0;
  startTime = 0
  updateTimer();
}
