const cards = document.querySelectorAll('.overview-card');
let currentIndex = 0;

function showCard(index) {
  cards.forEach((card, cardIndex) => {
    card.classList.toggle('active', cardIndex === index);
  });
}

function rotateCards() {
  currentIndex = (currentIndex + 1) % cards.length;
  showCard(currentIndex);
}

if (cards.length > 1) {
  setInterval(rotateCards, 3000);
}

showCard(currentIndex);
