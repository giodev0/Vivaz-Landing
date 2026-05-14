// ─── ANIMÃÇÕES DE SCROLL (FADE IN) ───
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ─── EFEITO DA NAVBAR AO ROLAR ───
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

// ─── CARROSSEL DE FOTOS NO PORTFÓLIO ───
document.querySelectorAll('.portfolio-card').forEach(card => {
  const images = card.querySelectorAll('.portfolio-card-images img');
  let currentIndex = 0;
  let interval;

  if (images.length > 1) {
    // Garante que a primeira imagem comece ativa
    images[0].classList.add('active');

    const startCarousel = () => {
      // Evita criar múltiplos intervalos se já estiver rodando
      if (interval) clearInterval(interval); 
      
      interval = setInterval(() => {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
      }, 1200);
    };

    const stopCarousel = () => {
      clearInterval(interval);
      images.forEach(img => img.classList.remove('active'));
      currentIndex = 0;
      images[0].classList.add('active');
    };

    // Eventos para Computador (Mouse)
    card.addEventListener('mouseenter', startCarousel);
    card.addEventListener('mouseleave', stopCarousel);

    // Eventos para Celular (Toque)
    // No mobile, as fotos trocam enquanto o usuário mantém o dedo pressionado
    card.addEventListener('touchstart', startCarousel, { passive: true });
    card.addEventListener('touchend', stopCarousel);
  }
});

// Nota: A parte do 'form-submit' foi removida pois o formulário foi substituído pelo Mapa.