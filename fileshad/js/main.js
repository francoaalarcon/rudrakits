/**
 * main.js — Huella Agencia Digital
 */
document.addEventListener('DOMContentLoaded', () => {

  /* ── Ticker: duplicar contenido para loop infinito ── */
  const ticker = document.querySelector('.ticker-track');
  if (ticker) {
    const clone = ticker.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    ticker.parentElement.appendChild(clone);
  }

  /* ── Header: sombra suave al hacer scroll ── */
  const headerEl = document.querySelector('header');
  if (headerEl) {
    const onScroll = () => {
      headerEl.classList.toggle('scrolled', window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ── Scroll reveal: fade-up ── */
  const revealEls = document.querySelectorAll('[data-reveal]');
  if (revealEls.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });
    revealEls.forEach(el => observer.observe(el));
  }

});

/* ── FAQ Acordeón ── */
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
  const trigger = item.querySelector('.faq-trigger');
  trigger.addEventListener('click', () => {
    const isOpen = item.classList.contains('is-open');

    // Cierra todos
    faqItems.forEach(i => {
      i.classList.remove('is-open');
      i.querySelector('.faq-trigger').setAttribute('aria-expanded', 'false');
    });

    // Abre el clickeado si estaba cerrado
    if (!isOpen) {
      item.classList.add('is-open');
      trigger.setAttribute('aria-expanded', 'true');
    }
  });
});
