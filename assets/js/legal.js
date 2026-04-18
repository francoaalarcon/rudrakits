/* ============================================================
   RUDRA KITS – legal.js
   ============================================================ */
// Smooth scroll for TOC links
document.querySelectorAll('.legal-toc-list a').forEach(link => {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
