const carouselData = [
  {
    img: 'images/Rectangle 24.png',
    title: 'Inner Peace',
    room: '01 — Bed Room'
  },
  {
    img: 'images/Rectangle 25.png',
    title: 'Comfort Space',
    room: '02 — Living Room'
  },
  {
    img: 'images/ractangle 27.jpg',
    title: 'Clean Vibes',
    room: '03 — Dining'
  }
];

const carouselContainer = document.getElementById('carousel');
const dots = document.querySelectorAll('.dot');

// Render carousel items
function renderCarousel() {
  carouselContainer.innerHTML = '';

  carouselData.forEach((item, index) => {
    const div = document.createElement('div');
    div.classList.add('carousel-item');
    div.classList.add(index === 0 ? 'main' : 'side');

    div.innerHTML = `
      <img src="${item.img}" alt="Room ${index + 1}">
      <div class="overlay">
        <span>${item.room}</span>
        <h3>${item.title}</h3>
        <div class="arrow-btn">→</div>
      </div>
    `;

    carouselContainer.appendChild(div);
  });

  updateDots();
}

// Handle next button
document.getElementById('next').addEventListener('click', () => {
  const first = carouselData.shift();
  carouselData.push(first);
  renderCarousel();
});

// Update dots based on active index (always index 0 after shift)
function updateDots() {
  dots.forEach(dot => dot.classList.remove('active'));
  dots[0].classList.add('active');
}

// Initial render
renderCarousel();
