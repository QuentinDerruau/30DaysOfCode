const board = document.querySelector('.board');
const restartBtn = document.querySelector('.restart');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let counter = 0;
const numOfCards = 8;

const images = [
  'https://via.placeholder.com/150/0000FF/FFFFFF/?text=1',
  'https://via.placeholder.com/150/FF0000/FFFFFF/?text=2',
  'https://via.placeholder.com/150/00FF00/FFFFFF/?text=3',
  'https://via.placeholder.com/150/FFFF00/000000/?text=4'
];

const cards = [...images, ...images];


function shuffleCards() {
  cards.forEach((card, index) => {
    let randomPos = Math.floor(Math.random() * cards.length);
    [cards[index], cards[randomPos]] = [cards[randomPos], cards[index]];
  });
}


function createBoard() {
  shuffleCards();
  for (let i = 0; i < numOfCards; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.framework = cards[i];
    card.addEventListener('click', flipCard);
    const front = document.createElement('div');
    front.classList.add('front');
    const back = document.createElement('div');
    back.classList.add('back');
    back.style.backgroundImage = `url(${cards[i]})`;
    card.appendChild(front);
    card.appendChild(back);
    board.appendChild(card);
  }
}


function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  this.classList.add('flip');
  if (!hasFlippedCard) {

    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  checkForMatch();
}


function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  isMatch ? disableCards() : unflipCards();
}


function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  resetBoard();
  counter++;
}


function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetBoard();
  }, 1000);
}


function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}


function restartGame() {
  counter = 0;
  board.innerHTML = '';
  createBoard();
}


createBoard();


restartBtn.addEventListener('click', restartGame);