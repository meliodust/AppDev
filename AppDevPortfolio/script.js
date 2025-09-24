// Sticky Nav
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
      nav.classList.add('sticky');
    } else {
      nav.classList.remove('sticky');
    }
  });
  
  // Reveal on Scroll for Projects (or any elements with “reveal” class)
  const revealElements = document.querySelectorAll('.reveal');
  
  function revealOnScroll() {
    for (const el of revealElements) {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add('active');
      }
    }
  }
  
  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);
  