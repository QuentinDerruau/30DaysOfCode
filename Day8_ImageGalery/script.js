const thumbnails = document.querySelectorAll('.gallery-thumbnails img');
const mainImage = document.querySelector('.gallery-main img');
const overlay = document.querySelector('.zoom-overlay');

let activeThumbnail = 0;

function setActiveThumbnail(index) {
  thumbnails[activeThumbnail].classList.remove('active');
  thumbnails[index].classList.add('active');
  activeThumbnail = index;
}

function updateMainImage() {
  mainImage.src = thumbnails[activeThumbnail].src;
}

function zoomIn() {
  mainImage.classList.add('zoom-in');
  overlay.classList.add('show');
}

function zoomOut() {
  mainImage.classList.remove('zoom-in');
  overlay.classList.remove('show');
}

thumbnails.forEach(function(thumbnail, index) {
  thumbnail.addEventListener('click', function() {
    setActiveThumbnail(index);
    updateMainImage();
  });
});

mainImage.addEventListener('click', zoomIn);

overlay.addEventListener('click', zoomOut);