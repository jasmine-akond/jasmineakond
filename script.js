function initOverviewCarousel() {
  const cards = document.querySelectorAll('.overview-card');
  if (cards.length === 0) return;

  let currentIndex = 0;

  const showCard = (index) => {
    cards.forEach((card, cardIndex) => {
      card.classList.toggle('active', cardIndex === index);
    });
  };

  showCard(currentIndex);

  if (cards.length > 1) {
    setInterval(() => {
      currentIndex = (currentIndex + 1) % cards.length;
      showCard(currentIndex);
    }, 3000);
  }
}

function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const siteHeader = document.querySelector('.site-header');
  if (!menuToggle || !siteHeader) return;

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

function initPortfolioStacking() {
  const cards = document.querySelectorAll('.portfolio-grid .portfolio-card');
  if (cards.length === 0) return;

  const updateCardLayout = () => {
    cards.forEach((card, index) => {
      card.style.setProperty('--stack-order', String(index + 1));

      const cardHeight = card.offsetHeight;
      const centeredTop = (window.innerHeight - cardHeight) / 2;
      const safeTop = Math.max(24, centeredTop);
      card.style.setProperty('--sticky-top', `${safeTop}px`);
    });
  };

  updateCardLayout();
  window.addEventListener('resize', updateCardLayout);
  window.addEventListener('load', updateCardLayout);
}

initOverviewCarousel();
initMobileMenu();
initPortfolioStacking();
