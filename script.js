// Toggle the mobile menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Smooth scroll for "Get Started"
document.getElementById('getStartedBtn').addEventListener('click', () => {
  document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
});

// Close nav after clicking a link on mobile
document.querySelectorAll('#nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});
