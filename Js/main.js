// Mobile menu toggle
const mobileBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');
mobileBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Close mobile menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});

// Active link highlight on scroll + smooth scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-link');

function updateActiveNav() {
  let current = '';
  const scrollPos = window.scrollY + 150;
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });
  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('href') === `#${current}`) {
      item.classList.add('active');
    }
  });
  // handle home special
  if (window.scrollY < 100) {
    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === '#home') item.classList.add('active');
    });
  }
}

window.addEventListener('scroll', updateActiveNav);
window.addEventListener('load', updateActiveNav);

// Smooth scroll for nav links
document.querySelectorAll('.nav-link').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Fade-up animation on scroll
const fadeElements = document.querySelectorAll('.fade-up');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -20px 0px' });
fadeElements.forEach(el => observer.observe(el));

// also ensure any dynamic cards get observed
// add little style for navbar background on scroll
const navbar = document.getElementById('navbar');
const logoWrapper = document.querySelector('.logo-wrapper');

window.addEventListener('scroll', () => {
if (window.scrollY > 80) {
  navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
  logoWrapper.classList.add('hide');
} else {
  navbar.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
  logoWrapper.classList.remove('hide');
}
});