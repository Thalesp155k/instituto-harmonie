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

const harmonieVideo = document.querySelector(".harmonie-video");

if (harmonieVideo) {
  harmonieVideo.muted = true;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          harmonieVideo.play().catch(() => {});
        } else {
          harmonieVideo.pause();
        }
      });
    },
    {
      threshold: 0.35
    }
  );

  observer.observe(harmonieVideo);
}