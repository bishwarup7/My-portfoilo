// Mobile Menu Toggle
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

// Active link highlight on scroll
const links = document.querySelectorAll('nav a[href^="#"]');
window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + 100; // offset for fixed navbar
  links.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if (section) {
      if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
        link.classList.add('text-blue-600', 'font-bold');
      } else {
        link.classList.remove('text-blue-600', 'font-bold');
      }
    }
  });
});



// Animate skill meters on scroll
window.addEventListener('scroll', () => {
  const skills = document.querySelectorAll('.meter > i');
  skills.forEach(meter => {
    const parent = meter.closest('.skill');
    if (parent.getBoundingClientRect().top < window.innerHeight - 50) {
      meter.style.width = meter.getAttribute('style').split('width:')[1];
    }
  });
});

// Initialize AOS
AOS.init({
  duration: 1000,
  once: true
});

document.getElementById('resumeBtn').addEventListener('click', () => {
  const data = `Your CV content here...`;
  const blob = new Blob([data], { type: 'application/pdf' }); // or 'text/plain'
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Your_Name_CV.pdf';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
});
