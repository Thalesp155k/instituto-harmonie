const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(isOpen));
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const revealElements = document.querySelectorAll(
  ".section-title, .card, .about-image, .about-copy, .photo-card, .step, .location-copy, .map"
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

window.addEventListener("scroll", () => {
  const header = document.querySelector(".topbar");

  if (window.scrollY > 20) {
    header?.classList.add("scrolled");
  } else {
    header?.classList.remove("scrolled");
  }
});