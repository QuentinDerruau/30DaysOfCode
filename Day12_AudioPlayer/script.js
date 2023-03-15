var audio = document.getElementById("myAudio");


function playAudio() {
  audio.play();
}

function pauseAudio() {
  audio.pause();
}

function stopAudio() {
  audio.pause();
  audio.currentTime = 0;
}

function fastForward() {
  audio.currentTime += 5;
}

function rewind() {
  audio.currentTime -= 5;
}