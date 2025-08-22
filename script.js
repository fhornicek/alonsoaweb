const swiper = new Swiper('.mySwiper', {
    loop: true,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  const lightboxOverlay = document.getElementById('lightbox-overlay');
const lightboxImage = lightboxOverlay.querySelector('img');
const lightboxClose = document.getElementById('lightbox-close');

const galleryImages = document.querySelectorAll('.container img');

galleryImages.forEach(img => {
  if (!img.classList.contains('no-lightbox')) {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
      lightboxImage.src = img.src;
      lightboxOverlay.style.display = 'flex';
    });
  } else {
    img.style.cursor = 'default';
  }
});

lightboxClose.addEventListener('click', () => {
  lightboxOverlay.style.display = 'none';
  lightboxImage.src = '';
});

lightboxOverlay.addEventListener('click', e => {
  if(e.target === lightboxOverlay) {
    lightboxOverlay.style.display = 'none';
    lightboxImage.src = '';
  }
});

document.addEventListener('keydown', e => {
  if(e.key === 'Escape' && lightboxOverlay.style.display === 'flex') {
    lightboxOverlay.style.display = 'none';
    lightboxImage.src = '';
  }
});