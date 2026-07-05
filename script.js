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

const menuToggle = document.querySelector('.menu-toggle');
const siteHeader = document.querySelector('.site-header');

if (menuToggle && siteHeader) {
  const closeMenu = () => {
    siteHeader.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation menu');
  };

  menuToggle.addEventListener('click', () => {
    const isOpen = siteHeader.classList.toggle('menu-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
  });

  siteHeader.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 640) closeMenu();
  });
}
