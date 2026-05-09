// Scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Staggered children
document.querySelectorAll('.fade-in').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 0.12}s`;
});

// Nav scroll effect
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 60) {
    nav.style.padding = '14px 60px';
    nav.style.background = 'rgba(13,17,32,0.97)';
  } else {
    nav.style.padding = '20px 60px';
    nav.style.background = 'rgba(13,17,32,0.85)';
  }
});

// Form submit
document.querySelector('.form-submit').addEventListener('click', () => {
  const btn = document.querySelector('.form-submit');
  btn.textContent = '✓ Mensagem Enviada!';
  btn.style.background = '#22c55e';
  btn.style.color = '#fff';
  setTimeout(() => {
    btn.textContent = 'Enviar Mensagem →';
    btn.style.background = '';
    btn.style.color = '';
  }, 3000);
});
/*ALTERAÇÕES PRA PROJ AQQ*/

// Portfolio image carousel on hover
document.querySelectorAll('.portfolio-card').forEach(card => {
  const images = card.querySelectorAll('.portfolio-card-images img');
  let currentIndex = 0;
  let interval;

  if (images.length > 1) {
    card.addEventListener('mouseenter', () => {
      interval = setInterval(() => {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
      }, 1200); // Troca a cada 1.2 segundos
    });

    card.addEventListener('mouseleave', () => {
      clearInterval(interval);
      images[currentIndex].classList.remove('active');
      currentIndex = 0;
      images[0].classList.add('active');
    });

    // Primeira imagem ativa
    images[0].classList.add('active');
  }
});