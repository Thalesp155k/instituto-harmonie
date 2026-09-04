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

const videoHarmonie = document.querySelector(".harmonie-video");
const soundBtn = document.querySelector(".video-sound-btn");

if (videoHarmonie && soundBtn) {
  soundBtn.addEventListener("click", () => {
    videoHarmonie.muted = !videoHarmonie.muted;

    if (videoHarmonie.muted) {
      soundBtn.textContent = "Ativar som";
    } else {
      soundBtn.textContent = "Desativar som";
      videoHarmonie.play();
    }
  });
}
  observer.observe(harmonieVideo);
