const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
let isDrawing = false;
let isErasing = false;
let lastX = 0;
let lastY = 0;
let penSize = 10;
let penColor = '#000000';

function startDrawing(e) {
  isDrawing = true;
  lastX = e.offsetX;
  lastY = e.offsetY;
}

function draw(e) {
  if (!isDrawing) return;
  context.beginPath();
  context.moveTo(lastX, lastY);
  context.lineTo(e.offsetX, e.offsetY);
  context.strokeStyle = penColor;
  context.lineWidth = penSize;
  context.stroke();
  lastX = e.offsetX;
  lastY = e.offsetY;
}

function stopDrawing() {
  isDrawing = false;
}

function startErasing(e) {
  isErasing = true;
  context.strokeStyle = 'white';
  context.lineWidth = penSize;
  context.beginPath();
  context.moveTo(lastX, lastY);
  context.lineTo(e.offsetX, e.offsetY);
  context.stroke();
  lastX = e.offsetX;
  lastY = e.offsetY;
}

function stopErasing() {
  isErasing = false;
  context.strokeStyle = penColor;
}

function updatePenSize() {
  penSize = this.value;
}

function updatePenColor() {
  penColor = this.value;
}

function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);
canvas.addEventListener('mousedown', startErasing);
canvas.addEventListener('mousemove', (e) => isErasing && startErasing(e));
canvas.addEventListener('mouseup', stopErasing);
canvas.addEventListener('mouseout', stopErasing);
document.getElementById('penBtn').addEventListener('click', () => {
  isErasing = false;
  this.classList.add('active');
  document.getElementById('eraserBtn').classList.remove('active');
});
document.getElementById('eraserBtn').addEventListener('click', () => {
  isErasing = true;
  this.classList.add('active');
  document.getElementById('penBtn').classList.remove('active');
});
document.getElementById('sizeRange').addEventListener('input', updatePenSize);
document.getElementById('colorPicker').addEventListener('input', updatePenColor);
document.getElementById('clearBtn').addEventListener('click', clearCanvas);